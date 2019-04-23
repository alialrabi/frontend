import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, Platform, PopoverController, App } from 'ionic-angular';
import { FirstRunPage } from '../pages';
import { OrderKindPage } from '../order-kind/order-kind';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Device } from '@ionic-native/device';
import { Principal } from '../../providers/auth/principal.service';
import { AddressService } from '../../providers/auth/address.service';
import { UserOrderService } from '../../providers/auth/userOrders.service';
import { TranslateService } from '@ngx-translate/core';
import { MyApp } from '../../app/app.component';
import { UserOrdersPage } from '../user-orders/user-orders';
import { NewAddressComponent } from '../../components/new-address/new-address';
import { AddressesSelectorComponent } from '../../components/addresses-selector/addresses-selector';
import { DeviceTockenService } from '../../providers/auth/deviceToken.service';

import { AdMobFree, AdMobFreeBannerConfig  , AdMobFreeInterstitialConfig} from '@ionic-native/admob-free';


/**
 * Generated class for the DeliverFromToPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deliver-from-to',
  templateUrl: 'deliver-from-to.html',
})
export class DeliverFromToPage {

  myForm: FormGroup;

  order = {
    description: '',
    weight: '',
    senderAddressId: 0,
    senderPhone: '',
    reciverName: '',
    reciverPhone: '',
    reciverAddressId: 0,
    userId: 0,
    isBuing: false

  }
  address = ''
  senderAddress = ''

  public choosePhoto = '';
  public chooseFromGalary = '';
  public takePhoto = '';
  platformType = "cordova";
  browserImage;

  language = MyApp.language
  direction = MyApp.direction

  pleaseWait
  addressList = []
  account;
  otherText = ''

  reciverData = false;

  orderSuccess = '';
  orderError = '';

  towerText = ''
  floorText = ''
  flatText = ''

  constructor(public navCtrl: NavController, public navParams: NavParams, public _alert: AlertController
    , public toastCtrl: ToastController,
    private loading: LoadingController,
    private platform: Platform,
    public principal: Principal,
    public admobFree: AdMobFree,
    public addressService: AddressService,
    public poverCtrl: PopoverController,
    public userOrderService: UserOrderService,
    public deviceTokenService: DeviceTockenService,
    public translateService: TranslateService, private app: App, private builder: FormBuilder) {

    if (platform.is("cordova")) {
      this.platformType = "cordova";
    } else {
      this.platformType = "notCordova"
    }

    this.translateService.get([ 'TOWER' , 'FLOOR' , 'FLAT','ADD_ORDER_ERROR', 'ADD_ORDER_SUCCESS', 'CHOOSE_PHOTO', 'CHOOSE_FROM_GALARY', 'TAKE_A_PHOTO', 'PLEASE_WAIT', 'OTHER']).subscribe((values) => {

      this.orderError = values.ADD_ORDER_ERROR;
      this.orderSuccess = values.ADD_ORDER_SUCCESS;

      this.pleaseWait = values.PLEASE_WAIT
      this.takePhoto = values.TAKE_A_PHOTO
      this.chooseFromGalary = values.CHOOSE_FROM_GALARY

      this.choosePhoto = values.CHOOSE_PHOTO
      this.otherText = values.OTHER
      this.floorText = values.FLOOR
      this.flatText = values.FLAT
      this.towerText = values.TOWER
    })

    this.myForm = builder.group({
      'weight': ['', [Validators.required]],
      'senderAddress': ['', [Validators.required]],
      'senderPhone': ['', [Validators.pattern("(01)[0-9]{9}")]],
      'reciverName': ['', [Validators.required, Validators.maxLength(50)]],
      'address': ['', [Validators.required]],
      'reciverPhone': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      'description': ['', [Validators.required, Validators.maxLength(999)]],
    });

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(OrderKindPage);
    });

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

      if (account === null) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {
        this.account = account;
        this.getAddresses();

      }



    }).catch((err) => {
      load.dismiss();
    });
  }

  getAddresses() {
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.addressList = [];
    this.addressService.getUserAddresses(this.account.id).subscribe(
      res => {
        this.addressList = res;
        load.dismiss();

      }, err => {
        console.log(err, 'errrrrrrrrror');
        load.dismiss();

      }
    )

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliverFromToPage');
  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
  back() {
    this.navCtrl.setRoot(OrderKindPage);

  }

  async openAddressesSelector(event) {
    const modal = await this.poverCtrl.create(AddressesSelectorComponent, { addresses: this.addressList });

    modal.onDidDismiss((dataReturned) => {
      if (dataReturned !== null) {
        console.log('Modal Sent Data :', dataReturned);

        this.address = dataReturned.region + ' , '  +  dataReturned.street + ' , ' + this.towerText + '/' +dataReturned.building + ' , ' + this.floorText + '/' + dataReturned.floor + ' , ' + this.flatText + '/' +  dataReturned.flatNumber + ' , '+ dataReturned.city 
       
        this.order.reciverAddressId = dataReturned.id
      }
    });

    return await modal.present({
      ev: event
    });
  }

  async newAddressModal(event) {
    const modal = await this.poverCtrl.create(NewAddressComponent, { user: this.account });

    modal.onDidDismiss((dataReturned) => {
      if (dataReturned !== null) {
        console.log('Modal Sent Data :', dataReturned);

        this.addressList.push(dataReturned);
        console.log(this.addressList);


        this.address = dataReturned.region + ' , '  +  dataReturned.street + ' , ' + this.towerText + '/' +dataReturned.building + ' , ' + this.floorText + '/' + dataReturned.floor + ' , ' + this.flatText + '/' +  dataReturned.flatNumber + ' , '+ dataReturned.city 
        this.order.reciverAddressId = dataReturned.id
      }
    });

    return await modal.present({
      ev: event
    });
  }
  async openAddressesSelectorSender(event) {
    const modal = await this.poverCtrl.create(AddressesSelectorComponent, { addresses: this.addressList });

    modal.onDidDismiss((dataReturned) => {
      if (dataReturned !== null) {
        console.log('Modal Sent Data :', dataReturned);

        this.senderAddress = dataReturned.region + ' , '  +  dataReturned.street + ' , ' + this.towerText + '/' +dataReturned.building + ' , ' + this.floorText + '/' + dataReturned.floor + ' , ' + this.flatText + '/' +  dataReturned.flatNumber + ' , '+ dataReturned.city
        this.order.senderAddressId = dataReturned.id
      }
    });

    return await modal.present({
      ev: event
    });
  }

  async newAddressModalSender(event) {
    const modal = await this.poverCtrl.create(NewAddressComponent, { user: this.account });

    modal.onDidDismiss((dataReturned) => {
      if (dataReturned !== null) {
        console.log('Modal Sent Data :', dataReturned);

        this.addressList.push(dataReturned);
        console.log(this.addressList);


        this.senderAddress =  dataReturned.region + ' , '  +  dataReturned.street + ' , ' + this.towerText + '/' +dataReturned.building + ' , ' + this.floorText + '/' + dataReturned.floor + ' , ' + this.flatText + '/' +  dataReturned.flatNumber + ' , '+ dataReturned.city
        this.order.senderAddressId = dataReturned.id
      }
    });

    return await modal.present({
      ev: event
    });
  }
  addOrder() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.order.userId = this.account.id

    this.userOrderService.save(this.order).subscribe(
      res => {
        console.log("order res "+res);
        
        if (this.platformType == 'cordova') {
          this.launchInterstitial();
          this.deviceTokenService.getAdminTokens().subscribe(
            res1 => {
              console.log("res1", res1);

              res1.forEach(element => {
                let body = {
                  "notification":{
                    "title":"طلب جديد",
                    "body":"لقد تم اضافه طلب جديد برقم تعريفى "+" "+ res.identifyNumber,
                    "sound":"default",
                    "click_action":"FCM_PLUGIN_ACTIVITY",
                    "icon":"fcm_push_icon"
                  },
                  "data":{
                    "title":"طلب جديد",
                    "body":"لقد تم اضافه طلب جديد برقم تعريفى "+" "+ res.identifyNumber
                  },
                    "to":element,
                    "priority":"high",
                    "restricted_package_name":""
                }
  
                this.deviceTokenService.sendNotification(body);
                
              });

            }, err1 => {
              console.log("errrrr  11111", err1);

            }
          )
        }
        let toast = this.toastCtrl.create({
          message: this.orderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        load.dismiss();
        this.navCtrl.setRoot(UserOrdersPage);
      }, err => {
        console.log(err, 'errrrrrrrrrrrrrror');
        load.dismiss();
        let displayError = this.orderError;

        let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'middle'
        });
        toast.present();

      }
    )

  }
  launchInterstitial() {

    let interstitialConfig: AdMobFreeInterstitialConfig = {
        //isTesting: true, // Remove in production
        autoShow: true,
        id: "ca-app-pub-3499153975001140/4759715666"
    }; 

    this.admobFree.interstitial.config(interstitialConfig);

    this.admobFree.interstitial.prepare().then(() => {
        // success
        console.log("success ads");
        
    });

}

}
