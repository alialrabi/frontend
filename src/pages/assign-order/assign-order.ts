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
import { UserOrderService } from '../../providers/auth/userOrders.service';
import { DeviceTockenService } from '../../providers/auth/deviceToken.service';
import { UserOrderDetailPage } from '../user-order-detail/user-order-detail';

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
  from = ''

  userDetailIemParam;
  userDetailUserTypeParam;

  isCordova = false;

  myVar

  okText = ''
  cancelText = ''


  constructor(public navCtrl: NavController, public navParams: NavParams , private deviceTokenService:DeviceTockenService , public platform:Platform , public userOrderService:UserOrderService,
    private builder: FormBuilder , public captainService:CaptainService  ,private loading: LoadingController , private app: App, private principal: Principal, public toastCtrl: ToastController , public translateService: TranslateService , public orderService:OrderService ) {

      this.order = this.navParams.get("item");
      this.from = this.navParams.get("from");
      this.myVar = this.navParams.get("myVar");

      this.userDetailIemParam = this.navParams.get('order')
      this.userDetailUserTypeParam = this.navParams.get('userType')

      if (this.platform.is("cordova") && this.platform.is("android")) {
        this.isCordova = true;
      }

    this.translateService.get(["SELECTION_CANCEL" , "SELECTION_OK" ,'ASSIGN_ORDER_ERROR', 'ASSIGN_ORDER_SUCCESS' , 'PLEASE_WAIT' , 'NOT_WORKING' , 'ON_BACK_WAY' , 'AT_MARKET' , 'BUSY']).subscribe((values) => {
      this.assignOrderError = values.ASSIGN_ORDER_ERROR;
      this.assingOrderSuccess = values.ASSIGN_ORDER_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
      this.busy = values.BUSY
      this.atMarket = values.AT_MARKET
      this.not_working = values.NOT_WORKING
      this.onWay = values.ON_BACK_WAY

      this.okText = values.SELECTION_OK
      this.cancelText = values.SELECTION_CANCEL
    })


    this.myForm = builder.group({
      //'userId':['', [Validators.required ]],
      'captainId': ['', [Validators.required ]],
      
    });

    this.platform.registerBackButtonAction(() => {
      if(this.userType == 'Agency'){
        this.navCtrl.setRoot(OrdersPage , { myVar:this.myVar} );
        }else{
          if(this.from == 'UserOrderDetailPage'){
            this.navCtrl.setRoot(UserOrderDetailPage , {item:this.userDetailIemParam , userType:this.userDetailUserTypeParam , myVar:this.myVar});
          }else{
          this.navCtrl.setRoot(UserOrdersPage , { myVar:this.myVar} );
          }
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
//      load.dismiss()
      
      if (account === null ) {
         this.app.getRootNavs()[0].setRoot(FirstRunPage);
         load.dismiss();
      }else if(account.authorities[0]== 'ROLE_AGENCY'){
        this.account = account;
        this.userType = 'Agency'
        this.getAllCaptains(this.account.id , load);
      }else{
        this.account = account;
        this.userType = 'Admin'
        this.getAllCaptains(0 , load);

      }
       
        
      
    }).catch((err)=>{
      load.dismiss();
    });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignOrderPage');
  }

  getAllCaptains(id , load){
    // let load = this.loading.create({
    //   content: this.pleaseWait
  
  
    // })
    // load.present()
    this.captainService.captainsPickListByAgencyId(id).subscribe(
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

    if(this.from == 'userOrder' || this.from == 'UserOrderDetailPage'){

    this.userOrderService.assign(this.myForm.get('captainId').value.id , this.order.id).subscribe(
      res =>{

        //if (this.platform.is('cordova')) {
          this.deviceTokenService.getUserTokens(this.myForm.get('captainId').value.userId).subscribe(
            res1 => {
              console.log("res1", res1);

              res1.forEach(element => {

                let body = {
                  "notification":{
                    "title":"طلب جديد",
                    "body":" لقد تم الحاقك بطلب جديد برقم تعريفى"+" "+ this.order.identifyNumber ,
                    "sound":"default",
                    "click_action":"FCM_PLUGIN_ACTIVITY",
                    "icon":"fcm_push_icon"
                  },
                  "data":{
                    "title":"طلب جديد",
                    "body":" لقد تم الحاقك بطلب جديد برقم تعريفى"+" "+ this.order.identifyNumber
                  },
                    "to":element,
                    "priority":"high",
                    "restricted_package_name":""
                }
  
                this.deviceTokenService.sendNotification(body);
  
                
              });

             

            }, err1 => {
              console.log("errrrr  11111", err1);

            }
          )

          this.deviceTokenService.getUserTokens(this.order.userId).subscribe(
            res1 => {
              console.log("res1", res1);

              res1.forEach(element => {

                let body = {
                  "notification":{
                    "title":"طلبك",
                    "body":" طلبك صاحب الرقم التعريفى "+" "+ this.order.identifyNumber+" قيد التنفيذ الان " ,
                    "sound":"default",
                    "click_action":"FCM_PLUGIN_ACTIVITY",
                    "icon":"fcm_push_icon"
                  },
                  "data":{
                    "title":"طلبك",
                    "body":" طلبك صاحب الرقم التعريفى "+" "+ this.order.identifyNumber+" قيد التنفيذ الان " ,
                  },
                    "to":element,
                    "priority":"high",
                    "restricted_package_name":""
                }
  
                this.deviceTokenService.sendNotification(body);
  
                
              });

             

            }, err1 => {
              console.log("errrrr  11111", err1);

            }
          )

        //}

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

    }else{


    this.orderService.assign(this.myForm.get('captainId').value.id , this.order.id).subscribe(
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
    this.navCtrl.setRoot(OrdersPage , { myVar:this.myVar});
    }else{
      if(this.from == 'UserOrderDetailPage'){
        this.navCtrl.setRoot(UserOrderDetailPage , {item:this.userDetailIemParam , userType:this.userDetailUserTypeParam , myVar:this.myVar});
      }else{
      this.navCtrl.setRoot(UserOrdersPage , { myVar:this.myVar});
      }
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
