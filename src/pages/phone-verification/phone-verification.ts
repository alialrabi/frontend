import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { OrderService } from '../../providers/auth/order.service';
import { MyApp } from '../../app/app.component';
import { UserOrdersPage } from '../user-orders/user-orders';

/**
 * Generated class for the PhoneVerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-verification',
  templateUrl: 'phone-verification.html',
})
export class PhoneVerificationPage {

  order = {
    firstPhone:""
  };

  code = ''
  codeModel = '';
  myForm: FormGroup;
  

  public pleaseWait;
  language = MyApp.language
  direction = MyApp.direction

  public addORDERError;
  public addORDERSuccessString;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, public toastCtrl: ToastController, public translateService: TranslateService, private loading: LoadingController, private builder: FormBuilder, public orderService: OrderService) {
    this.order = navParams.get('order');

    this.translateService.get(['ADD_ORDER_ERROR', 'ADD_ORDER_SUCCESS', 'PLEASE_WAIT']).subscribe((values) => {
      console.log(values);

      this.addORDERError = values.ADD_ORDER_ERROR;
      this.addORDERSuccessString = values.ADD_ORDER_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT

    })
    this.myForm = builder.group({
      'code': ['', [Validators.required]],
    });

    this.verifyPhone();

  }
  verifyCode(){
    console.log(this.code , (this.myForm.get('code').value+''));
    
    if(this.code == (this.myForm.get('code').value+'')){
      this.addOrder();
    }else{
      this.myForm.get('code').setValue("");
      this.codeModel = ''
    }
  }
  verifyPhone(){
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.orderService.verifyPhone(this.order.firstPhone).subscribe(
      res =>{

        this.code = res.Key
        console.log(this.code);
        
        
        load.dismiss();

      }, err =>{

        console.log("err",err);
        load.dismiss();
        

      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneVerificationPage');
  }

  addOrder() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()


    this.orderService.save(this.order).subscribe((res) => {
      console.log(res, 'res');

      let obj = res;
      load.dismiss();

      this.app.getRootNavs()[0].setRoot(UserOrdersPage);

      let toast = this.toastCtrl.create({
        message: this.addORDERSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();

    }, (err) => {
      console.log('error', err);

      // Unable to add address
      // const error = JSON.parse(err.error);
      let displayError = this.addORDERError;

      let toast = this.toastCtrl.create({
        message: displayError,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
      load.dismiss();
    });
  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }

}


