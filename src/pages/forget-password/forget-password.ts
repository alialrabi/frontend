import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyApp } from '../../app/app.component';
import { TranslateService } from '@ngx-translate/core';
import { LoginPage } from '../login/login';
import { AccountService } from '../../providers/auth/account.service';
import { LoginService } from '../../providers/login/login.service';

/**
 * Generated class for the ForgetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {

  language = MyApp.language
  direction = MyApp.direction

  myForm: FormGroup;
  myForm1: FormGroup;

  private forgetEroor: string;
  private forgetSuccess: string;
  private forgetEroorPhone: string;
  private forgetSuccessPhone: string;

  pleaseWait

  constructor(public navCtrl: NavController, public navParams: NavParams , private builder: FormBuilder,private accountService:AccountService, private loginService:LoginService,
     private translateService:TranslateService, private loading: LoadingController,  private platform: Platform, public toastCtrl: ToastController) {
 
      this.platform.registerBackButtonAction(() => {
       
        this.navCtrl.setRoot(LoginPage);
        
      })  
      
      this.translateService.get(['PLEASE_WAIT', 'FORGET_PASSWORD_ERROR' , 'FORGET_PASSWORD_SUCCESS' , 'FORGET_PASSWORD_BY_PHONE_ERROR' , 'FORGET_PASSWORD_BY_PHONE_SUCCESS' ]).subscribe((values) => {
       
        this.pleaseWait = values.PLEASE_WAIT
        this.forgetEroor = values.FORGET_PASSWORD_ERROR
        this.forgetSuccess = values.FORGET_PASSWORD_SUCCESS
        this.forgetEroorPhone = values.FORGET_PASSWORD_BY_PHONE_ERROR
        this.forgetSuccessPhone = values.FORGET_PASSWORD_BY_PHONE_SUCCESS
        
      })
  
      this.myForm = builder.group({
        'email': ['', [ Validators.required , Validators.email]],
        
      });
      this.myForm1 = builder.group({
        'phone': ['', [ Validators.required , Validators.pattern("(01)[0-9]{9}")]],
        
      });

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPasswordPage');
  }
  sendMail(){

    if(this.myForm.valid){

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.loginService.logout();

    let mailModel = {
      mail:this.myForm.get("email").value
    }
    this.accountService.forgetPassword(mailModel).subscribe(
      res =>{
        load.dismiss();

        let toast = this.toastCtrl.create({
          message: this.forgetSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        this.navCtrl.setRoot(LoginPage);

      }, err =>{
        console.log(err , 'errrrror');
        load.dismiss();

        if(err.status == 504){

          let toast = this.toastCtrl.create({
            message: this.forgetSuccess,
            duration: 3000,
            position: 'top'
          });
          toast.present();
          this.navCtrl.setRoot(LoginPage);
        }else{

        let toast = this.toastCtrl.create({
          message: this.forgetEroor,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }

      }
    )
  }
  }
  sendSMS(){

    if(this.myForm1.valid){

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.loginService.logout();

    let mailModel = {
      phone:this.myForm1.get("phone").value
    }
    this.accountService.forgetPasswordByPhone(mailModel).subscribe(
      res =>{
        load.dismiss();

        let toast = this.toastCtrl.create({
          message: this.forgetSuccessPhone,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        this.navCtrl.setRoot(LoginPage);

      }, err =>{
        console.log(err , 'errrrror');
        load.dismiss();

        if(err.status == 504){

          let toast = this.toastCtrl.create({
            message: this.forgetSuccessPhone,
            duration: 3000,
            position: 'top'
          });
          toast.present();
          this.navCtrl.setRoot(LoginPage);
        }else{

        let toast = this.toastCtrl.create({
          message: this.forgetEroorPhone,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }

      }
    )
  }

  }

  back(){
    this.navCtrl.setRoot(LoginPage);
  }
  hasError(field: string, error: string , form) {
    const ctrl = form.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }


}
