import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController, App } from 'ionic-angular';
import { MainPage, FirstRunPage } from '../pages';
import { LoginService } from '../../providers/login/login.service';
import { Api } from '../../providers/api/api';
import { SignupPage } from '../signup/signup';
import { AddAddressPage } from '../add-address/add-address';
import { AddCaptainPage } from '../add-captain/add-captain';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../providers/auth/account.service';
import { CaptainOrdersPage } from '../captain-orders/captain-orders';
import { CaptainService } from '../../providers/auth/captain.service';
import { Principal } from '../../providers/auth/principal.service';
import { OrdersPage } from '../orders/orders';
import { AgenciesPage } from '../agencies/agencies';
import { MyApp } from '../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  account: { username: string, password: string, rememberMe: boolean } = {
    username: '',
    password: '',
    rememberMe: false,
  };

  // Our translated text strings
  private loginErrorString: string;

  myForm: FormGroup;

  constructor(public navCtrl: NavController,
    public forgotCtrl: AlertController,
    public api: Api,
    public app: App,
    public loginService: LoginService,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private builder: FormBuilder,
    private principal: Principal,
    private accountService: AccountService, private captainService: CaptainService , public myApp:MyApp) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
    this.validateUser();

    this.myForm = builder.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]],
    });

  }

  // Attempt to login in through our User service
  doLogin() {
    this.loginService.login(this.account).then((response) => {

      this.myApp.checkAccess();

      this.validateUser();




    }, (err) => {
      // Unable to log in
      this.account.password = '';
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  validateUser(){
    this.principal.identity().then((account) => {

        

      console.log(account);

      if (account === null) {
        //this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {
        this.account = account;

        console.log(this.account, '555555555555');


        if (account.authorities[0] === 'ROLE_CAPTAIN') {

          this.app.getRootNavs()[0].setRoot(CaptainOrdersPage);

        } else if(account.authorities[0] == 'ROLE_AGENCY') {
         // this.app.getRootNavs()[0].setRoot(OrdersPage);
        }
        else {
          //this.app.getRootNavs()[0].setRoot(AgenciesPage);
        }


      }
    });

  }

  register() {
    this.navCtrl.setRoot(SignupPage);
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }
  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }

}
