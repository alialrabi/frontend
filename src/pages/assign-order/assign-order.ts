import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App, LoadingController } from 'ionic-angular';
import { CaptainService } from '../../providers/auth/captain.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { OrderService } from '../../providers/auth/order.service';
import { OrdersPage } from '../orders/orders';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';

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
  public pleaseWait;

  public order;

  public account = null;

  constructor(public navCtrl: NavController, public navParams: NavParams ,
    private builder: FormBuilder , public captainService:CaptainService  ,private loading: LoadingController , private app: App, private principal: Principal, public toastCtrl: ToastController , public translateService: TranslateService , public orderService:OrderService ) {

      this.order = this.navParams.get("item");

    this.translateService.get(['ASSIGN_ORDER_ERROR', 'ASSIGN_ORDER_SUCCESS' , 'PLEASE_WAIT']).subscribe((values) => {
      this.assignOrderError = values.ASSIGN_ORDER_ERROR;
      this.assingOrderSuccess = values.ASSIGN_ORDER_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
    })


    this.myForm = builder.group({
      //'userId':['', [Validators.required ]],
      'captainId': ['', [Validators.required ]],
      
    });

    //this.getAllCaptains();
  }

  ngOnInit() {

    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()

    this.principal.identity().then((account) => {
      console.log(account);
      this.account = account;
      load.dismiss()
      
      if (account === null ) {
         this.app.getRootNavs()[0].setRoot(FirstRunPage);
      }else {
        this.getAllCaptains();
      }
       
        
      
    }).catch((err)=>{
      load.dismiss();
    });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignOrderPage');
  }

  getAllCaptains(){
    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()
    this.captainService.getByAgencyId(this.account.id).subscribe(
      res =>{

        console.log(res , "res");
        this.captainList = res;
        load.dismiss();

      }, err =>{

        console.log(err , "err");
        load.dismiss();
        

      }
    )

  }
  assignOrder(){

    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()

    this.orderService.assign(this.myForm.get('captainId').value , this.order.id).subscribe(
      res =>{
        let toast = this.toastCtrl.create({
          message: this.assingOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        load.dismiss();
        //this.navCtrl.push(OrdersPage);
        this.app.getRootNavs()[0].setRoot(OrdersPage);

      }, err =>{
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
  assignOrderToFreeCaptain(){
    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()

    this.orderService.assignToFreeCaptain(this.order.id).subscribe(
      res =>{
        let toast = this.toastCtrl.create({
          message: this.assingOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        load.dismiss();
       // this.navCtrl.push(OrdersPage);
        this.app.getRootNavs()[0].setRoot(OrdersPage);

      }, err =>{
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
  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
  
  skip(){
    //this.navCtrl.push(OrdersPage);
    this.app.getRootNavs()[0].setRoot(OrdersPage);
  }
}
