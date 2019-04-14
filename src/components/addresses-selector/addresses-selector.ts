import { Component } from '@angular/core';
import { MyApp } from '../../app/app.component';
import { ViewController, NavParams } from 'ionic-angular';

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

  constructor( public viewCtrl: ViewController , public navParams:NavParams ) {

    this.addresses = navParams.get("addresses");
    
  }

  async chooseAddress(address){
    await this.viewCtrl.dismiss(address);
  }
}
