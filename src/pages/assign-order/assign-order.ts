import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App, LoadingController, Platform } from 'ionic-angular';
import { CaptainService } from '../../providers/auth/captain.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { OrderService } from '../../providers/auth/order.service';
import { OrdersPage } from '../orders/orders';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { UserOrdersPage } from '../user-orders/user-orders';
import { MyApp } from '../../app/app.component';

/**
 * Generated class for the AssignOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assign-order',
  templateUrl: 'assign-order.html',
})
export class AssignOrderPage {

  public captainList = [];
  myForm: FormGroup;

  assingOrderSuccess = null;
  assignOrderError = null;
  public pleaseWait;

  public order;

  language = MyApp.language
  direction = MyApp.direction

  public account = null;
  userType = ''

  busy='';
  atMarket='';
  not_working= '';
  onWay= ''



  constructor(public navCtrl: NavController, public navParams: NavParams , public platform:Platform ,
    private builder: FormBuilder , public captainService:CaptainService  ,private loading: LoadingController , private app: App, private principal: Principal, public toastCtrl: ToastController , public translateService: TranslateService , public orderService:OrderService ) {

      this.order = this.navParams.get("item");

    this.translateService.get(['ASSIGN_ORDER_ERROR', 'ASSIGN_ORDER_SUCCESS' , 'PLEASE_WAIT' , 'NOT_WORKING' , 'ON_BACK_WAY' , 'AT_MARKET' , 'BUSY']).subscribe((values) => {
      this.assignOrderError = values.ASSIGN_ORDER_ERROR;
      this.assingOrderSuccess = values.ASSIGN_ORDER_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
      this.busy = values.BUSY
      this.atMarket = values.AT_MARKET
      this.not_working = values.NOT_WORKING
      this.onWay = values.ON_BACK_WAY
    })


    this.myForm = builder.group({
      //'userId':['', [Validators.required ]],
      'captainId': ['', [Validators.required ]],
      
    });

    this.platform.registerBackButtonAction(() => {
      if(this.userType == 'Agency'){
        this.navCtrl.setRoot(OrdersPage);
        }else{
          this.navCtrl.setRoot(UserOrdersPage);
        }
    });

    //this.getAllCaptains();
  }

  ngOnInit() {

    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()

    this.principal.identity().then((account) => {
      console.log(account);
      this.account = account;
      load.dismiss()
      
      if (account === null ) {
         this.app.getRootNavs()[0].setRoot(FirstRunPage);
      }else if(account.authorities[0]== 'ROLE_AGENCY'){
        this.account = account;
        this.userType = 'Agency'
        this.getAllCaptains();
      }else{
        this.account = account;
        this.userType = 'Admin'
        this.getAllCaptains();

      }
       
        
      
    }).catch((err)=>{
      load.dismiss();
    });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignOrderPage');
  }

  getAllCaptains(){
    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()
    this.captainService.captainsPickListByAgencyId(this.account.id).subscribe(
      res =>{

        console.log(res , "res");
        this.captainList = res;
        load.dismiss();

      }, err =>{

        console.log(err , "err");
        load.dismiss();
        

      }
    )

  }
  assignOrder(){

    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()

    this.orderService.assign(this.myForm.get('captainId').value , this.order.id).subscribe(
      res =>{
        let toast = this.toastCtrl.create({
          message: this.assingOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        load.dismiss();
        if(this.userType == 'Admin'){
          this.app.getRootNavs()[0].setRoot(UserOrdersPage);
        }else{
          this.app.getRootNavs()[0].setRoot(OrdersPage);
        }

        //this.navCtrl.push(OrdersPage);
        

      }, err =>{
        console.log(err);
        

        let displayError = this.assignOrderError;
      
      let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'middle'
      });
      toast.present();
      load.dismiss();

      }
    )

  }
  assignOrderToFreeCaptain(){
    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()

    this.orderService.assignToFreeCaptain(this.order.id).subscribe(
      res =>{
        let toast = this.toastCtrl.create({
          message: this.assingOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        load.dismiss();
       // this.navCtrl.push(OrdersPage);
        this.app.getRootNavs()[0].setRoot(OrdersPage);

      }, err =>{
        console.log(err);
        

        let displayError = this.assignOrderError;
      
      let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'middle'
      });
      toast.present();
      load.dismiss();

      }
    )

  }
  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
  
  skip(){
    //this.navCtrl.push(OrdersPage);
    if(this.userType == 'Agency'){
      this.navCtrl.setRoot(OrdersPage);
      }else{
        this.navCtrl.setRoot(UserOrdersPage);
        
      }
  }
  back(){
    if(this.userType == 'Agency'){
    this.navCtrl.setRoot(OrdersPage);
    }else{
      this.navCtrl.setRoot(UserOrdersPage);
    }
  }
  getStatus(captain){
    let result = ''
    if(captain.working){
      if(captain.busy){
        result = this.busy
      }else{
        if(captain.atMarket){
          result = this.atMarket
        }else{
          result = this.onWay
        }
      }
    }else{
      result = this.not_working;
    }
    return result;
  }
}
