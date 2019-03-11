import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List, ToastController, App, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { CaptainsPage } from '../captains/captains';
import { OrderService } from '../../providers/auth/order.service';
import { OrdersPage } from '../orders/orders';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { UserOrdersPage } from '../user-orders/user-orders';

/**
 * Generated class for the AddOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-order',
  templateUrl: 'add-order.html',
})
export class AddOrderPage {

  public account = null;

  public formsValid = false;

  myForm: FormGroup;
  userList = [];
  // public forms = [];
  public orderString = '';
  public ordersArray = [];

  // public cities = [
  //   {
  //     name:"dddd",
  //     id:1
  //   },
  //   {
  //     name:"hhh",
  //     id:2
  //   }
  // ]

  public order: { userId: number, orders: Array<string> } = {
    userId: null,
    orders: ['']
  }
  public addORDERError;
  public addORDERSuccessString;
  public alex = 'Alexandria';
  public pleaseWait;
  public userType;
  address = null;
  


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController
    , public translateService: TranslateService,private loading: LoadingController,
    private builder: FormBuilder, public user: User, private app: App, private principal: Principal, public orderService: OrderService) {

    console.log('con');
    this.address = this.navParams.get("address");


    this.translateService.get(['ADD_ORDER_ERROR', 'ADD_ORDER_SUCCESS', 'ALEX','PLEASE_WAIT']).subscribe((values) => {
      console.log(values);

      this.addORDERError = values.ADD_ORDER_ERROR;
      this.addORDERSuccessString = values.ADD_ORDER_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
      //this.alex = values.ALEX;
    })


    this.myForm = builder.group({
      //'userId':['', [Validators.required ]],
      'name': ['', []],
      'phone': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      'secondPhone': ['', [Validators.pattern("(01)[0-9]{9}")]],
      'address1': ['', []],
      'address2': ['', []],
      'city': ["'Alexandria'", []],
      "order": ['', [Validators.required, Validators.maxLength(45)]],
      "fromAddress":['',[]]
    });





    // let form = builder.group({
    //   "order":['',[Validators.required , Validators.maxLength(45)]]
    // });
    // this.forms.push(form);

    //this.getAllUsers();
  }


  ngOnInit() {

    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()

    this.principal.identity().then((account) => {
      console.log(account);
      load.dismiss();
      if (account === null || (account.authorities[0] != 'ROLE_AGENCY' && account.authorities[0] != 'ROLE_USER')) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else if(account.authorities[0] == 'ROLE_AGENCY') {

        this.userType = "Agency";
        this.account = account;
        this.myForm.get("address1").clearValidators();
        this.myForm.get("address1").setValidators([Validators.required, Validators.maxLength(100)]);
        this.myForm.get("address1").updateValueAndValidity();

        this.myForm.get("address2").clearValidators();
        this.myForm.get("address2").setValidators([Validators.maxLength(100)]);
        this.myForm.get("address2").updateValueAndValidity();
        
        this.myForm.get("name").clearValidators();
        this.myForm.get("name").setValidators([Validators.required, Validators.maxLength(45)]);
        this.myForm.get("name").updateValueAndValidity();

        this.myForm.get("city").clearValidators();
        this.myForm.get("city").setValidators([Validators.required]);
        this.myForm.get("city").updateValueAndValidity();

      }else if(account.authorities[0] == 'ROLE_USER') {
        this.myForm.get("fromAddress").clearValidators();
        this.myForm.get("fromAddress").setValidators([Validators.required, Validators.maxLength(100)]);
       
        this.myForm.get("fromAddress").updateValueAndValidity();

        this.userType = "User";
        this.account = account;

      }
    }).catch((err)=>{
      load.dismiss();
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddOrderPage');
  }
  getAllUsers() {
    this.user.findAll().subscribe(
      res => {

        console.log(res, "res");
        this.userList = res;


      }, err => {

        console.log(err, "err");


      }
    )

  }
  add() {
    // this.order.orders.push('');
    // let form = this.builder.group({
    //   "order":['',[Validators.required , Validators.maxLength(45)]]
    // });
    // this.forms.push(form);
    // this.change();

    this.orderString += this.myForm.get('order').value;
    this.orderString += ' - ';
    let subOrder = {
      name: this.myForm.get('order').value,
      index: this.ordersArray.length + 1
    }
    this.ordersArray.push(subOrder);
    this.myForm.get('order').setValue('');
    this.myForm.get('order').clearValidators();
    this.myForm.get('order').clearAsyncValidators();
    this.myForm.get('order').updateValueAndValidity();

  }
  addOrder() {

    //let orderValue = '';
    // this.forms.forEach(element => {

    //   let value = element.get('order').value + " - ";

    //   orderValue +=  value;

    // });
    
    //orderValue = this.o


    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()



    if (this.myForm.get('order').value.length > 0) {

      this.orderString += this.myForm.get('order').value
    }else{
      this.orderString = this.orderString.substring(0 , this.orderString.length - 2);
    }

    let orderObject = {
      //userId : this.myForm.get('userId').value,
      orders: this.orderString,
      name: this.myForm.get("name").value,
      firstPhone: this.myForm.get("phone").value,
      secondPhone: this.myForm.get("secondPhone").value,
      city: this.myForm.get("city").value,
      address: this.myForm.get("address1").value,
      secondAddress: this.myForm.get("address2").value,
      status: 'not assigned',
      captainId: 0,
      agencyId: this.account.id,
      userId: 0,
      fromAddress:null,
      isUserOrder:false ,
      addressId:0 

    }
    if(this.userType == 'User'){
      orderObject.userId = this.account.id;
      orderObject.fromAddress = this.myForm.get('fromAddress').value;
      orderObject.isUserOrder = true;
      orderObject.addressId = this.address.id;
      orderObject.name = this.account.firstName + ' '+this.account.lastName

    }

    console.log(orderObject, 'ssssssssssss');


    this.orderService.save(orderObject).subscribe((res) => {
      console.log(res, 'res');

      let obj = res;

      let toast = this.toastCtrl.create({
        message: this.addORDERSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      load.dismiss();
      if(this.userType == 'User'){
        this.app.getRootNavs()[0].setRoot(UserOrdersPage);
      }else{
      this.navCtrl.push('AssignOrderPage', { item: obj })
      }
    }, (err) => {
      console.log('error', err);

      // Unable to add address
      // const error = JSON.parse(err.error);
      let displayError = this.addORDERError;

      let toast = this.toastCtrl.create({
        message: displayError,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
      load.dismiss();
    });



  }

  change() {

    // let valid = true;

    // this.forms.forEach(element =>{
    //   if(!element.valid){
    //     valid = false;
    //   }
    // })
    // this.formsValid = valid;

  }
  hasError(field: string, error: string, form) {

    const ctrl = form.get(field);
    return ctrl.dirty && ctrl.hasError(error);

  }
  check(item) {
    console.log(item, this.myForm.get("city").value, 'ssssssss');

    let flag = false;

    if (item == this.myForm.get("city").value) {
      console.log('************');

      flag = true;
    }
    console.log(flag);

    return flag;
  }

  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }


}
