import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CaptainService } from '../../providers/auth/captain.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { OrderService } from '../../providers/auth/order.service';
import { OrdersPage } from '../orders/orders';

/**
 * Generated class for the AssignOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assign-order',
  templateUrl: 'assign-order.html',
})
export class AssignOrderPage {

  public captainList = [];
  myForm: FormGroup;

  assingOrderSuccess = null;
  assignOrderError = null;

  public order;

  constructor(public navCtrl: NavController, public navParams: NavParams ,
    private builder: FormBuilder , public captainService:CaptainService , public toastCtrl: ToastController , public translateService: TranslateService , public orderService:OrderService ) {

      this.order = this.navParams.get("item");

    this.translateService.get(['ASSIGN_ORDER_ERROR', 'ASSIGN_ORDER_SUCCESS']).subscribe((values) => {
      this.assignOrderError = values.ASSIGN_ORDER_ERROR;
      this.assingOrderSuccess = values.ASSIGN_ORDER_SUCCESS;
    })


    this.myForm = builder.group({
      //'userId':['', [Validators.required ]],
      'captainId': ['', [Validators.required ]],
      
    });

    this.getAllCaptains();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignOrderPage');
  }

  getAllCaptains(){
    this.captainService.getAll().subscribe(
      res =>{

        console.log(res , "res");
        this.captainList = res;
        

      }, err =>{

        console.log(err , "err");
        

      }
    )

  }
  assignOrder(){

    this.orderService.assign(this.myForm.get('captainId').value , this.order.id).subscribe(
      res =>{
        let toast = this.toastCtrl.create({
          message: this.assingOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        this.navCtrl.push(OrdersPage);

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
  assignOrderToFreeCaptain(){

    this.orderService.assignToFreeCaptain(this.order.id).subscribe(
      res =>{
        let toast = this.toastCtrl.create({
          message: this.assingOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        this.navCtrl.push(OrdersPage);

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
  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
}
