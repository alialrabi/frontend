import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddOrderPage } from '../add-order/add-order';
import { OrderService } from '../../providers/auth/order.service';

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

  public myVar = '';

  public ordersList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderService: OrderService) {
    this.myVar = 'assigned';
    this.getAllOrders(this.myVar);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }
  getAllOrders(status) {
    this.myVar = status;
    this.ordersList = [];
    this.orderService.getAllByStatus(status).subscribe(res => {
      console.log(res);


      this.ordersList = res;

    }, err => {
      console.log(err);


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
          items.push(orders.substring(0, index - 1));
          orders = orders.substring(index+1 , orders.length)
        }

        //}
      } else {
        flag = false;
      }
    }
    console.log(items);
    
    items.push(orders)
    console.log(items, 'mmmmmmmmmmmmmmm');

    return items;
  }


}
