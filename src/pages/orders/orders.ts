import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController, LoadingController } from 'ionic-angular';
import { AddOrderPage } from '../add-order/add-order';
import { OrderService } from '../../providers/auth/order.service';
import { Principal } from '../../providers/auth/principal.service';
import { FirstRunPage } from '../pages';
import { TranslateService } from '@ngx-translate/core';

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

  public account = null;
  public myVar = '';

  public ordersList = [];

  public pleaseWait;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loading: LoadingController ,public translateService: TranslateService,  private app: App, private principal: Principal, public orderService: OrderService) {
    
    this.translateService.get(['PLEASE_WAIT']).subscribe((values) => {
      
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
      load.dismiss();
      
      if (account === null  ) {
         this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else if(account.authorities[0] == 'ROLE_AGENCY'){

        this.account = account;    
        this.myVar = 'assigned';
        this.getAllOrders(this.myVar);   
        
      }
    }).catch((err) =>{
      load.dismiss();
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }
  getAllOrders(status) {
    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()

    this.myVar = status;
    this.ordersList = [];
    this.orderService.getAllByStatus(status , this.account.id).subscribe(res => {
      console.log(res);


      this.ordersList = res;

      load.dismiss()

    }, err => {
      console.log(err);

      load.dismiss()
    })
  }

  add() {
    this.navCtrl.push(AddOrderPage);

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
            name : orders.substring(0, index - 1),
            index : items.length + 1
          }
          items.push(subOrder);
          orders = orders.substring(index+1 , orders.length)
        }

        //}
      } else {
        flag = false;
      }
    }
    console.log(items);

    let subOrder1 = {
      name : orders,
      index : items.length + 1
    }
    
    items.push(subOrder1)
    
    console.log(items, 'mmmmmmmmmmmmmmm');

    return items;
  }

  assingCaptain(order){
    this.navCtrl.push('AssignOrderPage',{item:order})
  }

  // openMenu(){
  //   this.menu.open("authenticated");
  //  }

}
