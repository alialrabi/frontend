import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { AddressService } from '../../providers/auth/address.service';
import { MainPage } from '../pages';
import { TranslateService } from '@ngx-translate/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { elementDef } from '@angular/core/src/view';
import { HomePage } from '../home/home';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
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

  address: { country: string, city: string, street: string, userId: Number, postalCode: String, latitude: Number, longitude: Number } = {
    country: '',
    city: '',
    street: '',
    userId: 0,
    postalCode: '',
    latitude: 26.555555555555,
    longitude: 12.5824526
  }

  private addAddressError: string;
  private addAdressSuccessString: string;
  myForm: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, public addressService: AddressService, public toastCtrl: ToastController,
    public translateService: TranslateService, public geolocation: Geolocation, private builder: FormBuilder, public plaform: Platform
  ) {

    this.translateService.get(['ADD_ADDRESS_ERROR', 'ADD_ADDRESS_SUCCESS']).subscribe((values) => {
      this.addAddressError = values.SIGNUP_ERROR;
      this.addAdressSuccessString = values.SIGNUP_SUCCESS;
    })

    this.myForm = builder.group({
      'country': ['', [Validators.required, Validators.maxLength(45)]],
      'city': ['', [Validators.required, Validators.maxLength(45)]],
      'street': ['', [Validators.required, Validators.maxLength(45)]],
      'postalCode': ['', [Validators.required, Validators.maxLength(45)]],
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAddressPage');
    this.loadMap();
  }
  save() {

    this.mapStyle.height = "100%";
    this.mapStyle.width = "100%";

    this.openMap = true;

  }

  loadMap() {

    var mainClass = this;
    let options = { timeout: 30000, enableHighAccuracy: true };

    navigator.geolocation.getCurrentPosition(function (position) {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      mainClass.address.latitude = position.coords.latitude;
      mainClass.address.longitude = position.coords.longitude;

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



    }, function (err) {
      console.log(err);

      let toast = mainClass.toastCtrl.create({
        message: "error " + err.message,
        duration: 10000,
        position: 'top'
      });
      toast.present();

    }
    );

  }
  
  chooseLocation() {

    this.address.userId = Number.parseInt(localStorage.getItem("userId"));
    console.log(this.address, 'sssssssssssssssss');

    this.addressService.save(this.address).subscribe((res) => {
      console.log(res, 'res');

      let toast = this.toastCtrl.create({
        message: this.addAdressSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.navCtrl.push(HomePage);
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
    });

  }
  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
}
