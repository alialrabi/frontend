import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemDivider, ToastController, App, LoadingController, Platform, AlertController } from 'ionic-angular';
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

  deleteTilte = ''
  deleteMessage = ''
  ok = ''

  constructor(public navCtrl: NavController, private loginService: LoginService, public _alert : AlertController , public platform: Platform, private loading: LoadingController, public accountService: AccountService, private captainService: CaptainService, private app: App, private principal: Principal, public navParams: NavParams, public orderService: OrderService, public translateService: TranslateService, public toastCtrl: ToastController) {

    // this.captain = this.navParams.get("item");

    this.translateService.get([ 'CAPTAIN_DELETED_WARNINIG' , 'CAPTAIN_DELETED_MESSAGE' , 'OK' , 'EXIT_MESSAGE', 'DELIVER_ORDER_ERROR', 'DELIVER_ORDER_SUCCESS', 'ASSIGN_ORDER_ERROR', 'ASSIGN_ORDER_SUCCESS', 'PLEASE_WAIT', 'MORE_DATA']).subscribe((values) => {
      this.deliverOrderError = values.DELIVER_ORDER_ERROR;
      this.deliverOrderSuccess = values.DELIVER_ORDER_SUCCESS;
      this.assignOrderError = values.ASSIGN_ORDER_ERROR;
      this.assingOrderSuccess = values.ASSIGN_ORDER_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
      this.moreData = values.MORE_DATA
      this.exitMessage = values.EXIT_MESSAGE
      this.deleteTilte = values.CAPTAIN_DELETED_WARNINIG
      this.deleteMessage = values.CAPTAIN_DELETED_MESSAGE
      this.ok = values.OK
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
          this.platform.exitApp();
        }

      });
    }

  }

  ngOnInit() {

  }

  doInfinite(infiniteScroll) {

    setTimeout(() => {

      if (this.myVar == 'not assigned') {
        this.getNotAssigned(this.myVar, this.pageNum);
      } else {

        this.getAllOrders(this.myVar, this.pageNum);

      }

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

      classIn.captainService.updateLocation(location).subscribe(
        res => {

        }, err => {
          console.log(err, 'errrrrrpr');

        }
      )


    }, err => {
      console.log(err, 'error sssssssssssss');

    })


  }


  ionViewDidLoad() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    let classIn = this;
    this.principal.identity().then((account) => {

      console.log(account);

      if (account === null || (account.id == null && account.firstName == null && account.login == null && account.authorities.length == 0) || account.authorities[0] != 'ROLE_CAPTAIN') {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
        load.dismiss()
      } else {

        this.captainService.getByUserId(account.id).subscribe(
          data => {


            this.captain = data;

            this.myVar = 'assigned';
            //           load.dismiss();
            if (this.captain != null && this.captain.active) {
              this.getAllOrdersAfterFinish(this.myVar, 0, load);
              if (this.captain.agencyId != 0) {
                this.getCaptainAgency();
              }
            } else {
              load.dismiss();
            //  this.app.getRootNavs()[0].setRoot(FirstRunPage);
            window.location.reload();
            }
            //classIn.updateLocationTimer(classIn);



          }, err => {
            console.log(err, 'errror');
            load.dismiss();

          }
        )

      }
    }).catch((err) => {
      load.dismiss()
    });


  }

  updateLocationTimer(classIn) {

    Observable.interval(10000).subscribe(x => {
      classIn.updateLocation(classIn);

    })
  }

  getCaptainAgency() {

    if (this.captain != null) {

      // let load = this.loading.create({
      //   content: this.pleaseWait


      // })
      // load.present()
      this.accountService.getById(this.captain.agencyId).subscribe(
        res => {
          this.agency = res;
          this.autoAssign = res.autoAssign
          //     load.dismiss();


        }, err => {
          //      load.dismiss();

          console.log(err, 'errrrrrrror');


        }
      )
    }
  }


  getNotAssigned(status, pageNum) {

    if (this.captain != null) {

      if (pageNum == 0) {

        this.myVar = status;

        let load = this.loading.create({
          content: this.pleaseWait


        })
        load.present()

        this.ordersList = [];
        this.pageNum = 1;

        this.orderService.getAllByStatus(status, this.captain.agencyId, false, pageNum).subscribe(res => {

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


          this.orderService.getAllByStatus(status, this.captain.agencyId, false, pageNum).subscribe(res => {

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
  }

  getNotAssignedAfterTake(status, pageNum, load) {

    if (this.captain != null) {
      this.myVar = status;

      this.ordersList = [];
      this.pageNum = 1;

      this.orderService.getAllByStatus(status, this.captain.agencyId, false, pageNum).subscribe(res => {

        this.ordersList = res;
        load.dismiss();
      }, err => {
        console.log(err);
        load.dismiss();

      })

    }

  }

  getAllOrders(status, pageNum) {

    if (this.captain != null) {

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
  }
  getAllOrdersAfterFinish(status, pageNum, load) {

    if (this.captain != null) {

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

  finish(item) {

    if (this.captain != null) {

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

          //        load.dismiss();
          this.getAllOrdersAfterFinish(this.myVar, 0, load);

        }, err => {
          console.log(err);

          if(err.status === 400){

            let alert = this._alert.create({
              title: this.deleteTilte,
              message: this.deleteMessage,
              buttons: [
                
                {
                  text: this.ok,
                  handler: () => {
        
                  }
                }
              ]
            });
            alert.present();


          }else{


          let displayError = this.deliverOrderError;

          let toast = this.toastCtrl.create({
            message: displayError,
            duration: 3000,
            position: 'middle'
          });
          toast.present();

        }
          load.dismiss();
        }
      )
    }
  }
  assignOrder(order) {

    if (this.captain != null) {

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

          if(err.status === 400){

            let alert = this._alert.create({
              title: this.deleteTilte,
              message: this.deleteMessage,
              buttons: [
                
                {
                  text: this.ok,
                  handler: () => {
        
                  }
                }
              ]
            });
            alert.present();


          }else{

          let displayError = this.assignOrderError;

          let toast = this.toastCtrl.create({
            message: displayError,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        }
          load.dismiss();

        }
      )

    }

  }

  logout() {
    this.loginService.logout();
    this.app.getRootNavs()[0].setRoot(FirstRunPage);
  }

}
