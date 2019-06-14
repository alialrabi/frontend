import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController, ToastController, Platform, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MyApp } from '../../app/app.component';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../../providers/auth/account.service';
import { UserOrdersPage } from '../user-orders/user-orders';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  passwordModel = {
    currentPassword:"",
    newPassword:''
  }

  private signupErrorString: string;
  private signupSuccessString: string;
 
  public pleaseWait;

  language = MyApp.language
  direction = MyApp.direction

  myForm: FormGroup;

  ok = '';
  dialogTitle = '';

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  passwordTypenew: string = 'password';
  passwordIconnew: string = 'eye-off';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private loading: LoadingController,
    public app:App,
    public platform:Platform,
    public _alert:AlertController,
    public accountService: AccountService,
    public builder: FormBuilder) {

      
    this.translateService.get(['UPDATE_PASSWORD_ERROR', 'UPDATE_PASSWORD_SUCCESS','PLEASE_WAIT' , 'OK' , 'INCORRECT_PASSWORD_TITLE']).subscribe((values) => {
        this.signupErrorString = values.UPDATE_PASSWORD_ERROR;
        this.signupSuccessString = values.UPDATE_PASSWORD_SUCCESS;
        this.pleaseWait = values.PLEASE_WAIT;
        this.ok = values.OK
        this.dialogTitle = values.INCORRECT_PASSWORD_TITLE
      })

    this.myForm = builder.group({
      'oldpassword': ['', [Validators.required ,Validators.minLength(6) , Validators.maxLength(50) , Validators.pattern("^[A-Za-z0-9?!@#$%^&*_-]*$")]],
      'password': ['', [Validators.required ,Validators.minLength(6) , Validators.maxLength(50) , Validators.pattern("^[A-Za-z0-9?!@#$%^&*_-]*$")]],
      'passwordConfirm': ['', []]
    });

    if (this.platform.is('cordova') && this.platform.is("android")) {
      this.platform.registerBackButtonAction(() => {
        this.navCtrl.setRoot(UserOrdersPage);

      });
    }

  }

  ngOnInit() {

    
  }

  ionViewDidLoad() {
  }

  notMathces(){
    const ctrl = this.myForm.get("passwordConfirm");
    return ctrl.dirty && ctrl.value != this.myForm.get("password").value
  }
  EditPassword(){

    if(this.myForm.valid && !this.notMathces() && this.myForm.get('passwordConfirm').value.length != 0){

    let load = this.loading.create({
      content: this.pleaseWait
    })
    load.present()
    this.accountService.changePassword(this.passwordModel).subscribe(
      res =>{
        // var id = res;
  
        let toast = this.toastCtrl.create({
          message: this.signupSuccessString,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        load.dismiss();
        this.passwordModel.currentPassword = ''
        this.passwordModel.newPassword = ''
        // this.myForm.get("oldpassword").setValue('')
        // this.myForm.get("oldpassword").markAsUntouched()
        // this.myForm.get("password").setValue('')
        // this.myForm.get("password").markAsUntouched()
        // this.myForm.get("passwordConfirm").setValue('')
        this.myForm.reset()
        this.myForm = this.builder.group({
          'oldpassword': ['', [Validators.required ,Validators.minLength(6)]],
          'password': ['', [Validators.required ,Validators.minLength(6)]],
          'passwordConfirm': ['', []]
        });
    
      }, err =>{
        console.log(err , 'errrrrrrrrrrrrrror');
        // var id = res;

        let alert = this._alert.create({
          title: this.dialogTitle,
          message: this.signupErrorString,
          buttons: [
            {
              text: this.ok,
              handler: () => {

              }
            }
          ]
        });
        alert.present();

        load.dismiss();
        this.passwordModel.currentPassword = ''
        this.passwordModel.newPassword = ''
        // this.myForm.get("oldpassword").setValue('')
        // this.myForm.get("password").setValue('')
        // this.myForm.get("passwordConfirm").setValue('')

        this.myForm.reset();
        this.myForm = this.builder.group({
          'oldpassword': ['', [Validators.required ,Validators.minLength(6)]],
          'password': ['', [Validators.required ,Validators.minLength(6)]],
          'passwordConfirm': ['', []]
        });
    
     
      }
    )
  }
  }
  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
  hideShowPassword() {    
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  hideShowPasswordnew() {    
    this.passwordTypenew = this.passwordTypenew === 'text' ? 'password' : 'text';
    this.passwordIconnew = this.passwordIconnew === 'eye-off' ? 'eye' : 'eye-off';
  }

}
