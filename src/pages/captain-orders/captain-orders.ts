import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemDivider, ToastController, App, LoadingController, Platform } from 'ionic-angular';
import { OrderService } from '../../providers/auth/order.service';
import { TranslateService } from '@ngx-translate/core';
import { Principal } from '../../providers/auth/principal.service';
import { FirstRunPage } from '../pages';
import { CaptainService } from '../../providers/auth/captain.service';
import { LoginService } from '../../providers/login/login.service';
import { AccountService } from '../../providers/auth/account.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';


/**
 * Generated class for the CaptainOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-captain-orders',
  templateUrl: 'captain-orders.html',
})
export class CaptainOrdersPage {

  isLoading = false;


  public ordersList = [];

  deliverOrderSuccess = null;
  deliverOrderError = null;

  public captain;
  public agency;

  public autoAssign = false;

  public myVar = null;

  assingOrderSuccess = null;
  assignOrderError = null;

  public pleaseWait;

  interval = null;

  pageNum = 1;
  moreData = 'Loading more data...'
  exitMessage
  counter = 0


  constructor(public navCtrl: NavController, private loginService: LoginService, public platform: Platform, private loading: LoadingController, public accountService: AccountService, private captainService: CaptainService, private app: App, private principal: Principal, public navParams: NavParams, public orderService: OrderService, public translateService: TranslateService, public toastCtrl: ToastController) {

    // this.captain = this.navParams.get("item");

    this.translateService.get(['EXIT_MESSAGE', 'DELIVER_ORDER_ERROR', 'DELIVER_ORDER_SUCCESS', 'ASSIGN_ORDER_ERROR', 'ASSIGN_ORDER_SUCCESS', 'PLEASE_WAIT', 'MORE_DATA']).subscribe((values) => {
      this.deliverOrderError = values.DELIVER_ORDER_ERROR;
      this.deliverOrderSuccess = values.DELIVER_ORDER_SUCCESS;
      this.assignOrderError = values.ASSIGN_ORDER_ERROR;
      this.assingOrderSuccess = values.ASSIGN_ORDER_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
      this.moreData = values.MORE_DATA
      this.exitMessage = values.EXIT_MESSAGE
    })

    if (this.platform.is('cordova') && this.platform.is("android")) {
      this.platform.registerBackButtonAction(() => {

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
          // console.log("exitapp");
          this.platform.exitApp();
        }

      });
    }

  }

  ngOnInit() {

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {

      if (this.myVar == 'not assigned') {
        this.getNotAssigned(this.myVar, this.pageNum);
      } else {

        this.getAllOrders(this.myVar, this.pageNum);

      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }

  updateLocation(classIn) {

    navigator.geolocation.getCurrentPosition(function (position) {

      let location = {
        lat: position.coords.latitude + '',
        lng: position.coords.longitude + '',
        captainId: classIn.captain.id
      }
      console.log(location);

      console.log("******************");


      classIn.captainService.updateLocation(location).subscribe(
        res => {
          console.log(res, 'sssssssssss');

        }, err => {
          console.log(err, 'errrrrrpr');

        }
      )


    }, err => {
      console.log(err, 'error sssssssssssss');

    })


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptainOrdersPage');

    // let load = this.loading.create({
    //   content: this.pleaseWait


    // })
    // load.present()

    let classIn = this;
    this.principal.identity().then((account) => {
      console.log(account);

      if (account === null || account.authorities[0] != 'ROLE_CAPTAIN') {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {

        this.captainService.getByUserId(account.id).subscribe(
          data => {


            this.captain = data;
            console.log(data, this.captain);

            this.myVar = 'assigned';
            console.log("**********");
            //           load.dismiss();

            this.getAllOrders(this.myVar, 0);
            if (this.captain.agencyId != 0) {
              this.getCaptainAgency();
            }
            console.log("********************");

            //classIn.updateLocationTimer(classIn);



          }, err => {
            console.log(err, 'errror');
            //           load.dismiss();

          }
        )

      }
    }).catch((err) => {
      //    load.dismiss()
    });


  }

  updateLocationTimer(classIn) {

    Observable.interval(10000).subscribe(x => {
      console.log(x, 'eeeeeeeeeeeeeeee');
      classIn.updateLocation(classIn);

    })
  }

  getCaptainAgency() {
    // let load = this.loading.create({
    //   content: this.pleaseWait


    // })
    // load.present()
    this.accountService.getById(this.captain.agencyId).subscribe(
      res => {
        console.log(res, 'nnnnnnnnnnnnn');
        this.agency = res;
        this.autoAssign = res.autoAssign
        //     load.dismiss();


      }, err => {
        //      load.dismiss();

        console.log(err, 'errrrrrrror');


      }
    )
  }


  getNotAssigned(status, pageNum) {

    if (pageNum == 0) {

      this.myVar = status;

      let load = this.loading.create({
        content: this.pleaseWait


      })
      load.present()

      this.ordersList = [];
      this.pageNum = 1;

      this.orderService.getAllByStatus(status, this.captain.agencyId, false, pageNum).subscribe(res => {
        console.log(res);
        console.log("*************");
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


        console.log("orders");
        console.log(this.captain);


        this.orderService.getAllByStatus(status, this.captain.agencyId, false, pageNum).subscribe(res => {
          console.log(res);
          console.log("*************");
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

  getNotAssignedAfterTake(status, pageNum, load) {


    this.myVar = status;

    this.ordersList = [];
    this.pageNum = 1;

    this.orderService.getAllByStatus(status, this.captain.agencyId, false, pageNum).subscribe(res => {
      console.log(res);
      console.log("*************");
      this.ordersList = res;
      load.dismiss();
    }, err => {
      console.log(err);
      load.dismiss();

    })

  }

  getAllOrders(status, pageNum) {

    if (pageNum == 0) {

      this.myVar = status;
      let load = this.loading.create({
        content: this.pleaseWait


      })
      load.present()
      this.ordersList = [];
      this.pageNum = 1;

      this.orderService.getCaptainOrders(this.captain.id, status, pageNum).subscribe(res => {
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
        this.orderService.getCaptainOrders(this.captain.id, status, pageNum).subscribe(res => {
          if (pageNum == 0) {
            this.ordersList = res;
          } else {
            if (res.length > 0) {
              this.pageNum++;
            }
            res.forEach(element => {
              this.ordersList.push(element);

            });
          }
          if (pageNum == 0) {
            load.dismiss();
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
  getAllOrdersAfterFinish(status, pageNum, load) {

    this.myVar = status;

    this.ordersList = [];
    this.pageNum = 1;

    this.orderService.getCaptainOrders(this.captain.id, status, pageNum).subscribe(res => {
      this.ordersList = res;

      load.dismiss();

    }, err => {
      console.log(err);
      load.dismiss();


    })

  }

  viewOrder(orders) {
    let items = [];

    let flag = true;

    while (flag) {

      let index = orders.indexOf('-');
      console.log(index, 'vvvv');

      if (index != -1) {

        // for (let index = 0; index < orders.length; index++) {  
        console.log(orders, orders.length, 'sssssssssssss');
        console.log(index, 'index');


        console.log(orders.charAt(index));
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
    console.log(items);

    let subOrder1 = {
      name: orders,
      index: items.length + 1
    }

    items.push(subOrder1)
    console.log(items, 'mmmmmmmmmmmmmmm');

    return items;
  }

  finish(item) {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()


    this.orderService.finishOrder(item.id).subscribe(
      res => {
        let toast = this.toastCtrl.create({
          message: this.deliverOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        console.log("success");

        //        load.dismiss();
        this.getAllOrdersAfterFinish(this.myVar, 0, load);

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
  assignOrder(order) {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.orderService.assign(this.captain.id, order.id).subscribe(
      res => {
        let toast = this.toastCtrl.create({
          message: this.assingOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        //        load.dismiss();
        this.getNotAssignedAfterTake(this.myVar, 0, load);

      }, err => {
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

  logout() {
    this.loginService.logout();
    this.app.getRootNavs()[0].setRoot(FirstRunPage);
  }

}
