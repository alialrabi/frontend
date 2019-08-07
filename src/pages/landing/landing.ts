import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, Platform, ToastController } from 'ionic-angular';
import { Principal } from '../../providers/auth/principal.service';
import { CaptainOrdersPage } from '../captain-orders/captain-orders';
import { OrdersPage } from '../orders/orders';
import { AgenciesPage } from '../agencies/agencies';
import { LoginPage } from '../login/login';
import { AdminDashboardPage } from '../admin-dashboard/admin-dashboard';
import { UserOrdersPage } from '../user-orders/user-orders';
import { TranslateService } from '@ngx-translate/core';
import { MyApp } from '../../app/app.component';

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

  //public static startDisable = true;
  ok = ''
  dialogTitle = ''
  dialogMesaage = ''

  counter = 0;
  exitMessage = ''

  constructor(public navCtrl: NavController, public _alert: AlertController , public toastCtrl: ToastController , public platform: Platform , public translateService: TranslateService , public navParams: NavParams , public app:App , public principal:Principal) {
  
 //   this.validateUser();

    this.translateService.get(['EXIT_MESSAGE' , 'OK' , 'NO_INTERNET_TITLE' , 'NO_INTERNET_MESSAGE' ]).subscribe((values) => {
     
      this.ok = values.OK
      this.dialogTitle = values.NO_INTERNET_TITLE
      this.dialogMesaage = values.NO_INTERNET_MESSAGE
      this.exitMessage = values.EXIT_MESSAGE
    })
    if (this.platform.is('cordova') && this.platform.is("android")) {
      this.platform.registerBackButtonAction(() => {

        if (this.counter == 0) {
          this.counter++;

          let toast = this.toastCtrl.create({
            message: this.exitMessage,
            duration: 3000,
            position: "bottom"
          });
          toast.present();

          setTimeout(() => { this.counter = 0 }, 3000)
        } else {
          this.platform.exitApp();
        }

      });
    }

  }

  ionViewDidLoad() {
  }
  start() {

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
  getDisable(){    
    return MyApp.disableStart;
  }

  validateUser(){
 
    this.principal.identity().then((account) => {

        

      if (account === null || (account.id == null && account.firstName == null && account.login == null && account.authorities.length == 0)) {
        //this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {
        //this.account = account;

        if (account.authorities[0] === 'ROLE_CAPTAIN') {

       //   this.app.getRootNavs()[0].setRoot(CaptainOrdersPage);

        } else if(account.authorities[0] == 'ROLE_AGENCY') {
      //    this.app.getRootNavs()[0].setRoot(OrdersPage);
        } else if (account.authorities[0] == 'ROLE_USER'  && account.authorities.length == 1){
          // if (account.phone == null || account.phone == '') {
          //   this.navCtrl.setRoot("AddUserPhonePage")
          // } else {
          //   this.navCtrl.setRoot("UserOrdersPage")
          // }
        }
        else {
  //        this.app.getRootNavs()[0].setRoot(AdminDashboardPage);
        }


      }
    });

  }

}
