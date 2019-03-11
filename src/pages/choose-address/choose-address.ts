import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { TranslateService } from '@ngx-translate/core';
import { OrderService } from '../../providers/auth/order.service';
import { AddressService } from '../../providers/auth/address.service';
import { AddOrderPage } from '../add-order/add-order';
import { AddAddressPage } from '../add-address/add-address';

/**
 * Generated class for the ChooseAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-address',
  templateUrl: 'choose-address.html',
})
export class ChooseAddressPage {

  public addressList = [];
  myForm: FormGroup;
  public pleaseWait;

  public account = null;
  userType = ''

  value = null

  constructor(public navCtrl: NavController, public navParams: NavParams ,
    private builder: FormBuilder  ,private loading: LoadingController, private addressService:AddressService , private app: App, private principal: Principal, public toastCtrl: ToastController , public translateService: TranslateService , public orderService:OrderService ) {

    this.translateService.get([ 'PLEASE_WAIT']).subscribe((values) => {
      
      this.pleaseWait = values.PLEASE_WAIT
    })


    this.myForm = builder.group({
      //'userId':['', [Validators.required ]],
      'address': ['', [Validators.required ]],
      
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
      }else{
        this.account = account;
        this.userType = 'Admin'
        this.getAddresses();

      }
       
        
      
    }).catch((err)=>{
      load.dismiss();
    });
  }
  
  getAddresses(){
    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()
    this.addressList = [];
    this.addressService.getUserAddresses(this.account.id).subscribe(
      res => {
        this.addressList = res;
        load.dismiss();

      }, err =>{
        console.log(err , 'errrrrrrrrror');
        load.dismiss();

      }
    )

  }
  chooseAddress(){
    this.navCtrl.setRoot(AddOrderPage , {address:this.myForm.get("address").value})
  }
  newAddress(){
    this.navCtrl.setRoot(AddAddressPage , {address:"to add order"})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseAddressPage');
  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }

}
