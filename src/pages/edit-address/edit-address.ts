import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, Platform, ToastController } from 'ionic-angular';
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

  mapStyle = {
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
    mobilePhoneNumber: '',
    homePhoneNumber: '',
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
  mobilePhoneNumberValue = ''
  homePhoneNumberValue = ''
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

  constructor(public navCtrl: NavController, private loading: LoadingController,
    public navParams: NavParams, public locationAccuracy: LocationAccuracy, public addressService: AddressService, public toastCtrl: ToastController,
    public translateService: TranslateService, private app: App, public platform: Platform, private principal: Principal,private builder: FormBuilder) {
    this.address = this.navParams.get("item");
    this.alex = this.getCity(this.address.city);
    console.log(this.alex , 'ssssssss');
    
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
    this.mobilePhoneNumberValue = this.address.mobilePhoneNumber
    this.homePhoneNumberValue = this.address.homePhoneNumber
    this.nameValue = this.address.name


    this.translateService.get(['EDIT_ADDRESS_ERROR', 'EDIT_ADDRESS_SUCCESS', 'ALEX', 'CAIRO', 'TANTA', 'DAMNHOR', 'SHIPIN_ELKOM', 'BANHA', 'PLEASE_WAIT', 'OFFICE', 'HOME', 'FLAT']).subscribe((values) => {
      this.addAddressError = values.EDIT_ADDRESS_ERROR;
      this.addAdressSuccessString = values.EDIT_ADDRESS_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT

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
    })

    this.myForm = builder.group({
      //'country': ['', [Validators.required, Validators.maxLength(45)]],
      'city': ['Alexandria', []],
      'livingType': ['Flat', []],
      'name': ['', [Validators.maxLength(45)]],
      'region': ['', [Validators.required, Validators.maxLength(45)]],
      'street': ['', [Validators.required, Validators.maxLength(45)]],
      'building': ['', [Validators.required, Validators.maxLength(45)]],
      'floor': ['', [Validators.required, Validators.maxLength(45)]],
      'flatNumber': ['', [Validators.required, Validators.maxLength(45)]],
      'otherDetails': ['', [Validators.maxLength(45)]],
      'mobilePhoneNumber': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      'homePhoneNumber': ['', [Validators.pattern("(0)[0-9]{9}")]],
    });

    this.myForm.get('city').setValue('Alexandria');
    this.myForm.get('city').updateValueAndValidity();
    this.myForm.get('city').markAsDirty();
    this.myForm.get('city').markAsTouched();
    this.myForm.get('city').markAsPristine();

    if (this.to != null && this.to != undefined) {

      this.platform.registerBackButtonAction(() => {
        if (this.openMap) {
          this.mapStyle.height = "0%";
          this.mapStyle.width = "0%";

          this.openMap = false;

        } else {
          this.navCtrl.setRoot(UserAddressesPage);
        }

      });
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAddressPage');
    if (this.platform.is("android") || this.platform.is("ios")) {
      console.log("---------------------------");
      // this.locationAccuracy.canRequest().then((canRequest: any) => {

      // //this.diagnostic.isLocationEnabled().then((isEnabled) =>{


      //   console.log('canRequest' , canRequest);


      // if(canRequest == 0) {
      // the accuracy option will be ignored by iOS
      this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
        () => {
          console.log("success");

          this.loadMap()
        }
        ,
        error => console.log('Error requesting location permissions', error)
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
      this.loadMap();
    }


  }
  next() {

    console.log(this.locationDisable);


    if (this.locationDisable) {
      this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
        () => {
          console.log("success");

          this.loadMap()
        }
        ,
        error => console.log('Error requesting location permissions', error)
      );
    }


    this.mapStyle.height = "100%";
    this.mapStyle.width = "100%";

    this.openMap = true;

  }

  loadMap() {

    if (this.address.latitude != '0') {
      var mainClass = this;

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
      //  console.log(this.map , 'map');
      //  console.log(this.mainMarker , "marker");

      var superclass = mainClass;
      google.maps.event.addListener(mainClass.map, 'click', function (event) {
        superclass.mainMarker.setMap(null);
        var newmarker = new google.maps.Marker({
          position: event.latLng,
          map: superclass.map
        });
        superclass.mainMarker = newmarker;
        superclass.address.latitude = event.latLng.lat();
        superclass.address.longitude = event.latLng.lng();
        console.log(superclass.address);
      });

      mainClass.locationDisable = false;
      console.log(mainClass.locationDisable);

    } else {

      var mainClass = this;
      let options = { timeout: 30000, enableHighAccuracy: true };

      navigator.geolocation.getCurrentPosition(function (position) {


        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        mainClass.address.latitude = position.coords.latitude + '';
        mainClass.address.longitude = position.coords.longitude + '';

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
        //  console.log(this.map , 'map');
        //  console.log(this.mainMarker , "marker");

        var superclass = mainClass;
        google.maps.event.addListener(mainClass.map, 'click', function (event) {
          superclass.mainMarker.setMap(null);
          var newmarker = new google.maps.Marker({
            position: event.latLng,
            map: superclass.map
          });
          superclass.mainMarker = newmarker;
          superclass.address.latitude = event.latLng.lat();
          superclass.address.longitude = event.latLng.lng();
          console.log(superclass.address);
        });

        mainClass.locationDisable = false;
        console.log(mainClass.locationDisable);



      }, function (err) {
        console.log(err, 'errrrrrrrrrrrrrrrrrrrrrrrrrrror');
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () => {
            console.log("success");

            this.loadMap()
          }
          ,
          error => console.log('Error requesting location permissions', error)
        );

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
  getCityPlaceHolder(){

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
  getalaivingPlaceholder(){

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
      this.openMap = false;

    } else {
      this.navCtrl.setRoot(UserAddressesPage);
    }
  }
  notChanges() {
    if (this.address.name != this.nameValue || this.address.building != this.buildingValue || this.myForm.get("city").value != this.cityValue  || this.address.flatNumber != this.flatNumberValue || this.address.floor != this.floorValue || this.address.homePhoneNumber != this.homePhoneNumberValue || this.address.latitude != this.latitudeValue || this.address.longitude != this.longitudeValue || this.address.mobilePhoneNumber != this.mobilePhoneNumberValue || this.myForm.get("livingType").value != this.livingTypeValue || this.address.otherDetails != this.otherDetailsValue || this.address.region != this.regionValue || this.address.street != this.streetValue) {
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

    this.address.city = this.getCityValue(this.myForm.get("city").value);
    this.address.livingType = this.getLivingTypeValue(this.myForm.get("livingType").value)
    console.log(this.address, 'sssssssssssssssss');

    this.addressService.edit(this.address).subscribe((res) => {
      console.log(res, 'res');

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
    console.log(cityValue, 'ssssssssssss');


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

    this.address.city = this.getCityValue(this.myForm.get("city").value);
    this.address.livingType = this.getLivingTypeValue(this.myForm.get("livingType").value)
    console.log(this.address, 'sssssssssssssssss');

    this.addressService.edit(this.address).subscribe((res) => {
      console.log(res, 'res');

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

}