import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController, LoadingController, Platform } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../../providers/auth/account.service';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { UserOrdersPage } from '../user-orders/user-orders';

/**
 * Generated class for the AddUserPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user-phone',
  templateUrl: 'add-user-phone.html',
})
export class AddUserPhonePage {

  phoneModel = {
    userId:0,
    phoneNumber:""
  };

  myForm: FormGroup;
  

  public pleaseWait;
  language = MyApp.language
  direction = MyApp.direction

  public addPhoneError;
  public addPhoneSuccessString;

  account = null; 

  constructor(public navCtrl: NavController, public navParams: NavParams ,public platform:Platform , private principal:Principal , private app: App, public toastCtrl: ToastController, public translateService: TranslateService, private loading: LoadingController, private builder: FormBuilder , private accountSirvice:AccountService) {

    this.translateService.get(['ADD_PHONE_ERROR', 'ADD_PHONE_SUCCESS', 'PLEASE_WAIT']).subscribe((values) => {
      console.log(values);

      this.addPhoneError = values.ADD_PHONE_ERROR;
      this.addPhoneSuccessString = values.ADD_PHONE_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT

    })
    this.myForm = builder.group({
      'phone': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
    });


  }
  ngOnInit() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.principal.identity().then((account) => {
      console.log(account);
      load.dismiss();
      if (account === null || (account.authorities[0] != 'ROLE_USER')) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      }  else if (account.authorities[0] == 'ROLE_USER') {
        
        this.account = account;

      }
    }).catch((err) => {
      load.dismiss();
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPhonePage');
  }

  addPhone(){

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.phoneModel.userId = this.account.id;

    this.accountSirvice.addUserPhone(this.phoneModel).subscribe(
      res =>{
        load.dismiss();
        let toast = this.toastCtrl.create({
          message: this.addPhoneSuccessString,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        this.navCtrl.setRoot(UserOrdersPage);

      }, err =>{
        console.log(err , 'errrrror');
        load.dismiss()

        let toast = this.toastCtrl.create({
          message: this.addPhoneError,
          duration: 3000,
          position: 'middle'
        });
        toast.present();
        
      }
    )
  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }

}
