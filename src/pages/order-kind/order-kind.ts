import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { UserOrdersPage } from '../user-orders/user-orders';
import { BuyFromMarketPage } from '../buy-from-market/buy-from-market';
import { DeliverFromToPage } from '../deliver-from-to/deliver-from-to';

/**
 * Generated class for the OrderKindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-kind',
  templateUrl: 'order-kind.html',
})
export class OrderKindPage {

  language = MyApp.language
  direction = MyApp.direction
  isCordova = false;

  constructor(public navCtrl: NavController, public navParams: NavParams ,  public platform:Platform) {

    if(this.platform.is("cordova") && this.platform.is("android")){
      this.isCordova = true;
    }

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(UserOrdersPage);

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderKindPage');
  }
  buyFromMarket(){
    this.navCtrl.setRoot(BuyFromMarketPage);
  }
  deliverFromLocationToLocation(){
    this.navCtrl.setRoot(DeliverFromToPage);
  }
  back(){
    this.navCtrl.setRoot(UserOrdersPage);
  }

}
