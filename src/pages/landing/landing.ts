import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { Principal } from '../../providers/auth/principal.service';
import { CaptainOrdersPage } from '../captain-orders/captain-orders';
import { OrdersPage } from '../orders/orders';
import { AgenciesPage } from '../agencies/agencies';
import { LoginPage } from '../login/login';
import { AdminDashboardPage } from '../admin-dashboard/admin-dashboard';
import { UserOrdersPage } from '../user-orders/user-orders';
import { TranslateService } from '@ngx-translate/core';

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

  ok = ''
  dialogTitle = ''
  dialogMesaage = ''

  constructor(public navCtrl: NavController, public _alert: AlertController ,  public translateService: TranslateService , public navParams: NavParams , public app:App , public principal:Principal) {
  
    this.validateUser();

    this.translateService.get([ 'OK' , 'NO_INTERNET_TITLE' , 'NO_INTERNET_MESSAGE' ]).subscribe((values) => {
     
      this.ok = values.OK
      this.dialogTitle = values.NO_INTERNET_TITLE
      this.dialogMesaage = values.NO_INTERNET_MESSAGE
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }
  start() {
    //console.log("****");

    //this.app.getRootNavs()[0].setRoot(LoginPage);

    if (!navigator.onLine) {

      //Do task when no internet connection

      let alert = this._alert.create({
        title: this.dialogTitle,
        message: this.dialogMesaage,
        buttons: [
          {
            text: this.ok,
            handler: () => {

            }
          }
        ]
      });
      alert.present();
      
      }else{
        this.navCtrl.setRoot('LoginPage');
      }   
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
        } else if (account.authorities[0] == 'ROLE_USER'  && account.authorities.length == 1){
          if (account.phone == null || account.phone == '') {
            this.navCtrl.setRoot("AddUserPhonePage")
          } else {
            this.navCtrl.setRoot("UserOrdersPage")
          }
        }
        else {
          this.app.getRootNavs()[0].setRoot(AdminDashboardPage);
        }


      }
    });

  }

}
