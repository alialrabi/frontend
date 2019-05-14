import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, App, Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AgencyDetailsPage } from '../agency-details/agency-details';
import { User } from '../../providers/user/user';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../../providers/login/login.service';
import { AccountService } from '../../providers/auth/account.service';
import { MyApp } from '../../app/app.component';

/**
 * Generated class for the EditAgencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-agency',
  templateUrl: 'edit-agency.html',
})
export class EditAgencyPage {

  account = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phone:'',
    id:0
  };

  // Our translated text strings
  private signupErrorString: string;
  private signupSuccessString: string;
  private existingUserError: string;
  private invalidPasswordError: string;
  public pleaseWait;

  language = MyApp.language
  direction = MyApp.direction

  email = '';
  firstName = '';
  lastName = '';
  password = '';  
  phone = ''

  myForm: FormGroup;

  agency;

  isCordova = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams ,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public loginService: LoginService,
    private loading: LoadingController,
    public app:App,
    public platform:Platform,
    public accountService: AccountService,
    private builder: FormBuilder) {

      this.account = navParams.get("item");
      this.agency = navParams.get("agency");
      this.email = this.account.email;
      this.password = this.account.password;
      this.firstName = this.account.firstName;
      this.lastName = this.account.lastName;
      this.phone = this.account.phone;

      if (this.platform.is("cordova") && this.platform.is("android")) {
        this.isCordova = true;
      }
      
    this.translateService.get(['UPDATE_AGENCY_ERROR', 'UPDATE_AGENCY_SUCCESS',
      'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR' , 'PLEASE_WAIT']).subscribe((values) => {
        this.signupErrorString = values.UPDATE_AGENCY_ERROR;
        this.signupSuccessString = values.UPDATE_AGENCY_SUCCESS;
        this.existingUserError = values.EXISTING_USER_ERROR;
        this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
        this.pleaseWait = values.PLEASE_WAIT;
      })

    this.myForm = builder.group({
      'firstName': ['', [Validators.required, Validators.maxLength(45)]],
      'lastName': ['', [Validators.required, Validators.maxLength(45)]],
      'phone': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.minLength(6)]],
      'passwordConfirm': ['', []]
    });

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(AgencyDetailsPage , {item:this.agency});

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAgencyPage');
  }

  EditAgency() {
    let load = this.loading.create({
      content: this.pleaseWait
    })
    load.present()
    // set login to same as email
    // Attempt to login in through our User service
    let editAccount = {
      id:this.account.id,
      firstName:this.myForm.get("firstName").value,
      lastName:this.myForm.get("lastName").value,
      email:this.myForm.get("email").value,
      password:this.myForm.get("password").value,
      emailChanged:this.email != this.myForm.get("email").value,
      phone : this.myForm.get("phone").value
    } 
    console.log(this.myForm.get("password").value != this.password , this.password);
    
    if(this.myForm.get("password").value != this.password && this.myForm.get("password").value != '' && this.myForm.get("password").value != null){
      editAccount.password = this.myForm.get("password").value;
    }else{
      editAccount.password = null;
    }
    this.accountService.updateUserInformation(editAccount).subscribe((res) => {
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
       this.app.getRootNavs()[0].setRoot(AgencyDetailsPage , {item:this.agency});

    }, (err) => {
      // Unable to sign up
      console.log(err);


      //const error = JSON.parse(err.error);
      let displayError = this.signupErrorString;
      if (err.status === 400 && (err.error.errorKey == 'userexists' || err.error.message == 'error.userexists' || err.error.title == 'Login name already used!')) {
        displayError = this.existingUserError;
      } else if (err.status === 400 && err.error.message === 'error.validation'
        && err.error.fieldErrors[0].field === 'password' && err.error.fieldErrors[0].message === 'Size') {
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
    this.navCtrl.setRoot(AgencyDetailsPage , {item:this.agency});
  }
  valuesChanges(){
    if(this.firstName != this.account.firstName || this.phone != this.account.phone || this.lastName != this.account.lastName || this.email != this.account.email || (this.password != this.myForm.get("password").value && this.myForm.get("password").value != '' && this.myForm.get("password").value != null)){  
      return true;
    }else{
      return false;
    }
  }
  passwordChange(){

    if(this.myForm.get("password").value != '' && this.myForm.get("password").value != null){
      this.myForm.get("passwordConfirm").clearValidators();
      this.myForm.get("passwordConfirm").updateValueAndValidity()

      this.myForm.get("passwordConfirm").setValidators(Validators.required);
      this.myForm.get("passwordConfirm").clearValidators();
      this.myForm.get("passwordConfirm").updateValueAndValidity();

    }else{
      this.myForm.get("passwordConfirm").clearValidators();
      this.myForm.get("passwordConfirm").updateValueAndValidity()
    }
  }
}
