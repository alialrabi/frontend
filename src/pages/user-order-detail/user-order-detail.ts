import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController, LoadingController } from 'ionic-angular';
import { UserOrdersPage } from '../user-orders/user-orders';
import { TranslateService } from '@ngx-translate/core';
import { DeviceTockenService } from '../../providers/auth/deviceToken.service';
import { OrderService } from '../../providers/auth/order.service';
import { UserOrderService } from '../../providers/auth/userOrders.service';

/**
 * Generated class for the UserOrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-order-detail',
  templateUrl: 'user-order-detail.html',
})
export class UserOrderDetailPage {

  order = {
    reciverAddress:null,
    senderAddress:null,
    userOrder:{
      identifyNumber:'',
      marketName:'',
      isBuing:false,
      marketAddress:'',
      marketPhone:'',
      priceRange:'',
      description:'',
      weight:'',
      senderPhone:null,
      reciverName:null,
      reciverPhone:null,
      status:'',
      id:0,
      userId:0
    }
  }

  userType = '';
  status = ''

  deliverOrderSuccess = null;
  deliverOrderError = null;

  pleaseWait;

  constructor(public navCtrl: NavController, public navParams: NavParams, private orderService:UserOrderService , public toastCtrl: ToastController , private deviceTokenService:DeviceTockenService , private loading: LoadingController  ,private platform:Platform , private translateService:TranslateService) {
    this.order = navParams.get('item');
    this.userType = navParams.get('userType');

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(UserOrdersPage);
    });

    this.translateService.get(['DELIVER_ORDER_ERROR', 'DELIVER_ORDER_SUCCESS', 'PLEASE_WAIT']).subscribe((values) => {

      this.deliverOrderError = values.DELIVER_ORDER_ERROR;
      this.deliverOrderSuccess = values.DELIVER_ORDER_SUCCESS;

      this.pleaseWait = values.PLEASE_WAIT
     
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserOrderDetailPage');
  }
  back(){
    this.navCtrl.setRoot(UserOrdersPage);
  }

  assingCaptain() {
    this.navCtrl.setRoot('AssignOrderPage', { item: this.order.userOrder , from:"UserOrderDetailPage" , order:this.order , userType:this.userType})
  }

  finish() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()


    this.orderService.finishOrder(this.order.userOrder.id).subscribe(
      res => {

        if (this.platform.is('cordova')) {
          this.deviceTokenService.getAdminTokens().subscribe(
            res1 => {
              console.log("res1", res1);

              res1.forEach(element => {
                let body = {
                  "notification":{
                    "title":"طلب جديد",
                    "body":"لقد تم توصيل الطلب  " +" "+this.order.userOrder.identifyNumber,
                    "sound":"default",
                    "click_action":"FCM_PLUGIN_ACTIVITY",
                    "icon":"fcm_push_icon"
                  },
                  "data":{
                    "title":"طلب جديد",
                    "body":"لقد تم توصيل الطلب  " +" "+this.order.userOrder.identifyNumber
                  },
                    "to":element,
                    "priority":"high",
                    "restricted_package_name":""
                }
  
                this.deviceTokenService.sendNotification(body);
  
                
              });

            },err1 =>{
              console.log(err1 , 'errrrrrrrrrrrrrrrrrrrrrrrrrror');
              
            }
          )

              

           

          this.deviceTokenService.getUserTokens(this.order.userOrder.userId).subscribe(
            res1 => {
              console.log("res1", res1);

              res1.forEach(element => {
                let body = {
                  "notification":{
                    "title":"طلبك",
                    "body":"لقد تم توصيل طلبك  " +" "+this.order.userOrder.identifyNumber,
                    "sound":"default",
                    "click_action":"FCM_PLUGIN_ACTIVITY",
                    "icon":"fcm_push_icon"
                  },
                  "data":{
                    "title":"طلبك",
                    "body":"لقد تم توصيل طلبك  " +" "+this.order.userOrder.identifyNumber
                  },
                    "to":element,
                    "priority":"high",
                    "restricted_package_name":""
                }
  
                this.deviceTokenService.sendNotification(body);
  
                
              });
            },err1 =>{
              console.log(err1 , 'errrrrrrrrrrrrrrrrrrrrrrrrrror');
              
            }
          )

        }


        let toast = this.toastCtrl.create({
          message: this.deliverOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        console.log("success");

        load.dismiss();
        this.order.userOrder.status = 'delivered';

      }, err => {
        console.log(err);


        let displayError = this.deliverOrderError;

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
  viewLocation(order) {

    this.navCtrl.setRoot('OrdersMapPage', { item: order , from:"UserOrderDetailPage" , order:this.order , userType:this.userType })
  }


}
