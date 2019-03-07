import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Principal } from '../../providers/auth/principal.service';
import { CaptainOrdersPage } from '../captain-orders/captain-orders';
import { OrdersPage } from '../orders/orders';
import { AgenciesPage } from '../agencies/agencies';
import { LoginPage } from '../login/login';
import { AdminDashboardPage } from '../admin-dashboard/admin-dashboard';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public app:App , public principal:Principal) {
  
    this.validateUser();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }
  start() {
    //console.log("****");

    //this.app.getRootNavs()[0].setRoot(LoginPage);
    
    this.navCtrl.push('LoginPage');
  }

  validateUser(){
    this.principal.identity().then((account) => {

        

      console.log(account);

      if (account === null) {
        //this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {
        //this.account = account;

       // console.log(this.account, '555555555555');


        if (account.authorities[0] === 'ROLE_CAPTAIN') {

          this.app.getRootNavs()[0].setRoot(CaptainOrdersPage);

        } else if(account.authorities[0] == 'ROLE_AGENCY') {
          this.app.getRootNavs()[0].setRoot(OrdersPage);
        }
        else {
          this.app.getRootNavs()[0].setRoot(AdminDashboardPage);
        }


      }
    });

  }

}
