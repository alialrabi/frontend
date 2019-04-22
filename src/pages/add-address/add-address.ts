import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, App, LoadingController, AlertController } from 'ionic-angular';
import { AddressService } from '../../providers/auth/address.service';
import { MainPage, FirstRunPage } from '../pages';
import { TranslateService } from '@ngx-translate/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { elementDef } from '@angular/core/src/view';
import { HomePage } from '../home/home';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Principal } from '../../providers/auth/principal.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AddOrderPage } from '../add-order/add-order';
import { MyApp } from '../../app/app.component';
import { UserOrdersPage } from '../user-orders/user-orders';
import { ChooseAddressPage } from '../choose-address/choose-address';
import { LocationAccuracy } from '@ionic-native/location-accuracy'
import { UserAddressesPage } from '../user-addresses/user-addresses';

/**
 * Generated class for the AddAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-add-address',
  templateUrl: 'add-address.html',
})
export class AddAddressPage {
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

  address: {
    country: string, city: string, street: string, userId: Number, latitude: String, longitude: String,
    livingType: string, building: string, floor: string, flatNumber: string, otherDetails: string, name: string, region: string
  } = {
      country: 'Egypt',
      city: '',
      street: '',
      userId: 0,
      latitude: '26.555555555555',
      longitude: '12.5824526',
      region: '',
      livingType: '',
      building: '',
      floor: '',
      flatNumber: '',
      otherDetails: '',
      name: ''
    }

  private addAddressError: string;
  private addAdressSuccessString: string;
  myForm: FormGroup;
  to = null;

  language = MyApp.language
  direction = MyApp.direction

  egyptText = 'Egypt';

  alexValue = ''
  cairoValue = ''
  tantaValue = ''
  shibinValue = ''
  daminhoorValue = ''
  banhaValue = ''

  flatValue = ''
  homeValue = ''
  officeValue = ''

  locationDisable = true;

  dialogTitle = ''
  dialogMessage = ''
  ok = ''

  constructor(public navCtrl: NavController, private loading: LoadingController, public _alert: AlertController,
    public navParams: NavParams, public locationAccuracy: LocationAccuracy, public addressService: AddressService, public toastCtrl: ToastController,
    public translateService: TranslateService, private app: App, public platform: Platform, private principal: Principal, private builder: FormBuilder) {
    this.to = this.navParams.get("address");

    this.translateService.get(['ADD_ADDRESS_ERROR', 'ADD_ADDRESS_SUCCESS',
      'EGYPT', 'ALEX', 'CAIRO', 'TANTA', 'DAMNHOR', 'SHIPIN_ELKOM',
      'BANHA', 'PLEASE_WAIT',
      'OFFICE', 'HOME', 'FLAT', 'LOCATION_ALERT_TITLE', 'LOCATION_ALERT_MESSAGE', 'OK']).subscribe((values) => {
        this.addAddressError = values.ADD_ADDRESS_ERROR;
        this.addAdressSuccessString = values.ADD_ADDRESS_SUCCESS;
        this.pleaseWait = values.PLEASE_WAIT

        this.alexValue = values.ALEX;
        this.cairoValue = values.CAIRO;
        this.daminhoorValue = values.DAMNHOR;
        this.tantaValue = values.TANTA;
        this.shibinValue = values.SHIPIN_ELKOM;
        this.banhaValue = values.BANHA;
        this.egyptText = values.EGYPT

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
      'name': ['', [Validators.maxLength(45)]],
      'region': ['', [Validators.required, Validators.maxLength(45)]],
      'street': ['', [Validators.required, Validators.maxLength(45)]],
      'building': ['', [Validators.required, Validators.maxLength(45)]],
      'floor': ['', [Validators.required, Validators.maxLength(45)]],
      'flatNumber': ['', [Validators.required, Validators.maxLength(45)]],
      'otherDetails': ['', [Validators.maxLength(45)]],
      //'mobilePhoneNumber': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      // 'homePhoneNumber': ['', []],
    });

    // this.myForm.get('city').setValue('Alexandria');
    // this.myForm.get('city').updateValueAndValidity();
    // this.myForm.get('city').markAsDirty();
    // this.myForm.get('city').markAsTouched();
    // this.myForm.get('city').markAsPristine();

    if (this.to != null && this.to != undefined) {

      this.platform.registerBackButtonAction(() => {
        if (this.to == 'UserAddressesPage') {
          this.navCtrl.setRoot(UserAddressesPage);
        } else {
          this.navCtrl.setRoot(ChooseAddressPage);
        }

      });
    }
  }

  ngOnInit() {
    this.principal.identity().then((account) => {
      console.log(account);

      if (account === null) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {
        this.user = account;

      }
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAddressPage');

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
        error => {
          this.loadMapWithOutLocation();
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
      this.loadMap();
    }


  }
  save() {

    // console.log(this.locationDisable);


    // if (this.locationDisable) {
    //   this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
    //     () => {
    //       console.log("success");

    //       this.loadMap()
    //     }
    //     ,
    //     error => console.log('Error requesting location permissions', error)
    //   );
    // }

    if(this.map == null || this.map == undefined){
      this.loadMapWithOutLocation();
    }

    this.mapStyle.height = "100%";
    this.mapStyle.width = "100%";

    this.openMap = true;

  }

  loadMap() {

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

      if (mainClass.checkLocation(position.coords.latitude, position.coords.longitude, true)) {

        let marker = new google.maps.Marker({
          map: mainClass.map,
          animation: google.maps.Animation.DROP,
          position: mainClass.map.getCenter()
        });

        mainClass.mainMarker = marker;

      }
      //  console.log(this.map , 'map');
      //  console.log(this.mainMarker , "marker");

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



    }, function (err) {
      console.log(err, 'errrrrrrrrrrrrrrrrrrrrrrrrrrror');
      this.loadMapWithOutLocation();

      // let toast = mainClass.toastCtrl.create({
      //   message: "error " + err.message,
      //   duration: 10000,
      //   position: 'top'
      // });
      // toast.present();

    }
    );

  }
  loadMapWithOutLocation() {

    var mainClass = this;

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

  }

  chooseLocation() {

    // this.address.userId = Number.parseInt(localStorage.getItem("userId"));

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.address.userId = this.user.id;
    this.address.city = this.alexValue;
    this.address.livingType = this.getLivingType(this.myForm.get("livingType").value)
    this.address.country = this.egyptText;
    console.log(this.address, 'sssssssssssssssss');

    this.addressService.save(this.address).subscribe((res) => {
      console.log(res, 'res');

      let toast = this.toastCtrl.create({
        message: this.addAdressSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      load.dismiss();
      // this.myApp.checkAccess();
      if (this.to == null || this.to == undefined) {
        this.navCtrl.setRoot(UserOrdersPage);
      } else if (this.to == 'UserAddressesPage') {
        this.navCtrl.setRoot(UserAddressesPage);
      } else {
        this.navCtrl.setRoot(AddOrderPage, { address: res });
      }
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

  getCity(cityValue) {
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
  getLivingType(livingTypeValue) {
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


  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
  back() {
    if (this.to == 'UserAddressesPage') {
      this.navCtrl.setRoot(UserAddressesPage);
    } else {
      this.navCtrl.setRoot(ChooseAddressPage);
    }
  }
  skip() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.address.latitude = '0';
    this.address.longitude = '0'

    this.address.userId = this.user.id;
    this.address.city = this.alexValue;
    this.address.livingType = this.getLivingType(this.myForm.get("livingType").value)
    this.address.country = this.egyptText;
    console.log(this.address, 'sssssssssssssssss');

    this.addressService.save(this.address).subscribe((res) => {
      console.log(res, 'res');

      let toast = this.toastCtrl.create({
        message: this.addAdressSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      load.dismiss();
      // this.myApp.checkAccess();
      if (this.to == null || this.to == undefined) {
        this.navCtrl.setRoot(UserOrdersPage);
      } else if (this.to == 'UserAddressesPage') {
        this.navCtrl.setRoot(UserAddressesPage);
      } else {
        this.navCtrl.setRoot(AddOrderPage, { address: res });
      }
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
}
