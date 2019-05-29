import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController, LoadingController, Platform, ToastController } from 'ionic-angular';
import { AddOrderPage } from '../add-order/add-order';
import { OrderService } from '../../providers/auth/order.service';
import { Principal } from '../../providers/auth/principal.service';
import { FirstRunPage } from '../pages';
import { TranslateService } from '@ngx-translate/core';
import { AddCheckOrderPage } from '../add-check-order/add-check-order';

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  isLoading = false;


  public account = null;
  public myVar = '';

  public ordersList = [];

  public pleaseWait;
  userType = '';
  userId = 0;

  pageNum = 1;
  moreData = 'Loading more data...'
  exitMessage = ''
  counter = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController , public platform:Platform , private loading: LoadingController, public translateService: TranslateService, private app: App, private principal: Principal, public orderService: OrderService) {

    this.myVar = navParams.get("myVar");
    this.translateService.get(['EXIT_MESSAGE', 'PLEASE_WAIT', 'MORE_DATA']).subscribe((values) => {

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

    // let load = this.loading.create({
    //   content: this.pleaseWait


    // })
    // load.present()

    this.principal.identity().then((account) => {
      console.log(account);
//      load.dismiss();

      if (account === null) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else if (account.authorities[0] == 'ROLE_AGENCY') {

        this.account = account;
        if(this.myVar == null || this.myVar == undefined || this.myVar == ''){
        this.myVar = 'assigned';
        }
        this.userType = 'Agency';
        this.userId = account.id;
        this.getAllOrders(this.myVar , 0);


      } else {
        this.account = account;
        if(this.myVar == null || this.myVar == undefined || this.myVar == ''){
        this.myVar = 'assigned';
        }
        this.userType = 'Admin';
        this.userId = 0;
        this.getAllOrders(this.myVar , 0);

      }
    }).catch((err) => {
//      load.dismiss();
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {

      this.getAllOrders(this.myVar, this.pageNum)


      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }

  getAllOrders(status, pageNum) {

    if(pageNum == 0){

    this.myVar = status;
    
    let load = this.loading.create({
        content: this.pleaseWait


      })
      load.present()
      this.ordersList = [];
      this.pageNum = 1;
    

    this.orderService.getAllByStatus(status, this.userId, false, pageNum).subscribe(res => {
      console.log(res);

        this.ordersList = res;
        load.dismiss();
     
    }, err => {
      console.log(err);
        load.dismiss();
      
    })

    }else{

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

    this.orderService.getAllByStatus(status, this.userId, false, pageNum).subscribe(res => {
      console.log(res);

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

  add() {
    this.navCtrl.setRoot(AddOrderPage);

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
  addCheck(){
    this.navCtrl.setRoot(AddCheckOrderPage);
  }

  assingCaptain(order) {
    this.navCtrl.setRoot('AssignOrderPage', { item: order , myVar:this.myVar })
  }

  // openMenu(){
  //   this.menu.open("authenticated");
  //  }

}
