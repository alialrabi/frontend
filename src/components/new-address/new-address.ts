import { Component, ViewChild, ElementRef } from '@angular/core';
import { ViewController, LoadingController, NavParams, App, Platform, ToastController } from 'ionic-angular';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { AddressService } from '../../providers/auth/address.service';
import { TranslateService } from '@ngx-translate/core';
import { Principal } from '../../providers/auth/principal.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MyApp } from '../../app/app.component';

/**
 * Generated class for the NewAddressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
declare var google;
@Component({
  selector: 'new-address',
  templateUrl: 'new-address.html'
})
export class NewAddressComponent {
  @ViewChild('map') elementRef: ElementRef;

  mapStyle = {
    height: "0%",
    width: "0%"
  }
  submapStyle = {
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

  address: { country: string, city: string, street: string, userId: Number, latitude: String, longitude: String ,
    livingType:string , building:string , floor:string , flatNumber:string , otherDetails:string , mobilePhoneNumber:string , homePhoneNumber:string , name:string , region:string } = {
    country: 'Egypt',
    city: '',
    street: '',
    userId: 0,
    latitude: '26.555555555555',
    longitude: '12.5824526',
    region:'',
    livingType:'',
    building:'',
    floor:'',
    flatNumber:'',
    otherDetails:'',
    mobilePhoneNumber:'',
    homePhoneNumber:'',
    name:''
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

  constructor( private loading: LoadingController,public viewCtrl: ViewController ,
    public navParams: NavParams, public locationAccuracy: LocationAccuracy, public addressService: AddressService, public toastCtrl: ToastController,
    public translateService: TranslateService, private app: App, public platform: Platform, private principal: Principal, private builder: FormBuilder) {
    this.user = this.navParams.get("user");
    console.log(this.user);
    

    this.translateService.get(['ADD_ADDRESS_ERROR', 'ADD_ADDRESS_SUCCESS', 'EGYPT', 'ALEX', 'CAIRO', 'TANTA', 'DAMNHOR', 'SHIPIN_ELKOM', 'BANHA', 'PLEASE_WAIT' , 'OFFICE' , 'HOME' , 'FLAT']).subscribe((values) => {
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
      'otherDetails': ['', [ Validators.maxLength(45)]],
      'mobilePhoneNumber': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      'homePhoneNumber': ['', []],
    });

    this.myForm.get('city').setValue('Alexandria');
    this.myForm.get('city').updateValueAndValidity();
    this.myForm.get('city').markAsDirty();
    this.myForm.get('city').markAsTouched();
    this.myForm.get('city').markAsPristine();

   
    
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
  save() {

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


    this.mapStyle.height = "370px";
    this.mapStyle.width = "100%";
    this.submapStyle.height = '290px';
    this.submapStyle.width = '100%'

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

  chooseLocation() {

    // this.address.userId = Number.parseInt(localStorage.getItem("userId"));

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.address.userId = this.user.id;
    this.address.city = this.getCity(this.myForm.get("city").value);
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

      this.chooseAddress(res);
      
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
  getLivingType(livingTypeValue){
    let livingType = '';
    if(livingTypeValue == 'Flat'){
      livingType = this.flatValue
    }else if(livingTypeValue == 'Home'){
      livingType = this.homeValue
    }else if(livingTypeValue == 'Office'){
      livingType = this.officeValue
    }
    return livingType;
  }


  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
  
  skip(){

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.address.latitude = '0';
    this.address.longitude = '0'

    this.address.userId = this.user.id;
    this.address.city = this.getCity(this.myForm.get("city").value);
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

      this.chooseAddress(res);


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

  async chooseAddress(address){
    await this.viewCtrl.dismiss(address);
  }

}
