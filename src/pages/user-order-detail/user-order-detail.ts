import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { UserOrdersPage } from '../user-orders/user-orders';
import { TranslateService } from '@ngx-translate/core';
import { DeviceTockenService } from '../../providers/auth/deviceToken.service';
import { OrderService } from '../../providers/auth/order.service';
import { UserOrderService } from '../../providers/auth/userOrders.service';
import { MyApp } from '../../app/app.component';
import { CaptainDetailsPage } from '../captain-details/captain-details';

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
    reciverAddress: null,
    senderAddress: null,
    captain: null,
    userOrder: {
      identifyNumber: '',
      marketName: '',
      isBuing: false,
      marketAddress: '',
      marketPhone: '',
      priceRange: '',
      description: '',
      weight: '',
      senderPhone: null,
      reciverName: null,
      reciverPhone: null,
      status: '',
      id: 0,
      userId: 0,
      isTaken: false
    }
  }

  language = MyApp.language
  direction = MyApp.direction

  takeOrderSuccess = null;
  takeOrderErroe = null;


  userType = '';
  status = ''

  deliverOrderSuccess = null;
  deliverOrderError = null;

  pleaseWait;
  ok = ''
  notSupported = ''
  noLocationAvilable = ''

  isCordova = false;

  myVar;

  flatValue = ''
  homeValue = ''
  officeValue = ''

  constructor(public navCtrl: NavController, public navParams: NavParams, private _alert: AlertController, private orderService: UserOrderService, public toastCtrl: ToastController, private deviceTokenService: DeviceTockenService, private loading: LoadingController, private platform: Platform, private translateService: TranslateService) {
    this.order = navParams.get('item');
    this.userType = navParams.get('userType');
    this.myVar = navParams.get("myVar");

    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.isCordova = true;
    }

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(UserOrdersPage, { myVar: this.myVar });
    });

    this.translateService.get([ 'TAKE_ORDER_ERROR', 'TAKE_ORDER_SUCCESS', 'DELIVER_ORDER_ERROR', 'DELIVER_ORDER_SUCCESS', 'PLEASE_WAIT', 'OK', 'NOT_SUPPORTED', 'NO_LOCATION_AVILABLE', 'OFFICE', 'HOME', 'FLAT']).subscribe((values) => {

      this.deliverOrderError = values.DELIVER_ORDER_ERROR;
      this.deliverOrderSuccess = values.DELIVER_ORDER_SUCCESS;

      this.pleaseWait = values.PLEASE_WAIT
      this.ok = values.OK
      this.notSupported = values.NOT_SUPPORTED
      this.noLocationAvilable = values.NO_LOCATION_AVILABLE

      this.flatValue = values.FLAT
      this.homeValue = values.HOME
      this.officeValue = values.OFFICE

      this.takeOrderSuccess = values.TAKE_ORDER_SUCCESS
      this.takeOrderErroe = values.TAKE_ORDER_ERROR


    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserOrderDetailPage');
  }
  back() {
    this.navCtrl.setRoot(UserOrdersPage, { myVar: this.myVar });
  }

  assingCaptain() {
    this.navCtrl.setRoot('AssignOrderPage', { item: this.order.userOrder, from: "UserOrderDetailPage", order: this.order, userType: this.userType, myVar: this.myVar })
  }
  editRating() {
    this.navCtrl.setRoot('EditRatingPage', { item: this.order.userOrder, from: "UserOrderDetailPage", order: this.order, userType: this.userType })
  }
  viewCaptainDetails() {
    this.navCtrl.setRoot(CaptainDetailsPage, { item: this.order.captain, from: "UserOrderDetailPage", myVar: this.myVar, order: this.order, userType: this.userType });
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
                  "notification": {
                    "title": "طلب جديد",
                    "body": "لقد تم توصيل الطلب  " + " " + this.order.userOrder.identifyNumber,
                    "sound": "default",
                    "click_action": "FCM_PLUGIN_ACTIVITY",
                    "icon": "fcm_push_icon"
                  },
                  "data": {
                    "title": "طلب جديد",
                    "body": "لقد تم توصيل الطلب  " + " " + this.order.userOrder.identifyNumber
                  },
                  "to": element,
                  "priority": "high",
                  "restricted_package_name": ""
                }

                this.deviceTokenService.sendNotification(body);


              });

            }, err1 => {
              console.log(err1, 'errrrrrrrrrrrrrrrrrrrrrrrrrror');

            }
          )





          this.deviceTokenService.getUserTokens(this.order.userOrder.userId).subscribe(
            res1 => {
              console.log("res1", res1);

              res1.forEach(element => {
                let body = {
                  "notification": {
                    "title": "طلبك",
                    "body": "لقد تم توصيل طلبك  " + " " + this.order.userOrder.identifyNumber,
                    "sound": "default",
                    "click_action": "FCM_PLUGIN_ACTIVITY",
                    "icon": "fcm_push_icon"
                  },
                  "data": {
                    "title": "طلبك",
                    "body": "لقد تم توصيل طلبك  " + " " + this.order.userOrder.identifyNumber
                  },
                  "to": element,
                  "priority": "high",
                  "restricted_package_name": ""
                }

                this.deviceTokenService.sendNotification(body);


              });
            }, err1 => {
              console.log(err1, 'errrrrrrrrrrrrrrrrrrrrrrrrrror');

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
        this.myVar = 'delivered';

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
  getStringNumer(number) {
    return "" + number + "";
  }
  viewLocation(order) {
    if (order.latitude != "0") {

      this.navCtrl.setRoot('OrdersMapPage', { item: order, from: "UserOrderDetailPage", order: this.order, userType: this.userType, myVar: this.myVar })
    } else {
      let alert = this._alert.create({
        title: this.notSupported,
        message: this.noLocationAvilable,
        buttons: [
          {
            text: this.ok,
            handler: () => {

            }
          }
        ]
      });
      alert.present();
    }
  }
  getFormattedDate(dateString) {
    var date = new Date(dateString);
    var str = date.getFullYear() + "-";
    str += (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    str += "-";
    str += date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    str += " "
    str += date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    str += ":";
    str += date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    // str += ":";
    // str += date.getSeconds() < 10 ? "0"+ date.getSeconds() :  date.getSeconds();
    return str;
  }
  getLivingType(type) {
    let typeValue = '';
    if (type == 'Flat' || type == 'شقه') {
      typeValue = this.flatValue
    } else if (type == 'منزل' || type == 'Home') {
      typeValue = this.homeValue
    } else if (type == 'مكتب' || type == 'Office') {
      typeValue = this.officeValue
    }
    return typeValue;
  }
  takeOrder(item) {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()


    this.orderService.takeOrder(item.userOrder.id).subscribe(
      res => {

        // if (this.platform.is('cordova')) {
        this.deviceTokenService.getAdminTokens().subscribe(
          res1 => {
            console.log("res1", res1);

            res1.forEach(element => {
              let body = {
                "notification": {
                  "title": "طلب جديد",
                  "body": "لقد تم الاستلام من المرسل للطلب  " + " " + item.userOrder.identifyNumber,
                  "sound": "default",
                  "click_action": "FCM_PLUGIN_ACTIVITY",
                  "icon": "fcm_push_icon"
                },
                "data": {
                  "title": "طلب جديد",
                  "body": "لقد تم الاستلام من المرسل للطلب  " + " " + item.userOrder.identifyNumber
                },
                "to": element,
                "priority": "high",
                "restricted_package_name": ""
              }

              this.deviceTokenService.sendNotification(body);


            });

          }, err1 => {
            console.log(err1, 'errrrrrrrrrrrrrrrrrrrrrrrrrror');

          }
        )

        this.deviceTokenService.getUserTokens(item.userOrder.userId).subscribe(
          res1 => {
            console.log("res1", res1);

            res1.forEach(element => {
              let body = {
                "notification": {
                  "title": "طلبك",
                  "body": "لقد تم الاستلام من المرسل لطلبك  " + " " + item.userOrder.identifyNumber,
                  "sound": "default",
                  "click_action": "FCM_PLUGIN_ACTIVITY",
                  "icon": "fcm_push_icon"
                },
                "data": {
                  "title": "طلبك",
                  "body": "لقد تم الاستلام من المرسل لطلبك  " + " " + item.userOrder.identifyNumber
                },
                "to": element,
                "priority": "high",
                "restricted_package_name": ""
              }

              this.deviceTokenService.sendNotification(body);


            });
          }, err1 => {
            console.log(err1, 'errrrrrrrrrrrrrrrrrrrrrrrrrror');

          }
        )

        // }


        let toast = this.toastCtrl.create({
          message: this.takeOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        console.log("success");

        load.dismiss();
        this.order.userOrder.isTaken = true;
      }, err => {
        console.log(err);


        let displayError = this.takeOrderErroe;

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
