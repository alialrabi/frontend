import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.order = this.navParams.get("item");

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
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    });
  }


}
