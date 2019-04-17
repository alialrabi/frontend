import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, LoadingController, Platform } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { LoginPage } from '../login/login';
import { AddAddressPage } from '../add-address/add-address';
import { LoginService } from "../../providers/login/login.service"
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyApp } from '../../app/app.component';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { AuthService, FacebookLoginProvider } from 'angular4-social-login';
import { DeviceTockenService } from '../../providers/auth/deviceToken.service';
import { FCM } from '@ionic-native/fcm';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the signup form
  account: { login: string, email: string, firstName: string, lastName: string, password: string, langKey: string , activated: boolean , phone:string} = {
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    langKey: MyApp.language,
    activated: true,
    phone:''
  };

  // Our translated text strings
  private signupErrorString: string;
  private signupSuccessString: string;
  private existingUserError: string;
  private invalidPasswordError: string;

  language = MyApp.language
  direction = MyApp.direction

  myForm: FormGroup;

  socialPassword = "FaceBook855Twitter2555LinkedIn1578";

  userData = {
    email: '',
    first_name: '',
    last_name: '',
    id:'0'
  }
  public pleaseWait;

  noEmailMessage = ''

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public myApp:MyApp,
    private tw: TwitterConnect,
    private fb: Facebook,
    public platform:Platform,
    private authService: AuthService,
    private loading: LoadingController,
    public translateService: TranslateService ,
  public loginService:LoginService ,
  public fcm:FCM,
  public deviceTokenService:DeviceTockenService,
  private builder: FormBuilder) {

    this.translateService.get(['SIGNUP_ERROR', 'SIGNUP_SUCCESS',
      'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR' , 'PLEASE_WAIT' , 'NO_EMAIL_MESSAGE']).subscribe((values) => {
      this.signupErrorString = values.SIGNUP_ERROR;
      this.signupSuccessString = values.SIGNUP_SUCCESS;
      this.existingUserError = values.EXISTING_USER_ERROR;
      this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
      this.pleaseWait = values.PLEASE_WAIT;
      this.noEmailMessage = values.NO_EMAIL_MESSAGE
    })

    this.myForm = builder.group({
      'firstName':['', [Validators.required  , Validators.maxLength(45)]],
      //'lastName': ['', [Validators.required , Validators.maxLength(45) ]],
      'phone': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      'email':['', [Validators.required  , Validators.email]],
      'password': ['', [Validators.required , Validators.minLength(6) ]],
      'passwordConfirm': ['', [Validators.required]],
      "langKey":[this.language , []]
    });

    
  }

  doSignup() {

    let loading = this.loading.create({
      content: this.pleaseWait


    })
    loading.present()

    this.loginService.logout();

    // set login to same as email
    this.account.login = this.account.email;
    this.account.activated = true;
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((res) => {
      console.log(res);
     // var id = res;

      let loginAccount = {
        username: this.account.email.toLowerCase(),
        password: this.account.password,
        rememberMe: true,
      }

      //localStorage.setItem("userId" , id+"");
        this.loginService.login(loginAccount).then((response) => {
          this.addToken(res);
          this.myApp.checkAccessToSignUp();
          let toast = this.toastCtrl.create({
            message: this.signupSuccessString,
            duration: 3000,
            position: 'top'
          });
          toast.present();
          loading.dismiss();
          this.navCtrl.setRoot(AddAddressPage);
        });

    }, (err) => {
      // Unable to sign up
      console.log(err);
      loading.dismiss();
      
      const error = JSON.parse(err.error);
      let displayError = this.signupErrorString;
      if (err.status === 400 && error.type.includes('already-used')) {
          displayError = this.existingUserError;
      } else if (err.status === 400 && error.message === 'error.validation'
          && error.fieldErrors[0].field === 'password' && error.fieldErrors[0].message === 'Size') {
          displayError = this.invalidPasswordError;
      }
      let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'top'
      });
      toast.present();
    });
  }
  login() {
    this.navCtrl.setRoot(LoginPage);
  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
  notMathces(){
    const ctrl = this.myForm.get("passwordConfirm");
    return ctrl.dirty && ctrl.value != this.myForm.get("password").value
  }


  twSignUp() {

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
            this.faceBookSignUp();
          }, err => {
            console.log(err, 'errrror');
            // default twitter image is too small https://developer.twitter.com/en/docs/accounts-and-users/user-profile-images-and-banners

          })
      }, err => {
        console.log(err , 'errrrrrrrrrror 11111111111');
        
        loading.dismiss();
      })
  }

  faceBookSignUp() {

    // if (this.userData.email == null || this.userData.email == '') {

    //   let toast = this.toastCtrl.create({
    //             message: this.noEmailMessage,
    //             duration: 20000,
    //             position: 'top'
    //           });
    //           toast.present();

    // } else {

      this.loginService.logout();

    let signUpAccount = {
      login: this.userData.email,
      email: this.userData.email,
      firstName: this.userData.first_name+' '+this.userData.last_name,
      lastName: '',
      password: this.socialPassword,
      langKey: MyApp.language,
      activated: true
    }
    let loginAccount = {
      username: signUpAccount.login,
      password: signUpAccount.password,
      rememberMe: true,
    }
    if (this.userData.email == null || this.userData.email == '') {
      signUpAccount.login = this.userData.id+ 't@facebook.com';;
      signUpAccount.email = this.userData.id+ 't@facebook.com';
      loginAccount.username = this.userData.id+ 't@facebook.com';
      console.log('nullllllllllllllllll' , signUpAccount.login );
    }

    // Attempt to login in through our User service
    this.user.signup(signUpAccount).subscribe((res) => {
      console.log(res);
      // var id = res;

      


      //localStorage.setItem("userId" , id+"");
      this.loginService.login(loginAccount).then((response) => {
        this.addToken(res);
        this.myApp.checkAccessToSignUp();
          let toast = this.toastCtrl.create({
            message: this.signupSuccessString,
            duration: 3000,
            position: 'top'
          });
          toast.present();
          this.navCtrl.setRoot(AddAddressPage);
      });

    }, (err) => {
      // Unable to sign up
      console.log(err);
      const error = JSON.parse(err.error);
      if (err.status === 400 && error.type.includes('already-used')) {
        this.loginService.login(loginAccount).then((response) => {
          this.myApp.checkAccess();
            let toast = this.toastCtrl.create({
              message: this.signupSuccessString,
              duration: 3000,
              position: 'top'
            });
            toast.present();
            //this.navCtrl.setRoot(AddAddressPage);
        });
      }

    })

 // }

  }
  fbSignUp() {
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
            classlIn.userData = { id:profile['id'] , email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'] }
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
            classlIn.faceBookSignUp();
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
    }else {

      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(data => {
       this.userData = { id:data.id , email: data.email, first_name: data.firstName, last_name: data.lastName }
       this.faceBookSignUp();
      }).catch(err => {
        console.log(err, 'errr 222222222222');

      })
    }

  }
  addToken(id){
    if(this.platform.is("cordova")){
    this.fcm.getToken().then(token=>{
      console.log(token);
      let deviceToken = {
        token:token,
        userType:'User',
        userId: id,
        deviceType:'cordova'
      }
      this.deviceTokenService.save(deviceToken).subscribe(
        res =>{
          console.log("added successfully in login ");
        },err =>{
          console.log("error in add token in login " , err);
          
        }
      )
  })
}
  }


}
