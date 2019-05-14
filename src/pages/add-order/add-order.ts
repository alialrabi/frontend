import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List, ToastController, App, LoadingController, Platform, ModalController, PopoverController, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { CaptainsPage } from '../captains/captains';
import { OrderService } from '../../providers/auth/order.service';
import { OrdersPage } from '../orders/orders';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { UserOrdersPage } from '../user-orders/user-orders';
import { MyApp } from '../../app/app.component';
import { AddOrderPopoverComponent } from '../../components/add-order-popover/add-order-popover';
import { WindowRef } from '../../providers/settings/windowRef';
import { PhoneVerificationPage } from '../phone-verification/phone-verification';

//import { Printer, PrintOptions } from '@ionic-native/printer';


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
  language = MyApp.language
  direction = MyApp.direction

  alexValue = ''
  cairoValue = ''
  tantaValue = ''
  shibinValue = ''
  daminhoorValue = ''
  banhaValue = ''

  yes='';
  cancel='';
  phoneTitle='';
  phoneMessage='';
  question;

  order1 = {
    name: '',
    address: '',
    secondAddress: '',
    firstPhone: '',
    secondPhone: ''
  }

  print = false;

  platfromType = 'cordova';

  isCordova = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public poverCtrl: PopoverController, public modalController: ModalController, public toastCtrl: ToastController
    , public translateService: TranslateService, private loading: LoadingController, public platform: Platform,public _alert: AlertController,
    private builder: FormBuilder, public windowRef:WindowRef  ,public user: User, private app: App, private principal: Principal, public orderService: OrderService) {

    console.log('con');
    this.address = this.navParams.get("address");

    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.isCordova = true;
    }

    if(this.platform.is('cordova')){
      this.platfromType = 'cordova'
    }else{
      this.platfromType = 'not-cordova'
    }


    this.translateService.get(['ADD_ORDER_ERROR', 'ADD_ORDER_SUCCESS', 'ALEX', 'CAIRO', 'TANTA', 'DAMNHOR', 'SHIPIN_ELKOM', 'BANHA', 'PLEASE_WAIT' , 'YES' ,
    'CANCEL' , 'VERIFY_PHONE_TILTLE' , 'VERIFY_PHONE_MESSAGE' , 'QUESTION_MARK' ]).subscribe((values) => {
      console.log(values);

      this.addORDERError = values.ADD_ORDER_ERROR;
      this.addORDERSuccessString = values.ADD_ORDER_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
      this.alexValue = values.ALEX;
      this.cairoValue = values.CAIRO;
      this.daminhoorValue = values.DAMNHOR;
      this.tantaValue = values.TANTA;
      this.shibinValue = values.SHIPIN_ELKOM;
      this.banhaValue = values.BANHA;
      this.yes = values.YES
      this.cancel = values.CANCEL
      this.phoneTitle = values.VERIFY_PHONE_TILTLE
      this.phoneMessage = values.VERIFY_PHONE_MESSAGE
      this.question = values.QUESTION_MARK
    })


    this.myForm = builder.group({
      //'userId':['', [Validators.required ]],
      'name': ['', []],
      'phone': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      'secondPhone': ['', [Validators.pattern("(01)[0-9]{9}")]],
      'address1': ['', []],
      'address2': ['', []],
      'city': ["'Alexandria'", []],
      //"order": ['', [Validators.required, Validators.maxLength(45)]],
      "fromAddress": ['', []]
    });

    this.myForm.get('city').setValue('Alexandria');
    this.myForm.get('city').updateValueAndValidity();
    this.myForm.get('city').markAsDirty();
    this.myForm.get('city').markAsTouched();
    this.myForm.get('city').markAsPristine();
    console.log(this.myForm.get('city').dirty);


    this.platform.registerBackButtonAction(() => {
      if (this.userType == 'User') {
        this.navCtrl.setRoot(UserOrdersPage);
      } else {
        this.navCtrl.setRoot(OrdersPage);
      }
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
      } else if (account.authorities[0] == 'ROLE_AGENCY') {

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

      } else if (account.authorities[0] == 'ROLE_USER') {
        this.myForm.get("fromAddress").clearValidators();
        this.myForm.get("fromAddress").setValidators([Validators.required, Validators.maxLength(100)]);

        this.myForm.get("fromAddress").updateValueAndValidity();

        this.userType = "User";
        this.account = account;

      }
    }).catch((err) => {
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
  async add(event) {
    // this.order.orders.push('');
    // let form = this.builder.group({
    //   "order":['',[Validators.required , Validators.maxLength(45)]]
    // });
    // this.forms.push(form);
    // this.change();

    const modal = await this.poverCtrl.create(AddOrderPopoverComponent);

    modal.onDidDismiss((dataReturned) => {
      if (dataReturned !== null) {
        console.log('Modal Sent Data :', dataReturned);

        this.orderString += dataReturned.name;
        this.orderString += ' - ';

        this.ordersArray.push(dataReturned);
      }
    });

    let ev = {
      target : {
        getBoundingClientRect : () => {
          return {
            top: 100
          };
        }
      }
    };

    return await modal.present({
      ev
    });



    // this.orderString += this.myForm.get('order').value;
    // this.orderString += ' - ';
    // let subOrder = {
    //   name: this.myForm.get('order').value,
    //   price: this.ordersArray.length + 1
    // }
    // this.ordersArray.push(subOrder);
    // this.myForm.get('order').setValue('');
    // this.myForm.get('order').clearValidators();
    // this.myForm.get('order').clearAsyncValidators();
    // this.myForm.get('order').updateValueAndValidity();

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

    let orderObject = {
      //userId : this.myForm.get('userId').value,
      orders: this.orderString,
      name: this.myForm.get("name").value,
      firstPhone: this.myForm.get("phone").value,
      secondPhone: this.myForm.get("secondPhone").value,
      city: this.getCity(this.myForm.get("city").value),
      address: this.myForm.get("address1").value,
      secondAddress: this.myForm.get("address2").value,
      status: 'not assigned',
      captainId: 0,
      agencyId: this.account.id,
      userId: 0,
      fromAddress: null,
      isUserOrder: false,
      addressId: 0,
      subOrders: this.ordersArray
    }
    this.order1.address = this.myForm.get("address1").value;
    this.order1.firstPhone = orderObject.firstPhone;
    this.order1.name = orderObject.name;
    this.order1.secondAddress = orderObject.secondAddress;
    this.order1.secondPhone = orderObject.secondPhone;

    if (this.userType == 'User') {

      console.log("userrr");
      

      orderObject.userId = this.account.id;
      orderObject.fromAddress = this.myForm.get('fromAddress').value;
      orderObject.isUserOrder = true;
      orderObject.addressId = this.address.id;
      orderObject.agencyId = 0
      orderObject.name = this.account.firstName + ' ' + this.account.lastName

      load.dismiss();

      let alert = this._alert.create({
        title: this.phoneTitle,
        message: this.phoneMessage + ' '+orderObject.firstPhone+' '+this.question,
        buttons: [
          {
            text: this.yes,
            handler: () => {
            this.verifyPhone(orderObject);
            }
          },
          {
            text: this.cancel,
            handler: () => {
              
            }
          }
        ]
      });
      alert.present();



    }else{

    console.log(orderObject, 'ssssssssssss');

    this.orderService.save(orderObject).subscribe((res) => {
      console.log(res, 'res');

      let obj = res;
      load.dismiss();
      if (this.userType != 'User' && !this.platform.is("cordova")) {
        this.print = true;
        setTimeout(() => {
          this.printCheck(obj, this.print);
        }, 700);
      } else {
        if (this.userType == 'User') {
          this.app.getRootNavs()[0].setRoot(UserOrdersPage);
        } else {
          this.navCtrl.setRoot('AssignOrderPage', { item: obj })
        }
      }



      // let toast = this.toastCtrl.create({
      //   message: this.addORDERSuccessString,
      //   duration: 3000,
      //   position: 'top'
      // });
      // toast.present();





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


  }
  printCheck(obj, print) {
    // if (print) {
    //   if (this.platform.is("cordova")) {
    //     this.printer.isAvailable().then(onSuccess => {

    //       console.log(onSuccess, "success");
    //       this.print = true;
    //       var dev = document.getElementById("print");

    //       let options: PrintOptions = {
    //         name: 'MyDocument',
    //         printerId: 'printer007',
    //         duplex: true,
    //         landscape: true,
    //         grayscale: true
    //       }

    //       this.printer.print(dev, options).then(onSuccess2 => {
    //         console.log("success", onSuccess2);

    //         if (this.userType == 'User') {
    //           this.app.getRootNavs()[0].setRoot(UserOrdersPage);
    //         } else {
    //           this.navCtrl.setRoot('AssignOrderPage', { item: obj })
    //         }


    //       }, err2 => {
    //         console.log(err2, '11111111111111111111');
    //         if (this.userType == 'User') {
    //           this.app.getRootNavs()[0].setRoot(UserOrdersPage);
    //         } else {
    //           this.navCtrl.setRoot('AssignOrderPage', { item: obj })
    //         }

    //       })
    //     }, err => {
    //       console.log(err, '22222222222222222222222');
    //       if (this.userType == 'User') {
    //         this.app.getRootNavs()[0].setRoot(UserOrdersPage);
    //       } else {
    //         this.navCtrl.setRoot('AssignOrderPage', { item: obj })
    //       }

    //     })
    //   } else {

    // console.log(this.print);

    // console.log("not cordova");


    this.windowRef.nativeWindow.print()

    if (this.userType == 'User') {
      this.app.getRootNavs()[0].setRoot(UserOrdersPage);
    } else {
      this.navCtrl.setRoot('AssignOrderPage', { item: obj })
    }

    //   }
    // } else {
    //   this.print = true;
    //   this.printCheck(obj, this.print);
    // }
  }
  addOrderWithOutPrint(){

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    let orderObject = {
      //userId : this.myForm.get('userId').value,
      orders: this.orderString,
      name: this.myForm.get("name").value,
      firstPhone: this.myForm.get("phone").value,
      secondPhone: this.myForm.get("secondPhone").value,
      city: this.getCity(this.myForm.get("city").value),
      address: this.myForm.get("address1").value,
      secondAddress: this.myForm.get("address2").value,
      status: 'not assigned',
      captainId: 0,
      agencyId: this.account.id,
      userId: 0,
      fromAddress: null,
      isUserOrder: false,
      addressId: 0,
      subOrders: this.ordersArray
    }
    this.order1.address = this.myForm.get("address1").value;
    this.order1.firstPhone = orderObject.firstPhone;
    this.order1.name = orderObject.name;
    this.order1.secondAddress = orderObject.secondAddress;
    this.order1.secondPhone = orderObject.secondPhone;

    if (this.userType == 'User') {
      orderObject.userId = this.account.id;
      orderObject.fromAddress = this.myForm.get('fromAddress').value;
      orderObject.isUserOrder = true;
      orderObject.addressId = this.address.id;
      orderObject.agencyId = 0
      orderObject.name = this.account.firstName + ' ' + this.account.lastName

      load.dismiss();

      let alert = this._alert.create({
        title: this.phoneTitle,
        message: this.phoneMessage + ' '+orderObject.firstPhone+' '+this.question,
        buttons: [
          {
            text: this.yes,
            handler: () => {
            this.verifyPhone(orderObject);
            }
          },
          {
            text: this.cancel,
            handler: () => {
              
            }
          }
        ]
      });
      alert.present();



    }else{


    console.log(orderObject, 'ssssssssssss');

    this.orderService.save(orderObject).subscribe((res) => {
      console.log(res, 'res');

      let obj = res;
      load.dismiss();
      


      let toast = this.toastCtrl.create({
        message: this.addORDERSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();

      if (this.userType == 'User') {
        this.app.getRootNavs()[0].setRoot(UserOrdersPage);
      } else {
        this.navCtrl.setRoot('AssignOrderPage', { item: obj })
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

  getCity(cityValue) {
    console.log(cityValue, 'ssssssssssss');


    let city = ''
    if (cityValue == 'Alexandria') {
      city = this.alexValue;

    } else if (cityValue == 'Cairo') {
      city = this.cairoValue;

    } else if (cityValue == 'Tanta') {
      city = this.tantaValue;

    } else if (cityValue == 'Damnhor') {
      city = this.daminhoorValue;

    } else if (cityValue == 'Shibin Elkom') {
      city = this.shibinValue;

    } else if (cityValue == 'Banha') {
      city = this.banhaValue;

    }
    return city;

  }

  back() {
    if (this.userType == 'User') {
      this.navCtrl.setRoot(UserOrdersPage);
    } else {
      this.navCtrl.setRoot(OrdersPage);
    }

  }
  getTotal() {
    let total = 10.0;
    this.ordersArray.forEach(element => {
      total += Number.parseFloat(element.price)
    })
    return total;
  }
  verifyPhone(orderObject){
    this.navCtrl.setRoot(PhoneVerificationPage , {order:orderObject})
  }
}
