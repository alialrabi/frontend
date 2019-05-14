import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { UserOrdersPage } from '../user-orders/user-orders';
import { MyApp } from '../../app/app.component';
import { UserOrderDetailPage } from '../user-order-detail/user-order-detail';

/**
 * Generated class for the OrdersMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-orders-map',
  templateUrl: 'orders-map.html',
})
export class OrdersMapPage {

  @ViewChild('map') elementRef: ElementRef;

  map: any;

  order = null;

  language = MyApp.language
  direction = MyApp.direction

  from = ''

  userDetailIemParam;
  userDetailUserTypeParam;

  isCordova = false;


  constructor(public navCtrl: NavController, public navParams: NavParams , public platform:Platform) {
    this.order = this.navParams.get("item");
    this.from = this.navParams.get("from");
      this.userDetailIemParam = this.navParams.get('order')
      this.userDetailUserTypeParam = this.navParams.get('userType')

      if (this.platform.is("cordova") && this.platform.is("android")) {
        this.isCordova = true;
      }

    this.platform.registerBackButtonAction(() => {
      if(this.from == 'UserOrderDetailPage'){
        this.navCtrl.setRoot(UserOrderDetailPage , {item:this.userDetailIemParam , userType:this.userDetailUserTypeParam});
      }else{
      this.navCtrl.setRoot(UserOrdersPage);
      }

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersMapPage');
    this.loadmap();
  }

  loadmap() {
    let latLng = new google.maps.LatLng(Number.parseFloat(this.order.latitude), Number.parseFloat(this.order.longitude));

    let mapOptions = {
      center: latLng,
      zoom:14
    }

    this.map = new google.maps.Map(this.elementRef.nativeElement, mapOptions);
    console.log('----------');
    let marker = new google.maps.Marker({
      map: this.map,
      position: latLng,
      animation: google.maps.Animation.DROP,
      title: this.order.name,
      icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
    });
  }

  back(){
    if(this.from == 'UserOrderDetailPage'){
      this.navCtrl.setRoot(UserOrderDetailPage , {item:this.userDetailIemParam , userType:this.userDetailUserTypeParam});
    }else{
    this.navCtrl.setRoot(UserOrdersPage);
    }
  }


}
