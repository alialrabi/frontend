import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { UserOrdersPage } from '../user-orders/user-orders';

/**
 * Generated class for the OfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
})
export class OfferPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferPage');
  }
  orderNow(){
    this.navCtrl.setRoot(UserOrdersPage);
  }

}
