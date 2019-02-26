import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemDivider, ToastController, App } from 'ionic-angular';
import { OrderService } from '../../providers/auth/order.service';
import { TranslateService } from '@ngx-translate/core';
import { Principal } from '../../providers/auth/principal.service';
import { FirstRunPage } from '../pages';
import { CaptainService } from '../../providers/auth/captain.service';
import { LoginService } from '../../providers/login/login.service';


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

  public ordersList = [];

  deliverOrderSuccess = null;
  deliverOrderError = null;

  public captain;

  public myVar = null;

  assingOrderSuccess = null;
  assignOrderError = null;


  constructor(public navCtrl: NavController,private loginService:LoginService  ,private captainService:CaptainService ,  private app: App, private principal: Principal, public navParams: NavParams , public orderService:OrderService , public translateService: TranslateService , public toastCtrl: ToastController ) {

   // this.captain = this.navParams.get("item");

    this.translateService.get(['DELIVER_ORDER_ERROR', 'DELIVER_ORDER_SUCCESS' , 'ASSIGN_ORDER_ERROR', 'ASSIGN_ORDER_SUCCESS']).subscribe((values) => {
      this.deliverOrderError = values.DELIVER_ORDER_ERROR;
      this.deliverOrderSuccess = values.DELIVER_ORDER_SUCCESS;
      this.assignOrderError = values.ASSIGN_ORDER_ERROR;
      this.assingOrderSuccess = values.ASSIGN_ORDER_SUCCESS;
    })

  }

  ngOnInit() {
    this.principal.identity().then((account) => {
      console.log(account);
      
      if (account === null || account.authorities[0] != 'ROLE_CAPTAIN') {
         this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {

        this.captainService.getByUserId(account.id).subscribe(
          data =>{
            this.captain = data;

        this.myVar = 'assigned';
        this.getAllOrders(this.myVar);

            
          } , err =>{
            console.log(err , 'errror');
            
          }
        )

      }
    });
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptainOrdersPage');



  }

  getNotAssigned(status) {
    this.ordersList = [];
    console.log("orders");
    console.log(this.captain);
    this.myVar = status;
    
    this.orderService.getAllByStatus(status , this.captain.agencyId).subscribe(res => {
      console.log(res);
      console.log("*************");      

      this.ordersList = res;

    }, err => {
      console.log(err);


    })
  }


  getAllOrders(status) {
    this.ordersList = [];
    console.log("orders");
    this.myVar = status;
    
    this.orderService.getCaptainOrders(this.captain.id , status).subscribe(res => {
      console.log(res);
      console.log("*************");
      


      this.ordersList = res;

    }, err => {
      console.log(err);


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

  finish(item){
    this.orderService.finishOrder(item.id).subscribe(
      res =>{
        let toast = this.toastCtrl.create({
          message: this.deliverOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        console.log("success");
        

      this.getAllOrders(this.myVar);

      }, err =>{
        console.log(err);
        

        let displayError = this.deliverOrderError;
      
      let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'middle'
      });
      toast.present();

      }
    )

  }
  assignOrder(order){
    this.orderService.assign(this.captain.id , order.id).subscribe(
      res =>{
        let toast = this.toastCtrl.create({
          message: this.assingOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        this.getAllOrders(this.myVar);

      }, err =>{
        console.log(err);
        

        let displayError = this.assignOrderError;
      
      let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'middle'
      });
      toast.present();

      }
    )

  }

  logout() {
    this.loginService.logout();
    this.app.getRootNavs()[0].setRoot(FirstRunPage);
  }

}
