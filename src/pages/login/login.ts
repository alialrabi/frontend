import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController, App, LoadingController, Platform } from 'ionic-angular';
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

import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { DeviceTockenService } from '../../providers/auth/deviceToken.service';
import { FCM } from '@ionic-native/fcm';
import { ForgetPasswordPage } from '../forget-password/forget-password';
import { AddUserPhonePage } from '../add-user-phone/add-user-phone';


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
  private existingUserError: string;

  public pleaseWait;
  language = MyApp.language
  direction = MyApp.direction

  noEmailMessage = ''

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
    private authService: AuthService,
    private fb: Facebook,
    public platform: Platform,
    public fcm: FCM,
    public deviceTokenService: DeviceTockenService,
    private accountService: AccountService, private captainService: CaptainService, public myApp: MyApp) {

    this.translateService.get(['LOGIN_ERROR', 'PLEASE_WAIT', 'NO_EMAIL_MESSAGE' , 'EXISTING_USER_ERROR']).subscribe((values) => {
      this.loginErrorString = values.LOGIN_ERROR;
      this.pleaseWait = values.PLEASE_WAIT;
      this.noEmailMessage = values.NO_EMAIL_MESSAGE
      this.existingUserError = values.EXISTING_USER_ERROR;
    })
    this.validateUser(false);

    this.myForm = builder.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]],
    });

  }

  userData = {
    email: '',
    first_name: '',
    last_name: '',
    id: '0'
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

      this.validateUser(true);




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
  validateUser(flag) {
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
        if (flag) {
          if (account.authorities[0] === 'ROLE_CAPTAIN') {
            this.addToken('Captain', account)
            //this.app.getRootNavs()[0].setRoot(CaptainOrdersPage);

          } else if (account.authorities[0] == 'ROLE_AGENCY') {
            // this.app.getRootNavs()[0].setRoot(OrdersPage);
            this.addToken('Agency', account)
          } else if (account.authorities[0] == 'ROLE_USER' && account.authorities.length == 1) {
            this.addToken('User', account)
          }
          else {
            //this.app.getRootNavs()[0].setRoot(AgenciesPage);
            this.addToken('Admin', account)
          }
        }

      }
    }).catch((err) => {
      load.dismiss();
    });

  }
  addToken(userType, account) {
    if (this.platform.is("cordova")) {
      this.fcm.getToken().then(token => {
        console.log(token);
        let deviceToken = {
          token: token,
          userType: userType,
          userId: account.id,
          deviceType: 'cordova'
        }
        this.deviceTokenService.save(deviceToken).subscribe(
          res => {
            console.log("added successfully in login ");
          }, err => {
            console.log("error in add token in login ", err);

          }
        )
      })
    }
  }

  register() {
    this.navCtrl.setRoot(SignupPage);
  }

  forgotPass() {
    // let forgot = this.forgotCtrl.create({
    //   title: 'Forgot Password?',
    //   message: "Enter you email address to send a reset link password.",
    //   inputs: [
    //     {
    //       name: 'email',
    //       placeholder: 'Email',
    //       type: 'email'
    //     },
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       handler: data => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'Send',
    //       handler: data => {
    //         console.log('Send clicked');
    //         let toast = this.toastCtrl.create({
    //           message: 'Email was sended successfully',
    //           duration: 3000,
    //           position: 'top',
    //           cssClass: 'dark-trans',
    //           closeButtonText: 'OK',
    //           showCloseButton: true
    //         });
    //         toast.present();
    //       }
    //     }
    //   ]
    // });
    // forgot.present();

    this.navCtrl.setRoot(ForgetPasswordPage);
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


    if (this.platform.is("cordova")) {
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
              classlIn.userData = { id: profile['id'], email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'] }
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
              classlIn.doLoginToFacebook(true);
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
    } else {

      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(data => {
        this.userData = { id: data.id, email: data.email, first_name: data.firstName, last_name: data.lastName }
        this.doLoginToFacebook(true);
      }).catch(err => {
        console.log(err, 'errr 222222222222');

      })
    }
  }
  doLoginToFacebook(first) {

    // if (this.userData.email == null || this.userData.email == '') {

    //   let toast = this.toastCtrl.create({
    //             message: this.noEmailMessage,
    //             duration: 20000,
    //             position: 'top'
    //           });
    //           toast.present();

    // } else {


    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()


    let account = {
      username: this.userData.email,
      password: this.socialPassword,
      rememberMe: true,
    }

    if (this.userData.email == null || this.userData.email == '') {
      account.username = this.userData.id + 't@facebook.com';

      console.log('nullllllllllllllllll', account.username);

    } else {
      this.userData.email.toLowerCase();
    }
    this.loginService.login(account).then((response) => {

      load.dismiss();
      this.myApp.checkAccess();

      this.validateUser(true);




    }, (err) => {
      // Unable to log in
      this.account.password = '';
      console.log(err);


      if (err.error.status == 400 && err.error.title == "Incorrect password") {
        this.faceBookSignUp(account, first);
      } else {
        if (first) {
          this.doLoginToFacebook(false);
        }
      }

      load.dismiss();
    });
    // }
  }

  faceBookSignUp(loginAccount, first) {

    this.loginService.logout();

    let signUpAccount = {
      login: this.userData.email,
      email: this.userData.email,
      firstName: this.userData.first_name + ' ' + this.userData.last_name,
      lastName: '',
      password: this.socialPassword,
      langKey: MyApp.language,
      activated: true
    }

    if (this.userData.email == null || this.userData.email == '') {

      signUpAccount.login = this.userData.id + 't@facebook.com';
      signUpAccount.email = this.userData.id + 't@facebook.com';

      console.log('nullllllllllllllllll', signUpAccount.login);

    }

    // Attempt to login in through our User service
    this.user.signup(signUpAccount).subscribe((res) => {
      console.log(res);
      // var id = res;



      //localStorage.setItem("userId" , id+"");
      this.loginService.login(loginAccount).then((response) => {
        this.validateUser(true);
        this.myApp.checkAccessToSignUp()
        this.navCtrl.setRoot(AddUserPhonePage);
      });

    }, (err) => {


      const error = JSON.parse(err.error);
      if (err.status === 400 && error.type.includes('already-used')) {
          let toast = this.toastCtrl.create({
            message: this.existingUserError,
            duration: 3000,
            position: 'top'
        });
        toast.present();

      }else{

      // Unable to sign up
      console.log(err);
      if (first) {
        this.doLoginToFacebook(false);
      }
    }

    })



  }

  twLogin() {

    let loading = this.loading.create({
      content: this.pleaseWait


    })
    loading.present()

    this.tw.login()
      .then(res => {

        console.log(res, '1111111111111');

        this.userData.email = res.userName + '@twitter.com';
        // Get user data
        // There is a bug which fires the success event in the error event.
        // The issue is reported in https://github.com/chroa/twitter-connect-plugin/issues/23
        this.tw.showUser()
          .then(user => {
            console.log(user, 'useeeeeeeeeeeeeeeeer');
            let name = user.name
            let spaceIndex = name.indexOf(' ');
            if (spaceIndex == 0 || spaceIndex == -1) {
              spaceIndex == name.length
            }
            this.userData.first_name = name.substr(0, spaceIndex);
            this.userData.last_name = name.substr(name.indexOf(' ') + 1);
            loading.dismiss();
            this.doLoginToFacebook(true);
          }, err => {
            console.log(err, 'errrror');
            // default twitter image is too small https://developer.twitter.com/en/docs/accounts-and-users/user-profile-images-and-banners

          })
      }, err => {
        console.log(err, 'errrrrrrrrrror 11111111111');

        loading.dismiss();
      })
  }


}
