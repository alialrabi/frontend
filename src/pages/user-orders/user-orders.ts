import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, ToastController } from 'ionic-angular';
import { AddOrderPage } from '../add-order/add-order';
import { FirstRunPage } from '../pages';
import { TranslateService } from '@ngx-translate/core';
import { Principal } from '../../providers/auth/principal.service';
import { OrderService } from '../../providers/auth/order.service';
import { ChooseAddressPage } from '../choose-address/choose-address';
import { CaptainService } from '../../providers/auth/captain.service';

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

  space="  ";
  public account = null;
  public myVar = '';

  deliverOrderSuccess = null;
  deliverOrderError = null;

  public ordersList = [];

  public pleaseWait;
  userType = '';
  userId = 0;
  captainId = 0;
  captain=null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController ,  private captainService:CaptainService , private loading: LoadingController, public translateService: TranslateService, private app: App, private principal: Principal, public orderService: OrderService) {

    this.translateService.get(['DELIVER_ORDER_ERROR', 'DELIVER_ORDER_SUCCESS', 'PLEASE_WAIT']).subscribe((values) => {

      this.deliverOrderError = values.DELIVER_ORDER_ERROR;
      this.deliverOrderSuccess = values.DELIVER_ORDER_SUCCESS;

      this.pleaseWait = values.PLEASE_WAIT
    })

  }

  ngOnInit() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.principal.identity().then((account) => {
      console.log(account);

      if (account === null) {
        load.dismiss();
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else if (account.authorities[0] == 'ROLE_USER' && account.authorities.length == 1) {

        this.account = account;
        this.myVar = 'assigned';
        this.userType = 'User';
        this.userId = account.id;
        this.captainId = 0;
        load.dismiss();
        this.getUserOrders(this.myVar);



      }else if(account.authorities[0] == 'ROLE_CAPTAIN'){

        this.account = account;
        this.myVar = 'assigned';
        this.userType = 'Captain';
        this.userId = 0;

        this.captainService.getByUserId(account.id).subscribe(
          data => {
            
            
            this.captain = data;
            this.captainId = data.id;
            console.log(data , this.captain);

            load.dismiss();
            this.getUserOrders(this.myVar);
          } ,
        err =>{
          console.log(err , 'errrrror');;
          
        })       

      }
      
      else {
        this.account = account;
        this.myVar = 'assigned';
        this.userType = 'Admin';
        this.userId = 0;
        this.captainId = 0;
        load.dismiss();
        this.getUserOrders(this.myVar);

      }
    }).catch((err) => {
      load.dismiss();
    });
  }

  getAllOrders(status) {
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.myVar = status;
    this.ordersList = [];
    this.orderService.getAllByStatus(status, this.userId , true).subscribe(res => {
      console.log(res);


      this.ordersList = res;

      load.dismiss()

    }, err => {
      console.log(err);

      load.dismiss()
    })
  }

  getUserOrders(status){
    this.myVar = status;

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.ordersList = [];

    this.orderService.getUserOrders(this.userId , this.captainId , status).subscribe(res => {
      console.log(res);


      this.ordersList = res;

      load.dismiss()

    }, err => {
      console.log(err);

      load.dismiss()
    })

  }

  add() {
    this.navCtrl.setRoot(ChooseAddressPage);

  }
  viewOrder(orders) {
    let items = [];

    let flag = true;

    while (flag) {

      let index = orders.indexOf('-');
     // console.log(index, 'vvvv');

      if (index != -1) {

        // for (let index = 0; index < orders.length; index++) {  
        // console.log(orders, orders.length, 'sssssssssssss');
        // console.log(index, 'index');


        // console.log(orders.charAt(index));
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
   // console.log(items);

    let subOrder1 = {
      name: orders,
      index: items.length + 1
    }

    items.push(subOrder1)

    //console.log(items, 'mmmmmmmmmmmmmmm');

    return items;
  }

  assingCaptain(order) {
    this.navCtrl.setRoot('AssignOrderPage', { item: order })
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

        load.dismiss();
        this.getUserOrders(this.myVar);

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserOrdersPage');
  }
  viewLocation(order){
    this.navCtrl.setRoot('OrdersMapPage', { item: order })
  }

}
