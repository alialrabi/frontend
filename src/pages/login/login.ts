import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController, App, LoadingController } from 'ionic-angular';
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
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { User } from '../../providers/user/user';

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
    rememberMe: true,
  };
  socialPassword = "FaceBook855Twitter2555LinkedIn1578";
  // Our translated text strings
  private loginErrorString: string;
  public pleaseWait;
  language = MyApp.language
  direction = MyApp.direction

  myForm: FormGroup;

  constructor(public navCtrl: NavController,
    public forgotCtrl: AlertController,
    private tw: TwitterConnect,
    public api: Api,
    public app: App,
    public user: User,
    public loginService: LoginService,
    public toastCtrl: ToastController,
    private loading: LoadingController,
    public translateService: TranslateService,
    private builder: FormBuilder,
    private principal: Principal,
    private fb: Facebook,
    private accountService: AccountService, private captainService: CaptainService, public myApp: MyApp) {

    this.translateService.get(['LOGIN_ERROR', 'PLEASE_WAIT']).subscribe((values) => {
      this.loginErrorString = values.LOGIN_ERROR;
      this.pleaseWait = values.PLEASE_WAIT;
    })
    this.validateUser();

    this.myForm = builder.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]],
    });

  }

  userData = {
    email: '',
    first_name: '',
    last_name: '',
  }
  // Attempt to login in through our User service
  doLogin() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.account.username = this.account.username.toLowerCase();
    console.log(this.account.username.toLowerCase(), 'lower case');


    this.loginService.login(this.account).then((response) => {

      load.dismiss();
     this.myApp.checkAccess();

     this.validateUser();




    }, (err) => {
      // Unable to log in
      this.account.password = '';
      console.log(err);


      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      load.dismiss();
    });
  }
  validateUser() {
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.principal.identity().then((account) => {

      load.dismiss();
      console.log(account);

      if (account === null) {
        //this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {
        this.account = account;

        console.log(this.account, '555555555555');


        if (account.authorities[0] === 'ROLE_CAPTAIN') {

          //this.app.getRootNavs()[0].setRoot(CaptainOrdersPage);

        } else if (account.authorities[0] == 'ROLE_AGENCY') {
          // this.app.getRootNavs()[0].setRoot(OrdersPage);
        }
        else {
          //this.app.getRootNavs()[0].setRoot(AgenciesPage);
        }


      }
    }).catch((err) => {
      load.dismiss();
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
  fbLogin() {
    // let load = this.loading.create({
    //   content: this.pleaseWait


    // })
    // load.present()
    let classlIn = this;
    this.fb.login(['public_profile', 'email'])
      .then(
        (res: FacebookLoginResponse) => {

          console.log('Logged into Facebook!', res)
          // let toast1 = classlIn.toastCtrl.create({
          //   message: '----------------------------',
          //   duration: 5000,
          //   position: 'top'
          // });
          // toast1.present();


          classlIn.fb.api('me?fields=id,name,email,first_name,last_name', []).then(profile => {
            classlIn.userData = { email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'] }
            //load.dismiss()
            // let toast1 = classlIn.toastCtrl.create({
            //   message: '*****************************',
            //   duration: 1000,
            //   position: 'top'
            // });
            // toast1.present();
            // let toast = classlIn.toastCtrl.create({
            //   message: JSON.stringify(classlIn.userData),
            //   duration: 20000,
            //   position: 'top'
            // });
            // toast.present();
            classlIn.doLoginToFacebook();
          }).catch(e => {

            console.log('Error logging into Facebook', e)
            //load.dismiss();
            //   let toast = classlIn.toastCtrl.create({
            //     message: JSON.stringify(e),
            //     duration: 20000,
            //     position: 'top'
            //   });
            //   toast.present();
          });

        })
      .catch(e => {
        console.log('Error logging into Facebook', e)
        // let toast = classlIn.toastCtrl.create({
        //   message: JSON.stringify(e).substring(30, JSON.stringify(e).length - 1),
        //   duration: 20000,
        //   position: 'top'
        // });
        // toast.present();
      });

  }
  doLoginToFacebook() {


    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    let account = {
      username: this.userData.email,
      password: this.socialPassword,
      rememberMe: true,
    }


    this.loginService.login(account).then((response) => {

      load.dismiss();
      this.myApp.checkAccess();

      this.validateUser();




    }, (err) => {
      // Unable to log in
      this.account.password = '';
      console.log(err);


      if (err.error.status == 400 && err.error.title == "Incorrect password") {
        this.faceBookSignUp(account);
      }

      load.dismiss();
    });
  }

  faceBookSignUp(loginAccount) {

    let signUpAccount = {
      login: this.userData.email,
      email: this.userData.email,
      firstName: this.userData.first_name,
      lastName: this.userData.last_name,
      password: this.socialPassword,
      langKey: MyApp.language,
      activated: true
    }

    // Attempt to login in through our User service
    this.user.signup(signUpAccount).subscribe((res) => {
      console.log(res);
      // var id = res;



      //localStorage.setItem("userId" , id+"");
      this.loginService.login(loginAccount).then((response) => {
        this.myApp.checkAccess()
      });

    }, (err) => {
      // Unable to sign up
      console.log(err);

    })



  }

  twLogin() {

    let loading = this.loading.create({
      content: this.pleaseWait


    })
    loading.present()

    this.tw.login()
      .then(res => {

        console.log(res , '1111111111111');

        this.userData.email = res.userName+'@twitter.com';
        // Get user data
        // There is a bug which fires the success event in the error event.
        // The issue is reported in https://github.com/chroa/twitter-connect-plugin/issues/23
        this.tw.showUser()
          .then(user => {
            console.log(user , 'useeeeeeeeeeeeeeeeer');
            let name = user.name
            let spaceIndex = name.indexOf(' ');
            if(spaceIndex == 0 || spaceIndex == -1){
              spaceIndex == name.length
            }
            this.userData.first_name = name.substr(0,spaceIndex);
            this.userData.last_name = name.substr(name.indexOf(' ')+1);
            loading.dismiss();
            this.doLoginToFacebook();
          }, err => {
            console.log(err, 'errrror');
            // default twitter image is too small https://developer.twitter.com/en/docs/accounts-and-users/user-profile-images-and-banners

          })
      }, err => {
        console.log(err , 'errrrrrrrrrror 11111111111');
        
        loading.dismiss();
      })
  }


}
