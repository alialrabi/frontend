import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController, PopoverController, Platform, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { UserOrdersPage } from '../user-orders/user-orders';
import { AddressesSelectorComponent } from '../../components/addresses-selector/addresses-selector';
import { FirstRunPage } from '../pages';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { UserOrderService } from '../../providers/auth/userOrders.service';
import { DeviceTockenService } from '../../providers/auth/deviceToken.service';
import { AddressService } from '../../providers/auth/address.service';
import { Principal } from '../../providers/auth/principal.service';
import { MyApp } from '../../app/app.component';
import { t } from '@angular/core/src/render3';
import { CaptainService } from '../../providers/auth/captain.service';

/**
 * Generated class for the EditBuyFromMarketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-buy-from-market',
  templateUrl: 'edit-buy-from-market.html',
})
export class EditBuyFromMarketPage {


  myForm1: FormGroup;
  // myForm2: FormGroup;

  order = {
    marketName: '',
    marketAddress: '',
    marketPhone: '',
    priceRange: '',
    description: '',
    reciverImage: null,
    reciverAddressId: 0,
    userId: 0,
    isBuing: true,
    captainId: 0,
    identifyNumber:0

  }
  address = ''

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


  orderSuccess = '';
  orderError = '';

  towerText = ''
  floorText = ''
  flatText = ''

  chooseAddress = ''

  modelReciverOpen = false;

  isCordova = false;

  okText = ''
  cancelText = ''

  lastMarketName = '';
  lastMarketAddress = '';
  lastMarketPhone = '';
  lastPriceRange = '';
  lastDescription = '';
  lastReciverAddressId = 0;

  mainOrder = null;
  captain = null;
  reciverAddress = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _alert: AlertController
    , public toastCtrl: ToastController,
    private loading: LoadingController,
    private platform: Platform,
    public principal: Principal,
    public addressService: AddressService,
    public poverCtrl: PopoverController,
    public modalControllre: ModalController,
    public deviceTokenService: DeviceTockenService,
    public userOrderService: UserOrderService,
    public captainService: CaptainService,
    public translateService: TranslateService, private app: App, private builder: FormBuilder) {

    this.mainOrder = this.navParams.get("order");
    this.order = this.mainOrder.userOrder
    this.lastPriceRange = this.order.priceRange;

    this.captain = this.mainOrder.captain
    this.reciverAddress = this.mainOrder.reciverAddress

    this.address = this.reciverAddress.region + ' , ' + this.reciverAddress.street + ' , ' + this.reciverAddress.city

    this.lastDescription = this.order.description;
    this.lastMarketAddress = this.order.marketAddress;
    this.lastMarketName = this.order.marketName;
    this.lastMarketPhone = this.order.marketPhone;
    this.lastReciverAddressId = this.order.reciverAddressId;


    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.isCordova = true;
    }

    if (platform.is("cordova")) {
      this.platformType = "cordova";
    } else {
      this.platformType = "notCordova"
    }

    this.translateService.get(["SELECTION_CANCEL", "SELECTION_OK", 'EDIT_ORDER_ERROR', 'EDIT_ORDER_SUCCESS', 'OTHER', 'PLEASE_WAIT']).subscribe((values) => {

      this.orderError = values.EDIT_ORDER_ERROR;
      this.orderSuccess = values.EDIT_ORDER_SUCCESS;
      if (this.otherText == '') {
        this.otherText = values.OTHER
      }
      this.pleaseWait = values.PLEASE_WAIT

      this.okText = values.SELECTION_OK
      this.cancelText = values.SELECTION_CANCEL
    })

    this.myForm1 = builder.group({
      'marketName': [this.order.marketName, [Validators.required, Validators.maxLength(45)]],
      'marketAddress': [this.order.marketAddress, [Validators.maxLength(250)]],
      'marketPhone': [this.order.marketPhone, [Validators.pattern("(01)[0-9]{9}")]],
      'priceRange': [this.order.priceRange, [Validators.required]],
      'description': [this.order.description, [Validators.required, Validators.maxLength(999)]],
      'address': [this.address, [Validators.required]],
    });

    this.platform.registerBackButtonAction(() => {

      this.navCtrl.setRoot(UserOrdersPage);


    });


  }


  ionViewDidLoad() {
  }

  ngOnInit() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.principal.identity().then((account) => {
      this.account = account;
      //      load.dismiss()

      if (account === null || (account.id == null && account.firstName == null && account.login == null && account.authorities.length == 0)) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
        load.dismiss()
      } else {
        this.account = account;
        this.getAddresses(load);

      }



    }).catch((err) => {
      load.dismiss();
    });

    this.myForm1.valueChanges
      .map((value) => {
        // Here you can manipulate your value
        value.marketName = value.marketName.trim();
        this.order.marketName = value.marketName
        value.marketAddress = value.marketAddress.trim();
        this.order.marketAddress = value.marketAddress
        value.description = value.description.trim();
        this.order.description = value.description

        return value;
      }).filter((value) => this.myForm1.valid)
      .subscribe((value) => {
      });
  }

  getAddresses(load) {
    // let load = this.loading.create({
    //   content: this.pleaseWait


    // })
    // load.present()
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

  hasError(field: string, error: string, form) {
    const ctrl = form.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
  back() {

    this.navCtrl.setRoot(UserOrdersPage);

  }

  async openAddressesSelector(event) {
    if (!this.modelReciverOpen) {
      this.modelReciverOpen = true;

      const modal = await this.modalControllre.create(AddressesSelectorComponent, { addresses: this.addressList, user: this.account });

      modal.onDidDismiss((dataReturned) => {
        this.platform.registerBackButtonAction(() => {

          this.navCtrl.setRoot(UserOrdersPage);


        });
        if (dataReturned !== null) {

          this.addressList = dataReturned.addresses;
          this.modelReciverOpen = false;

          this.myForm1.get("address").clearValidators();
          this.myForm1.get("address").updateValueAndValidity();

          this.address = dataReturned.address.region + ' , ' + dataReturned.address.street + ' , ' + dataReturned.address.city

          this.order.reciverAddressId = dataReturned.address.id
        } else {
          this.modelReciverOpen = false;
        }
      });

      return await modal.present({
        ev: event
      });
    }
  }

  editOrder() {

    if (this.myForm1.valid && !this.checkSpaces() && this.validateChanges()) {

      let load = this.loading.create({
        content: this.pleaseWait


      })
      load.present()

      if (this.order.priceRange == 'Other') {
        this.order.priceRange = this.otherText;
      }

      this.userOrderService.update(this.order).subscribe(
        res => {


          this.deviceTokenService.getAdminTokens().subscribe(
            res1 => {

              res1.forEach(element => {
                let body = {
                  "notification": {
                    "title": "طلب جديد",
                    "body": "لقد تم تعديل الطلب صاحب الرقم التعريفى " + " " + this.order.identifyNumber,
                    "sound": "default",
                    "click_action": "FCM_PLUGIN_ACTIVITY",
                    "icon": "fcm_push_icon"
                  },
                  "data": {
                    "title": "طلب جديد",
                    "body": "لقد تم تعديل الطلب صاحب الرقم التعريفى " + " " + this.order.identifyNumber
                  },
                  "to": element,
                  "priority": "high",
                  "restricted_package_name": ""
                }

                this.deviceTokenService.sendNotification(body);

              });

            }, err1 => {
              console.log("errrrr  11111", err1);

            }
          )
          if (this.captain != null) {

            this.deviceTokenService.getUserTokens(this.captain.userId).subscribe(
              res1 => {

                res1.forEach(element => {
                  let body = {
                    "notification": {
                      "title": "طلب جديد",
                      "body": "لقد تم تعديل الطلب صاحب الرقم التعريفى " + " " + this.order.identifyNumber,
                      "sound": "default",
                      "click_action": "FCM_PLUGIN_ACTIVITY",
                      "icon": "fcm_push_icon"
                    },
                    "data": {
                      "title": "طلب جديد",
                      "body": "لقد تم تعديل الطلب صاحب الرقم التعريفى " + " " + this.order.identifyNumber
                    },
                    "to": element,
                    "priority": "high",
                    "restricted_package_name": ""
                  }

                  this.deviceTokenService.sendNotification(body);

                });

              }, err1 => {
                console.log("errrrr  11111", err1);

              }
            )
          }
          // }

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
  }
  checkSpaces() {
    if (this.order.marketName == '' || this.order.description == '') {
      return true;
    } else {
      return false;
    }
  }
  checkSpaceTofields(string, field) {
    const ctrl = this.myForm1.get(field);
    return ctrl.dirty && string == '';

  }
  validateChanges() {
    if (this.lastDescription != this.order.description || this.lastMarketAddress != this.order.marketAddress || this.lastMarketName != this.order.marketName || this.lastMarketPhone != this.order.marketPhone || this.lastPriceRange != this.order.priceRange || this.lastReciverAddressId != this.order.reciverAddressId) {
      return true;
    } else {
      return false;
    }
  }


}
