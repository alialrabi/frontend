import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ToastController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserOrderService } from '../../providers/auth/userOrders.service';
import { UserOrderDetailPage } from '../user-order-detail/user-order-detail';
import { UserOrdersPage } from '../user-orders/user-orders';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the EditRatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-rating',
  templateUrl: 'edit-rating.html',
})
export class EditRatingPage {

  editOrder = {
    orderId :0,
    rating:0,
    ratingComment:''
  }

  language = MyApp.language
  direction = MyApp.direction

  rating = 0
  ratingComment = ''

  myForm: FormGroup;

  private editRatingEroor: string;
  private editRatingSuccess: string;
  
  userDetailIemParam;
  userDetailUserTypeParam;
  order
  from

  pleaseWait
  

  constructor(public navCtrl: NavController, public navParams: NavParams , private builder: FormBuilder
     , private translateService:TranslateService,
     private userOrderService:UserOrderService , private loading: LoadingController,  private platform: Platform, public toastCtrl: ToastController) {
  
      this.order = this.navParams.get("item");
      this.from = this.navParams.get("from");
        this.userDetailIemParam = this.navParams.get('order')
        this.userDetailUserTypeParam = this.navParams.get('userType')

        this.editOrder.orderId = this.order.id
        this.editOrder.rating = this.order.rating
        this.editOrder.ratingComment = this.order.ratingComment
        this.rating = this.order.rating
        this.ratingComment = this.order.ratingComment

        this.platform.registerBackButtonAction(() => {
          if(this.from == 'UserOrderDetailPage'){
            this.navCtrl.setRoot(UserOrderDetailPage , {item:this.userDetailIemParam , userType:this.userDetailUserTypeParam});
          }else{
          this.navCtrl.setRoot(UserOrdersPage);
          }
        })  
        
        this.translateService.get(['PLEASE_WAIT', 'EDIT_RATING_ERROR' , 'EDIT_RATING_SUCCESS' ]).subscribe((values) => {
         
          this.pleaseWait = values.PLEASE_WAIT
          this.editRatingEroor = values.EDIT_RATING_ERROR
          this.editRatingSuccess = values.EDIT_RATING_SUCCESS
          
        })
    
        this.myForm = builder.group({
          'ratingComment': ['', [ Validators.maxLength(45)]],
          
        });

      
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRatingPage');
  }
  back(){
    if(this.from == 'UserOrderDetailPage'){
      this.navCtrl.setRoot(UserOrderDetailPage , {item:this.userDetailIemParam , userType:this.userDetailUserTypeParam});
    }else{
    this.navCtrl.setRoot(UserOrdersPage);
    }
  }

  changeRating(rate){
    this.editOrder.rating = rate;

  }
  valuesChanges(){
    if(this.rating != this.editOrder.rating || this.ratingComment != this.editOrder.ratingComment){
      return true;
    }else{
      return false;
    }
  }
  editRating(){
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.userOrderService.editRating(this.editOrder).subscribe(
      res =>{
        load.dismiss()

        let toast = this.toastCtrl.create({
          message: this.editRatingSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();

        if(this.from == 'UserOrderDetailPage'){
          this.userDetailIemParam.userOrder.rating = this.editOrder.rating
          this.userDetailIemParam.userOrder.ratingComment = this.editOrder.ratingComment
          this.navCtrl.setRoot(UserOrderDetailPage , {item:this.userDetailIemParam , userType:this.userDetailUserTypeParam});
        }else{
        this.navCtrl.setRoot(UserOrdersPage);
        }

      },err =>{

        let toast = this.toastCtrl.create({
          message: this.editRatingEroor,
          duration: 3000,
          position: 'middle'
        });
        toast.present();

        load.dismiss();
        console.log("errrrrrrrrror" , err);
        

      }
    )
  }
  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }

}
