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

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

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
      'firstName': [this.account.firstName, [Validators.required, Validators.maxLength(45)]],
      'lastName': [this.account.lastName, [Validators.required, Validators.maxLength(45)]],
      'phone': [this.account.phone, [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      'email': [this.account.email, [Validators.required, Validators.email , Validators.maxLength(49)]],
      'password': ['', [Validators.minLength(6) , Validators.maxLength(50) , Validators.pattern("^[A-Za-z0-9?!@#$%^&*_-]*$")]],
      'passwordConfirm': ['', []]
    });

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(AgencyDetailsPage , {item:this.agency});

    });

  }

  ngOnInit() {

    this.myForm.valueChanges
      .map((value) => {
        // Here you can manipulate your value
        value.firstName = value.firstName.trim();
        this.account.firstName = value.firstName
        value.lastName = value.lastName.trim();
        this.account.lastName = value.lastName
       
        return value;
      }).filter((value) => this.myForm.valid)
      .subscribe((value) => {
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAgencyPage');
  }

  EditAgency() {

    if(this.myForm.valid && !this.notMathces() && this.valuesChanges() && !this.validatePasswordChange()  && !this.checkSpaces()){

    let load = this.loading.create({
      content: this.pleaseWait
    })
    load.present()
    // set login to same as email
    // Attempt to login in through our User service
    let editAccount = {
      id:this.account.id,
      firstName:this.account.firstName,
      lastName:this.account.lastName,
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
  validatePasswordChange(){
    let flag = false;
    flag = this.myForm.get("password").value.length != this.myForm.get("passwordConfirm").value.length

    return flag;
  }
  passwordChange(){
    console.log('password change');
    

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
  hideShowPassword() {    
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  checkSpaces() {
    if (this.account.firstName == '' || this.account.lastName == '') {
      return true;
    } else {
      return false;
    }
  }
  checkSpaceTofields(string, field) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && string == '';

  }

}
