import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, Platform, ToastController, AlertController } from 'ionic-angular';
import { UserAddressesPage } from '../user-addresses/user-addresses';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { AddressService } from '../../providers/auth/address.service';
import { TranslateService } from '@ngx-translate/core';
import { Principal } from '../../providers/auth/principal.service';
import { MyApp } from '../../app/app.component';

/**
 * Generated class for the EditAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-edit-address',
  templateUrl: 'edit-address.html',
})
export class EditAddressPage {

  @ViewChild('map') elementRef: ElementRef;
  @ViewChild('chooseLocation') chooseLocationelementRef: ElementRef;


  mapStyle = {
    height: "0%",
    width: "0%"
  }
  mapStyle1 = {
    height: "0%",
    width: "0%"
  }
  map: any;
  openMap = false;
  mainMarker = null;
  public user;

  public pleaseWait;
  public alex = 'Alexandria';
  flat = 'Flat'

  address = {
    country: 'Egypt',
    city: '',
    street: '',
    userId: 0,
    latitude: '0',
    longitude: '0',
    region: '',
    livingType: '',
    building: '',
    floor: '',
    flatNumber: '',
    otherDetails: '',
    // mobilePhoneNumber: '',
    // homePhoneNumber: '',
    name: ''
  }

  cityValue = ''
  streetValue = ''
  latitudeValue = '0'
  longitudeValue = '0'
  regionValue = ''
  livingTypeValue = ''
  buildingValue = ''
  floorValue = ''
  flatNumberValue = ''
  otherDetailsValue = ''
  // mobilePhoneNumberValue = ''
  // homePhoneNumberValue = ''
  nameValue = ''


  private addAddressError: string;
  private addAdressSuccessString: string;
  myForm: FormGroup;
  to = null;

  language = MyApp.language
  direction = MyApp.direction

  //egyptText = 'Egypt';

  alexValue = ''
  cairoValue = ''
  tantaValue = ''
  shibinValue = ''
  daminhoorValue = ''
  banhaValue = ''

  flatValue = ''
  homeValue = ''
  officeValue = ''

  cityPlaceHolder = ''

  locationDisable = true;
  loadWithOutLocation = false;
  haveMarkerToLocation = false;

  dialogTitle = ''
  dialogMessage = ''
  ok = ''

  isCordova = false;

  okText = ''
  cancelText = ''


  constructor(public navCtrl: NavController, private loading: LoadingController, public renderer: Renderer , public _alert: AlertController,
    public navParams: NavParams, public locationAccuracy: LocationAccuracy, public addressService: AddressService, public toastCtrl: ToastController,
    public translateService: TranslateService, private app: App, public platform: Platform, private principal: Principal, private builder: FormBuilder) {
    this.address = this.navParams.get("item");
    this.alex = this.getCity(this.address.city);

    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.isCordova = true;
    }

    this.flat = this.getLivingType(this.address.livingType)

    this.cityValue = this.getCity(this.address.city);
    this.streetValue = this.address.street
    this.latitudeValue = this.address.latitude
    this.longitudeValue = this.address.longitude
    this.regionValue = this.address.region
    this.livingTypeValue = this.getLivingType(this.address.livingType)
    this.buildingValue = this.address.building
    this.floorValue = this.address.floor
    this.flatNumberValue = this.address.flatNumber
    this.otherDetailsValue = this.address.otherDetails
    // this.mobilePhoneNumberValue = this.address.mobilePhoneNumber
    // this.homePhoneNumberValue = this.address.homePhoneNumber
    this.nameValue = this.address.name


    this.translateService.get(["SELECTION_CANCEL" , "SELECTION_OK" , 'EDIT_ADDRESS_ERROR', 'EDIT_ADDRESS_SUCCESS', 'LOCATION_ALERT_TITLE', 'LOCATION_ALERT_MESSAGE', 'OK', 'ALEX', 'CAIRO', 'TANTA', 'DAMNHOR', 'SHIPIN_ELKOM', 'BANHA', 'PLEASE_WAIT', 'OFFICE', 'HOME', 'FLAT']).subscribe((values) => {
      this.addAddressError = values.EDIT_ADDRESS_ERROR;
      this.addAdressSuccessString = values.EDIT_ADDRESS_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT

      this.okText = values.SELECTION_OK
      this.cancelText = values.SELECTION_CANCEL

      this.alexValue = values.ALEX;
      this.cairoValue = values.CAIRO;
      this.daminhoorValue = values.DAMNHOR;
      this.tantaValue = values.TANTA;
      this.shibinValue = values.SHIPIN_ELKOM;
      this.banhaValue = values.BANHA;
      //this.egyptText = values.EGYPT

      this.flatValue = values.FLAT
      this.homeValue = values.HOME
      this.officeValue = values.OFFICE

      this.dialogTitle = values.LOCATION_ALERT_TITLE
      this.dialogMessage = values.LOCATION_ALERT_MESSAGE
      this.ok = values.OK
    })

    this.myForm = builder.group({
      //'country': ['', [Validators.required, Validators.maxLength(45)]],
      //'city': ['Alexandria', []],
      'livingType': ['Flat', []],
      'name': [this.address.name, [Validators.maxLength(45)]],
      'region': [this.address.region, [Validators.required, Validators.maxLength(45)]],
      'street': [this.address.street, [Validators.required, Validators.maxLength(45)]],
      'building': [this.address.building, [Validators.required, Validators.maxLength(45)]],
      'floor': [this.address.floor, [Validators.required, Validators.maxLength(45)]],
      'flatNumber': [this.address.flatNumber, [Validators.required, Validators.maxLength(45)]],
      'otherDetails': [this.address.otherDetails, [Validators.maxLength(45)]],
      // 'mobilePhoneNumber': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      // 'homePhoneNumber': ['', [Validators.pattern("(0)[0-9]{9}")]],
    });

    // this.myForm.get('city').setValue('Alexandria');
    // this.myForm.get('city').updateValueAndValidity();
    // this.myForm.get('city').markAsDirty();
    // this.myForm.get('city').markAsTouched();
    // this.myForm.get('city').markAsPristine();

      this.platform.registerBackButtonAction(() => {
        if (this.openMap) {
          this.mapStyle.height = "0%";
          this.mapStyle.width = "0%";
          this.mapStyle1.height = "0%";
          this.mapStyle1.width = "0%";
          this.flat = this.getLivingType(this.myForm.get("livingType").value)

          this.openMap = false;

        } else {
          this.navCtrl.setRoot(UserAddressesPage);
        }

      });
  }

  ngOnInit() {

    this.myForm.valueChanges
      .map((value) => {
        // Here you can manipulate your value
        value.name = value.name.trim();
        this.address.name = value.name
        value.region = value.region.trim();
        this.address.region = value.region
        value.street = value.street.trim();
        this.address.street = value.street
        value.building = value.building.trim();
        this.address.building = value.building
        value.floor = value.floor.trim();
        this.address.floor = value.floor
        value.flatNumber = value.flatNumber.trim();
        this.address.flatNumber = value.flatNumber
        value.otherDetails = value.otherDetails.trim();
        this.address.otherDetails = value.otherDetails

        return value;
      }).filter((value) => this.myForm.valid)
      .subscribe((value) => {
      });
  }



  ionViewDidLoad() {

    if (this.platform.is("cordova") && (this.platform.is("android") || this.platform.is("ios"))) {
      // this.locationAccuracy.canRequest().then((canRequest: any) => {

      // //this.diagnostic.isLocationEnabled().then((isEnabled) =>{


      // if(canRequest == 0) {
      // the accuracy option will be ignored by iOS


      if (this.address.latitude == '0') {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () => {

            this.loadMap(this)
          }
          ,
          error => {
            this.loadMapWithOutLocation(this);
            console.log('Error requesting location permissions', error)
          }
        );
        // }else{
        //   this.loadMap() 
        // }

        // }).catch(
        //   err =>{
        //     console.log('error' , err);

        //   }
        // );
      } else {
        this.loadMap(this);
      }
    } else {
      this.loadMap(this);
    }

  }
  next() {

    if(this.myForm.valid && !this.checkSpaces()){


    // if (this.locationDisable) {
    //   this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
    //     () => {

    //       this.loadMap()
    //     }
    //     ,
    //     error => console.log('Error requesting location permissions', error)
    //   );
    // }

    if (this.map == null || this.map == undefined) {
      this.loadMapWithOutLocation(this);
    }

    this.mapStyle.height = "100%";
    this.mapStyle.width = "100%";

    this.mapStyle1.height = "95%";
    this.mapStyle1.width = "100%";

    this.openMap = true;

  }

  }

  loadMap(mainClass) {

    if (this.address.latitude != '0') {
     // var mainClass = this;

      let latLng = new google.maps.LatLng(Number.parseFloat(this.address.latitude), Number.parseFloat(this.address.longitude));

      let mapOptions = {
        center: latLng,
        zoom: 15
      }


      mainClass.map = new google.maps.Map(mainClass.elementRef.nativeElement, mapOptions);


      let marker = new google.maps.Marker({
        map: mainClass.map,
        animation: google.maps.Animation.DROP,
        position: mainClass.map.getCenter()
      });

      mainClass.mainMarker = marker;


      var superclass = mainClass;
      google.maps.event.addListener(mainClass.map, 'click', function (event) {
        if (superclass.checkLocation(event.latLng.lat(), event.latLng.lng(), false)) {

          if (superclass.mainMarker != null) {
            superclass.mainMarker.setMap(null);
          }
          var newmarker = new google.maps.Marker({
            position: event.latLng,
            map: superclass.map
          });
          superclass.mainMarker = newmarker;
          superclass.address.latitude = event.latLng.lat();
          superclass.address.longitude = event.latLng.lng();
        }
      });

      mainClass.locationDisable = false;

    } else {

      let options = { timeout: 30000, enableHighAccuracy: true };

      navigator.geolocation.getCurrentPosition(function (position) {
  
  
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        // mainClass.address.latitude = position.coords.latitude + '';
        // mainClass.address.longitude = position.coords.longitude + '';
  
        let mapOptions = {
          center: latLng,
          zoom: 15
        }
  
  
        mainClass.map = new google.maps.Map(mainClass.elementRef.nativeElement, mapOptions);
  
        // if (mainClass.checkLocation(position.coords.latitude, position.coords.longitude, true)) {
  
        //   let marker = new google.maps.Marker({
        //     map: mainClass.map,
        //     animation: google.maps.Animation.DROP,
        //     position: mainClass.map.getCenter()
        //   });
  
        //   mainClass.mainMarker = marker;
        //   mainClass.haveMarkerToLocation = true;
  
        // }else{
        //   mainClass.loadWithOutLocation = true;
        // }
        
        mainClass.loadWithOutLocation = true;  

        var superclass = mainClass;
        google.maps.event.addListener(mainClass.map, 'click', function (event) {
  
          if (superclass.checkLocation(event.latLng.lat(), event.latLng.lng(), false)) {
  
            let flag = true;
            if (superclass.mainMarker != null) {
              flag = false;
              superclass.mainMarker.setMap(null);
            }
            var newmarker = new google.maps.Marker({
              position: event.latLng,
              map: superclass.map
            });
            superclass.mainMarker = newmarker;
            superclass.haveMarkerToLocation = true;
            superclass.address.latitude = event.latLng.lat();
            superclass.address.longitude = event.latLng.lng();
            
            superclass.chooseLocationelementRef._elementRef.nativeElement.disabled = false
            if (flag) {
              superclass.renderer.listen(superclass.chooseLocationelementRef._elementRef.nativeElement, 'click', (event) => {
                superclass.chooseLocation()
              })
            }
          }
        });
  
        mainClass.locationDisable = false;
  
  
  
      }, function (err) {
        console.log(err, 'errrrrrrrrrrrrrrrrrrrrrrrrrrror');
        mainClass.loadMapWithOutLocation(mainClass);
  
        // let toast = mainClass.toastCtrl.create({
        //   message: "error " + err.message,
        //   duration: 10000,
        //   position: 'top'
        // });
        // toast.present();
  
      }
      );
      }

  }

  loadMapWithOutLocation(mainClass) {

    mainClass.loadWithOutLocation = true;

    let latLng = new google.maps.LatLng(31.214262511126286, 29.98716374830485);
    mainClass.address.latitude = 31.214262511126286 + '';
    mainClass.address.longitude = 29.98716374830485 + '';

    let mapOptions = {
      center: latLng,
      zoom: 15
    }



    mainClass.map = new google.maps.Map(mainClass.elementRef.nativeElement, mapOptions);



    var superclass = mainClass;
    google.maps.event.addListener(mainClass.map, 'click', function (event) {

      if (superclass.checkLocation(event.latLng.lat(), event.latLng.lng(), false)) {

        let flag = true;

        if (superclass.mainMarker != null) {
          flag = false;
          superclass.mainMarker.setMap(null);
        }
        var newmarker = new google.maps.Marker({
          position: event.latLng,
          map: superclass.map
        });
        superclass.mainMarker = newmarker;
        superclass.haveMarkerToLocation = true

        superclass.chooseLocationelementRef._elementRef.nativeElement.disabled = false
        if (flag) {
          superclass.renderer.listen(superclass.chooseLocationelementRef._elementRef.nativeElement, 'click', (event) => {
            superclass.chooseLocation()
          })
        }

        superclass.address.latitude = event.latLng.lat();
        superclass.address.longitude = event.latLng.lng();

      }
    });

    mainClass.locationDisable = false;

  }
  checkLocation(lat, lng, first) {
    if (this.checkLocationInAlex(lat, lng)) {
      return true;
    } else {
      if (!first) {
        let alert = this._alert.create({
          title: this.dialogTitle,
          message: this.dialogMessage,
          buttons: [
            {
              text: this.ok,
              handler: () => {

              }
            }
          ]
        });
        alert.present();

      }
    }
  }

  checkLocationInAlex(lat, lng) {
    if (lat < 30.890926697 || lat > 31.3947799 || lng < 29.382800910751712 || lng > 30.290039) {
      return false;
    } else {
      return true;
    }
  }
  checkLocationInTanta(lat, lng) {
    if (lat < 30.746779369 || lat > 30.829999 || lng < 30.94 || lng > 31.049) {
      return false;
    } else {
      return true;
    }
  }
  checkLocationInCairo(lat, lng) {
    if (lat < 29.5 || lat > 30.2999999999 || lng < 30.3 || lng > 32.213010999999) {
      return false;
    } else {
      return true;
    }
  }

  getCity(city) {
    let cityValue = '';
    if (city == 'اسكندريه' || city == 'Alexandria') {
      cityValue = 'Alexandria'
    } else if (city == 'القاهره' || city == 'Cairo') {
      cityValue = 'Cairo'
    } else if (city == 'طنطا' || city == 'Tanta') {
      cityValue = 'Tanta'
    } else if (city == 'دمنهور' || city == 'Damnhor') {
      cityValue = 'Damnhor'
    } else if (city == 'شبين الكوم' || city == 'Shibin Elkom') {
      cityValue = 'Shibin Elkom'
    } else if (city == 'بنها' || city == 'Banha') {
      cityValue = 'Banha'
    }
    return cityValue;
  }
  getCityPlaceHolder() {

    let city = ''
    if (this.alex == 'Alexandria') {
      city = this.alexValue;

    } else if (this.alex == 'Cairo') {
      city = this.cairoValue;

    } else if (this.alex == 'Tanta') {
      city = this.tantaValue;

    } else if (this.alex == 'Damnhor') {
      city = this.daminhoorValue;

    } else if (this.alex == 'Shibin Elkom') {
      city = this.shibinValue;

    } else if (this.alex == 'Banha') {
      city = this.banhaValue;

    }
    return city;
  }
  getalaivingPlaceholder() {

    let livingType = '';
    if (this.flat == 'Flat') {
      livingType = this.flatValue
    } else if (this.flat == 'Home') {
      livingType = this.homeValue
    } else if (this.flat == 'Office') {
      livingType = this.officeValue
    }
    return livingType;

  }
  getLivingType(type) {
    let typeValue = '';
    if (type == 'Flat' || type == 'شقه') {
      typeValue = 'Flat'
    } else if (type == 'منزل' || type == 'Home') {
      typeValue = 'Home'
    } else if (type == 'مكتب' || type == 'Office') {
      typeValue = 'Office'
    }
    return typeValue;
  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
  back() {
    if (this.openMap) {
      this.mapStyle.height = "0%";
      this.mapStyle.width = "0%";
      this.mapStyle1.height = "0%";
      this.mapStyle1.width = "0%";
      this.flat = this.getLivingType(this.myForm.get("livingType").value)
      this.openMap = false;

    } else {
      this.navCtrl.setRoot(UserAddressesPage);
    }
  }
  notChanges() {

    if (this.address.name != this.nameValue || this.address.building != this.buildingValue || this.address.flatNumber != this.flatNumberValue || this.address.floor != this.floorValue || this.address.latitude != this.latitudeValue || this.address.longitude != this.longitudeValue || this.myForm.get("livingType").value != this.livingTypeValue || this.address.otherDetails != this.otherDetailsValue || this.address.region != this.regionValue || this.address.street != this.streetValue) {

      return false;
    } else {
      return true;
    }
  }

  chooseLocation() {

    // this.address.userId = Number.parseInt(localStorage.getItem("userId"));

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.address.city = this.alexValue;
    this.address.livingType = this.getLivingTypeValue(this.myForm.get("livingType").value)

    this.addressService.edit(this.address).subscribe((res) => {

      let toast = this.toastCtrl.create({
        message: this.addAdressSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      load.dismiss();
      // this.myApp.checkAccess();

      this.navCtrl.setRoot(UserAddressesPage, { address: res });

    }, (err) => {
      console.log('error', err);


      // Unable to add address
      // const error = JSON.parse(err.error);
      let displayError = this.addAddressError;

      let toast = this.toastCtrl.create({
        message: displayError,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
      load.dismiss();
    });

  }

  getCityValue(cityValue) {


    let city = ''
    if (cityValue == 'Alexandria') {
      city = this.alexValue;

    } else if (cityValue == 'Cairo') {
      city = this.cairoValue;

    } else if (cityValue == 'Tanta') {
      city = this.tantaValue;

    } else if (cityValue == 'Damnhor') {
      city = this.daminhoorValue;

    } else if (cityValue == 'Shibin Elkom') {
      city = this.shibinValue;

    } else if (cityValue == 'Banha') {
      city = this.banhaValue;

    }
    return city;
  }
  getLivingTypeValue(livingTypeValue) {
    let livingType = '';
    if (livingTypeValue == 'Flat') {
      livingType = this.flatValue
    } else if (livingTypeValue == 'Home') {
      livingType = this.homeValue
    } else if (livingTypeValue == 'Office') {
      livingType = this.officeValue
    }
    return livingType;
  }
  skip() {
    

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.address.latitude = '0';
    this.address.longitude = '0'

    this.address.city = this.alexValue;
    this.address.livingType = this.getLivingTypeValue(this.myForm.get("livingType").value)

    this.addressService.edit(this.address).subscribe((res) => {

      let toast = this.toastCtrl.create({
        message: this.addAdressSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      load.dismiss();
      // this.myApp.checkAccess();

      this.navCtrl.setRoot(UserAddressesPage, { address: res });

    }, (err) => {
      console.log('error', err);


      // Unable to add address
      // const error = JSON.parse(err.error);
      let displayError = this.addAddressError;

      let toast = this.toastCtrl.create({
        message: displayError,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
      load.dismiss();
    });


  }
  notChangesSkip(){
    if (this.address.name != this.nameValue || this.address.building != this.buildingValue || this.address.flatNumber != this.flatNumberValue || this.address.floor != this.floorValue || this.myForm.get("livingType").value != this.livingTypeValue || this.address.otherDetails != this.otherDetailsValue || this.address.region != this.regionValue || this.address.street != this.streetValue) {

      return false;
    } else {
      return true;
    }
  }
  mainMarkerCheck() {
    if (this.mainMarker == null) {
      return true;
    } else {
      return false;
    }
  }
  checkSpaces(){
    if(this.address.building == '' || this.address.flatNumber == '' || this.address.floor == '' || this.address.region == '' || this.address.street == ''){
      return true;
    }else{
      return false;
    }
  }
  checkSpaceTofields(string , field){
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && string == '';

  }

}
