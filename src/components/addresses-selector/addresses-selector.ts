import { Component } from '@angular/core';
import { MyApp } from '../../app/app.component';
import { ViewController, NavParams, ModalController, Platform } from 'ionic-angular';
import { NewAddressComponent } from '../new-address/new-address';

/**
 * Generated class for the AddressesSelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'addresses-selector',
  templateUrl: 'addresses-selector.html'
})
export class AddressesSelectorComponent {

  text: string;

  language = MyApp.language
  direction = MyApp.direction

  addresses = [];

  account;

  isCordova = false;

  

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public platform:Platform, public modalController: ModalController) {

    this.addresses = navParams.get("addresses");
    this.account = navParams.get("user");

    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.isCordova = true;
    }

    this.platform.registerBackButtonAction(() => {
      console.log("back button selector");
      this.back();
    });

  }

  async chooseAddress(address) {
    let dataReturned = {
      address: address,
      addresses: this.addresses
    }
    await this.viewCtrl.dismiss(dataReturned);
  }

  async addAddress(event) {
    const modal = await this.modalController.create(NewAddressComponent, { user: this.account });

    modal.onDidDismiss((dataReturned) => {
      this.platform.registerBackButtonAction(() => {
        console.log("back button selector");
        this.back()
      });
      if (dataReturned !== null) {
        console.log('Modal Sent Data :', dataReturned);

        this.addresses.push(dataReturned);
        this.chooseAddress(dataReturned);

      }
    });

    return await modal.present({
      ev: event
    });
  }

  async back() {
    this.viewCtrl.dismiss(null);
  }
}
