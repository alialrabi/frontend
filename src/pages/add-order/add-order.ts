import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List, ToastController, App } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { CaptainsPage } from '../captains/captains';
import { OrderService } from '../../providers/auth/order.service';
import { OrdersPage } from '../orders/orders';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';

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

  public order : {userId : number , orders : Array<string> } = {
    userId:null,
    orders:['']
  }
  public addORDERError;
  public addORDERSuccessString;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController
      ,  public translateService: TranslateService , 
       private builder: FormBuilder , public user:User ,  private app: App, private principal: Principal , public orderService : OrderService) {

    this.translateService.get(['ADD_ORDER_ERROR', 'ADD_ORDER_SUCCESS']).subscribe((values) => {
      this.addORDERError = values.SIGNUP_ERROR;
      this.addORDERSuccessString = values.SIGNUP_SUCCESS;
    })


    this.myForm = builder.group({
      //'userId':['', [Validators.required ]],
      'name': ['', [Validators.required , Validators.maxLength(45)]],
      'phone':['', [Validators.required , Validators.pattern("(01)[0-9]{9}")]],
      'secondPhone':['', [ Validators.pattern("(01)[0-9]{9}")]],
      'address': ['', [Validators.required , Validators.maxLength(100)]],
      "order":['',[Validators.required , Validators.maxLength(45)]]
    });

    // let form = builder.group({
    //   "order":['',[Validators.required , Validators.maxLength(45)]]
    // });
    // this.forms.push(form);

    //this.getAllUsers();
  }


  ngOnInit() {
    this.principal.identity().then((account) => {
      console.log(account);
      
      if (account === null || account.authorities[0] != 'ROLE_AGENCY') {
         this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {

        this.account = account;
        
      }
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddOrderPage');
  }
  getAllUsers(){
    this.user.findAll().subscribe(
      res =>{

        console.log(res , "res");
        this.userList = res;
        

      }, err =>{

        console.log(err , "err");
        

      }
    )

  }
  add(){
    // this.order.orders.push('');
    // let form = this.builder.group({
    //   "order":['',[Validators.required , Validators.maxLength(45)]]
    // });
    // this.forms.push(form);
    // this.change();

    this.orderString += this.myForm.get('order').value;
    this.orderString += ' - ';
    this.ordersArray.push(this.myForm.get('order').value);
    this.myForm.get('order').setValue('');

  }
  addOrder(){

    //let orderValue = '';
    // this.forms.forEach(element => {
      
    //   let value = element.get('order').value + " - ";

    //   orderValue +=  value;

    // });
    //orderValue = this.o

    this.orderString += this.myForm.get('order').value

    let orderObject = {
      //userId : this.myForm.get('userId').value,
      orders : this.orderString ,
      name : this.myForm.get("name").value,
      firstPhone :  this.myForm.get("phone").value,
      secondPhone : this.myForm.get("secondPhone").value,
      address : this.myForm.get("address").value,
      status : 'not assigned',
      captainId : 0 ,
      agencyId : this.account.id

    }

    console.log(orderObject , 'ssssssssssss');


    this.orderService.save(orderObject).subscribe((res) => {
      console.log(res , 'res');

      let obj = res;
      
      let toast = this.toastCtrl.create({
        message: this.addORDERSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.navCtrl.push('AssignOrderPage',{item:obj})
    }, (err) => {
      console.log('error' , err);
      
      // Unable to add address
      // const error = JSON.parse(err.error);
      let displayError = this.addORDERError;
      
      let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'middle'
      });
      toast.present();
    });
    
    

  }

  change(){

    // let valid = true;

    // this.forms.forEach(element =>{
    //   if(!element.valid){
    //     valid = false;
    //   }
    // })
    // this.formsValid = valid;

  }
  hasError(field: string, error: string , form) {
    
    const ctrl = form.get(field);
    return ctrl.dirty && ctrl.hasError(error);

  }
 

}
