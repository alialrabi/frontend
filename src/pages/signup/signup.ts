import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { LoginPage } from '../login/login';
import { AddAddressPage } from '../add-address/add-address';
import { LoginService } from "../../providers/login/login.service"
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the signup form
  account: { login: string, email: string, firstName: string, lastName: string, password: string, langKey: string , activated: boolean } = {
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    langKey: 'en',
    activated: true
  };

  // Our translated text strings
  private signupErrorString: string;
  private signupSuccessString: string;
  private existingUserError: string;
  private invalidPasswordError: string;

  myForm: FormGroup;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService ,
  public loginService:LoginService ,
  private builder: FormBuilder) {

    this.translateService.get(['SIGNUP_ERROR', 'SIGNUP_SUCCESS',
      'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR']).subscribe((values) => {
      this.signupErrorString = values.SIGNUP_ERROR;
      this.signupSuccessString = values.SIGNUP_SUCCESS;
      this.existingUserError = values.EXISTING_USER_ERROR;
      this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
    })

    this.myForm = builder.group({
      'firstName':['', [Validators.required  , Validators.maxLength(45)]],
      'lastName': ['', [Validators.required , Validators.maxLength(45) ]],
      'email':['', [Validators.required  , Validators.email]],
      'password': ['', [Validators.required , Validators.minLength(6) ]],
    });

  }

  doSignup() {
    // set login to same as email
    this.account.login = this.account.email;
    this.account.activated = true;
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((res) => {
      console.log(res);
      var id = res;

      let loginAccount = {
        username: this.account.email,
        password: this.account.password,
        rememberMe: false,
      }

      localStorage.setItem("userId" , id+"");
        this.loginService.login(loginAccount).then((response) => {
          let toast = this.toastCtrl.create({
            message: this.signupSuccessString,
            duration: 3000,
            position: 'top'
          });
          toast.present();
          this.navCtrl.push(AddAddressPage);
        });

    }, (err) => {
      // Unable to sign up
      console.log(err);
      
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

}
