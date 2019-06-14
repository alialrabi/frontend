import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, ToastController, AlertController, Platform } from 'ionic-angular';
import { AddOrderPage } from '../add-order/add-order';
import { FirstRunPage } from '../pages';
import { TranslateService } from '@ngx-translate/core';
import { Principal } from '../../providers/auth/principal.service';
import { OrderService } from '../../providers/auth/order.service';
import { ChooseAddressPage } from '../choose-address/choose-address';
import { CaptainService } from '../../providers/auth/captain.service';
import { OrderKindPage } from '../order-kind/order-kind';
import { UserOrderService } from '../../providers/auth/userOrders.service';
import { DeviceTockenService } from '../../providers/auth/deviceToken.service';
import { UserOrderDetailPage } from '../user-order-detail/user-order-detail';
import { AdminDashboardPage } from '../admin-dashboard/admin-dashboard';
import { CaptainOrdersPage } from '../captain-orders/captain-orders';
import { CaptainDetailsPage } from '../captain-details/captain-details';

/**
 * Generated class for the UserOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-orders',
  templateUrl: 'user-orders.html',
})
export class UserOrdersPage {

  isLoading = false;


  space = "  ";
  public account = null;
  public myVar = '';

  deliverOrderSuccess = null;
  deliverOrderError = null;

  takeOrderSuccess = null;
  takeOrderErroe = null;

  public ordersList = [];

  public pleaseWait;
  userType = '';
  userId = 0;
  captainId = 0;
  captain = null;

  pageNum = 1;
  moreData = 'Loading more data...'

  addOrderMessage = '';
  addOrderTitle = '';
  deliverFromTo = '';
  buyFromMarket = '';

  counter = 0;
  exitMessage

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private deviceTokenService: DeviceTockenService, public _alert: AlertController, public toastCtrl: ToastController, private captainService: CaptainService, private loading: LoadingController, public translateService: TranslateService, private app: App, private principal: Principal, public orderService: UserOrderService) {

    this.myVar = navParams.get("myVar");

    this.translateService.get(['EXIT_MESSAGE', 'TAKE_ORDER_ERROR', 'TAKE_ORDER_SUCCESS', 'DELIVER_ORDER_ERROR', 'DELIVER_ORDER_SUCCESS', 'PLEASE_WAIT', 'MORE_DATA', 'ADD_ORDER_TITLE', 'ORDER_KIND_MESSAGE', 'BUY_FROM_MARKET', 'DELIVER_FROM_LOCATION_TO_LOCATION']).subscribe((values) => {

      this.deliverOrderError = values.DELIVER_ORDER_ERROR;
      this.deliverOrderSuccess = values.DELIVER_ORDER_SUCCESS;

      this.pleaseWait = values.PLEASE_WAIT
      this.moreData = values.MORE_DATA
      this.addOrderMessage = values.ORDER_KIND_MESSAGE;
      this.addOrderTitle = values.ADD_ORDER_TITLE;
      this.deliverFromTo = values.DELIVER_FROM_LOCATION_TO_LOCATION;
      this.buyFromMarket = values.BUY_FROM_MARKET;
      this.takeOrderSuccess = values.TAKE_ORDER_SUCCESS
      this.takeOrderErroe = values.TAKE_ORDER_ERROR
      this.exitMessage = values.EXIT_MESSAGE
    })
    if (this.platform.is('cordova') && this.platform.is("android")) {
      this.platform.registerBackButtonAction(() => {
        if (this.userType == 'Admin') {
          this.navCtrl.setRoot(AdminDashboardPage);
        } else if (this.userType == 'Captain') {
          this.navCtrl.setRoot(CaptainOrdersPage);
        } else if (this.userType == 'User') {
          if (this.counter == 0) {
            this.counter++;

            let toast = this.toastCtrl.create({
              message: this.exitMessage,
              duration: 3000,
              position: "bottom"
            });
            toast.present();

            setTimeout(() => { this.counter = 0 }, 3000)
          } else {
            this.platform.exitApp();
          }
        }

      });
    }

  }

  doInfinite(infiniteScroll) {

    setTimeout(() => {

      this.getUserOrders(this.myVar, this.pageNum);


      infiniteScroll.complete();
    }, 1000);
  }
  ngOnInit() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.principal.identity().then((account) => {

      if (account === null) {
        load.dismiss();
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else if (account.authorities[0] == 'ROLE_USER' && account.authorities.length == 1) {

        this.account = account;
        if (this.myVar == null || this.myVar == undefined || this.myVar == '') {
          this.myVar = 'assigned';
        }
        this.userType = 'User';
        this.userId = account.id;
        this.captainId = 0;
        //        load.dismiss();
        this.getUserOrdersAfterFinish(this.myVar, 0, load);



      } else if (account.authorities[0] == 'ROLE_CAPTAIN') {

        this.account = account;
        if (this.myVar == null || this.myVar == undefined || this.myVar == '') {
          this.myVar = 'assigned';
        }
        this.userType = 'Captain';
        this.userId = 0;

        this.captainService.getByUserId(account.id).subscribe(
          data => {


            this.captain = data;
            this.captainId = data.id;

            //            load.dismiss();
            this.getUserOrdersAfterFinish(this.myVar, 0, load);
          },
          err => {
            console.log(err, 'errrrror');
            load.dismiss()

          })

      }

      else {
        this.account = account;
        if (this.myVar == null || this.myVar == undefined || this.myVar == '') {
          this.myVar = 'assigned';
        }
        this.userType = 'Admin';
        this.userId = 0;
        this.captainId = 0;
        //        load.dismiss();
        this.getUserOrdersAfterFinish(this.myVar, 0, load);

      }
    }).catch((err) => {
      load.dismiss();
    });
  }

  // getAllOrders(status, pageNum) {
  //   this.myVar = status;
  //   let load;
  //   if (pageNum == 0) {
  //     load = this.loading.create({
  //       content: this.pleaseWait


  //     })
  //     load.present()
  //     this.ordersList = [];
  //     this.pageNum = 1;
  //   }

  //   this.orderService.getAllByStatus(status, this.userId, true, pageNum).subscribe(res => {
  //     console.log(res);


  //     if (pageNum == 0) {
  //       this.ordersList = res;
  //       load.dismiss();
  //     } else {
  //       if (res.length > 0) {
  //         this.pageNum++;
  //       }
  //       res.forEach(element => {
  //         this.ordersList.push(element);

  //       });
  //     }
  //   }, err => {
  //     console.log(err);
  //     if (pageNum == 0) {
  //       load.dismiss();
  //     }
  //   })
  // }

  getUserOrders(status, pageNum) {

    if (pageNum == 0) {

      this.myVar = status;

      let load = this.loading.create({
        content: this.pleaseWait


      })
      load.present()
      this.ordersList = [];
      this.pageNum = 1;

      this.orderService.getUserOrders(this.userId, this.captainId, status, pageNum).subscribe(res => {
        this.ordersList = res;
        load.dismiss();

      }, err => {
        console.log(err);
        load.dismiss();

      })

    } else {

      if (!this.isLoading) {
        this.isLoading = true;

        this.myVar = status;
        let load;
        if (pageNum == 0) {
          load = this.loading.create({
            content: this.pleaseWait


          })
          load.present()
          this.ordersList = [];
          this.pageNum = 1;
        }
        this.orderService.getUserOrders(this.userId, this.captainId, status, pageNum).subscribe(res => {
          if (pageNum == 0) {
            this.ordersList = res;
            load.dismiss();
          } else {
            if (res.length > 0) {
              this.pageNum++;
            }
            res.forEach(element => {
              this.ordersList.push(element);

            });
          }
          this.isLoading = false;

        }, err => {
          console.log(err);
          if (pageNum == 0) {
            load.dismiss();
          }
        })
      }
    }
  }

  getUserOrdersAfterFinish(status, pageNum, load) {


    this.myVar = status;

    this.ordersList = [];
    this.pageNum = 1;

    this.orderService.getUserOrders(this.userId, this.captainId, status, pageNum).subscribe(res => {
      this.ordersList = res;
      load.dismiss();

    }, err => {
      console.log(err);
      load.dismiss();

    })

  }


  add() {

    // let alert = this._alert.create({
    //   title: this.addOrderTitle,
    //   message:this.addOrderMessage,
    //   buttons: [
    //     {
    //       text: this.buyFromMarket,
    //       handler: () => {

    //       }
    //     },
    //     {
    //       text: this.deliverFromTo,
    //       handler: () => {

    //       }
    //     }
    //   ]
    // });
    // alert.present();

    this.navCtrl.setRoot(OrderKindPage);

  }
  viewOrder(orders) {
    let items = [];

    let flag = true;

    while (flag) {
      let index = orders.indexOf('-');

      if (index != -1) {

        // for (let index = 0; index < orders.length; index++) {  
        
        if (orders.charAt(index) === '-' && orders.charAt(index - 1) === ' ' && orders.charAt(index + 1) === ' ') {
          let subOrder = {
            name: orders.substring(0, index - 1),
            index: items.length + 1
          }
          items.push(subOrder);
          orders = orders.substring(index + 1, orders.length)
        }

        //}
      } else {
        flag = false;
      }
    }

    let subOrder1 = {
      name: orders,
      index: items.length + 1
    }

    items.push(subOrder1)


    return items;
  }

  assingCaptain(order) {
    this.navCtrl.setRoot('AssignOrderPage', { item: order.userOrder, from: "userOrder", myVar: this.myVar })
  }
  editRating(order) {
    this.navCtrl.setRoot('EditRatingPage', { item: order.userOrder, from: "userOrder" })
  }

  finish(item) {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()


    this.orderService.finishOrder(item.userOrder.id).subscribe(
      res => {

        // if (this.platform.is('cordova')) {
        this.deviceTokenService.getAdminTokens().subscribe(
          res1 => {

            res1.forEach(element => {
              let body = {
                "notification": {
                  "title": "طلب جديد",
                  "body": "لقد تم توصيل الطلب  " + " " + item.userOrder.identifyNumber,
                  "sound": "default",
                  "click_action": "FCM_PLUGIN_ACTIVITY",
                  "icon": "fcm_push_icon"
                },
                "data": {
                  "title": "طلب جديد",
                  "body": "لقد تم توصيل الطلب  " + " " + item.userOrder.identifyNumber
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

            res1.forEach(element => {
              let body = {
                "notification": {
                  "title": "طلبك",
                  "body": "لقد تم توصيل طلبك  " + " " + item.userOrder.identifyNumber,
                  "sound": "default",
                  "click_action": "FCM_PLUGIN_ACTIVITY",
                  "icon": "fcm_push_icon"
                },
                "data": {
                  "title": "طلبك",
                  "body": "لقد تم توصيل طلبك  " + " " + item.userOrder.identifyNumber
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
          message: this.deliverOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();

        //        load.dismiss();
        this.getUserOrdersAfterFinish(this.myVar, 0, load);

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

        //        load.dismiss();
        this.getUserOrdersAfterFinish(this.myVar, 0, load);

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


  ionViewDidLoad() {
  }
  viewLocation(order) {

    this.navCtrl.setRoot('OrdersMapPage', { item: order })
  }
  viewDetails(order) {
    this.navCtrl.setRoot(UserOrderDetailPage, { item: order, userType: this.userType, myVar: this.myVar });
  }
  viewCaptainDetails(captain){
    this.navCtrl.setRoot(CaptainDetailsPage, {item: captain , from: "UserOrdersPage" , myVar: this.myVar });
  }

}
