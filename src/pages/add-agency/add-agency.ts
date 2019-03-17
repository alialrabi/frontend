import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../providers/user/user';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../../providers/login/login.service';
import { AccountService } from '../../providers/auth/account.service';
import { AgenciesPage } from '../agencies/agencies';
import { MyApp } from '../../app/app.component';

/**
 * Generated class for the AddAgencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-agency',
  templateUrl: 'add-agency.html',
})
export class AddAgencyPage {

  account: { login: string, email: string, firstName: string, lastName: string, password: string, langKey: string, activated: boolean } = {
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    langKey: MyApp.language,
    activated: true
  };

  // Our translated text strings
  private signupErrorString: string;
  private signupSuccessString: string;
  private existingUserError: string;
  private invalidPasswordError: string;
  public pleaseWait;

  language = MyApp.language
  direction = MyApp.direction


  myForm: FormGroup;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public loginService: LoginService,
    private loading: LoadingController,
    public app:App,
    public accountService: AccountService,
    private builder: FormBuilder) {

    this.translateService.get(['SIGNUP_ERROR', 'SIGNUP_SUCCESS',
      'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR' , 'PLEASE_WAIT']).subscribe((values) => {
        this.signupErrorString = values.SIGNUP_ERROR;
        this.signupSuccessString = values.SIGNUP_SUCCESS;
        this.existingUserError = values.EXISTING_USER_ERROR;
        this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
        this.pleaseWait = values.PLEASE_WAIT;
      })

    this.myForm = builder.group({
      'firstName': ['', [Validators.required, Validators.maxLength(45)]],
      'lastName': ['', [Validators.required, Validators.maxLength(45)]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'passwordConfirm': ['', [Validators.required]]
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAgencyPage');
  }
  addAgency() {

    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()

    // set login to same as email
    this.account.login = this.account.email;
    this.account.activated = true;
    // Attempt to login in through our User service
    this.accountService.registerAgency(this.account).subscribe((res) => {
      console.log(res);
      // var id = res;

      let toast = this.toastCtrl.create({
        message: this.signupSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      load.dismiss();
       //this.navCtrl.push(AgenciesPage);
       this.app.getRootNavs()[0].setRoot(AgenciesPage);

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

      load.dismiss();
    });
  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }

  notMathces(){
    const ctrl = this.myForm.get("passwordConfirm");
    return ctrl.dirty && ctrl.value != this.myForm.get("password").value
  }

  back(){
    this.navCtrl.setRoot(AgenciesPage);
  }

}
