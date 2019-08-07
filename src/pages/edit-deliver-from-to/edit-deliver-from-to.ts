import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController, PopoverController, Platform, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { UserOrdersPage } from '../user-orders/user-orders';
import { AddressesSelectorComponent } from '../../components/addresses-selector/addresses-selector';
import { FirstRunPage } from '../pages';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DeviceTockenService } from '../../providers/auth/deviceToken.service';
import { UserOrderService } from '../../providers/auth/userOrders.service';
import { AddressService } from '../../providers/auth/address.service';
import { Principal } from '../../providers/auth/principal.service';
import { MyApp } from '../../app/app.component';

/**
 * Generated class for the EditDeliverFromToPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-deliver-from-to',
  templateUrl: 'edit-deliver-from-to.html',
})
export class EditDeliverFromToPage {


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
    isBuing: false,
    identifyNumber:0

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

  chooseAddress = ''

  kg = ''
  kgValue = ''

  weightText = ''
  modelSenderOpen = false;
  modelReciverOpen = false;

  equalAddressesTitle = ''
  equalAddressesMessage = ''
  ok = ''

  isCordova = false;

  lastDescription = '';
  lastWeight = '';
  lastSenderAddressId = 0;
  lastSenderPhone = '';
  lastReciverName = '';
  lastReciverPhone = '';
  lastReciverAddressId = 0;

  mainOrder = null;
  captain = null;
  lastreciverAddress = null;
  lastsenderAddress = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _alert: AlertController
    , public toastCtrl: ToastController,
    private loading: LoadingController,
    private platform: Platform,
    public principal: Principal,
    public addressService: AddressService,
    public poverCtrl: PopoverController,
    public userOrderService: UserOrderService,
    public modalController: ModalController,
    public deviceTokenService: DeviceTockenService,
    public translateService: TranslateService, private app: App, private builder: FormBuilder) {

    this.mainOrder = this.navParams.get("order");
    this.order = this.mainOrder.userOrder

    this.captain = this.mainOrder.captain
    this.lastreciverAddress = this.mainOrder.reciverAddress
    this.address = this.lastreciverAddress.region + ' , ' + this.lastreciverAddress.street + ' , ' + this.lastreciverAddress.city
    this.lastsenderAddress = this.mainOrder.senderAddress
    this.senderAddress = this.lastsenderAddress.region + ' , ' + this.lastsenderAddress.street + ' , ' + this.lastsenderAddress.city

    this.lastDescription = this.order.description
    this.lastReciverAddressId = this.order.reciverAddressId
    this.lastReciverName = this.order.reciverName
    this.lastReciverPhone = this.order.reciverPhone
    this.lastSenderAddressId = this.order.senderAddressId
    this.lastSenderPhone = this.order.senderPhone
    this.lastWeight = this.order.weight

    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.isCordova = true;
    }

    if (platform.is("cordova")) {
      this.platformType = "cordova";
    } else {
      this.platformType = "notCordova"
    }

    this.translateService.get(['EQUAL_ADDRESSES_TITLE', 'EQUAL_ADDRESSES_MESSAGE', 'OK', 'TOWER', 'FLOOR', 'FLAT', 'EDIT_ORDER_ERROR', 'EDIT_ORDER_SUCCESS', 'CHOOSE_PHOTO', 'CHOOSE_FROM_GALARY', 'TAKE_A_PHOTO', 'PLEASE_WAIT', 'OTHER', 'CHOOSE_ADDRESS_CLICK', 'KG', 'WEIGHT_PLACEHOLDER']).subscribe((values) => {

      this.orderError = values.EDIT_ORDER_ERROR;
      this.orderSuccess = values.EDIT_ORDER_SUCCESS;

      this.pleaseWait = values.PLEASE_WAIT
      this.takePhoto = values.TAKE_A_PHOTO
      this.chooseFromGalary = values.CHOOSE_FROM_GALARY

      this.choosePhoto = values.CHOOSE_PHOTO
      this.otherText = values.OTHER
      this.floorText = values.FLOOR
      this.flatText = values.FLAT
      this.towerText = values.TOWER

      this.chooseAddress = values.CHOOSE_ADDRESS_CLICK
      this.kg = values.KG
      this.weightText = values.WEIGHT_PLACEHOLDER
      this.equalAddressesTitle = values.EQUAL_ADDRESSES_TITLE
      this.equalAddressesMessage = values.EQUAL_ADDRESSES_MESSAGE
      this.ok = values.OK
    })

    this.myForm = builder.group({
      'weight': [this.order.weight, [Validators.required, Validators.maxLength(8)]],
      'senderAddress': [this.senderAddress, [Validators.required]],
      'reciverName': [this.order.reciverName, [Validators.required, Validators.maxLength(50)]],
      'address': [this.address, [Validators.required]],
      'reciverPhone': [this.order.reciverPhone, [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      'description': [this.order.description, [Validators.required, Validators.maxLength(999)]],
    });

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(UserOrdersPage);
    });

  }

  ngOnInit() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.principal.identity().then((account) => {
      this.account = account;
      //    load.dismiss()

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

    this.myForm.valueChanges
      .map((value) => {
        // Here you can manipulate your value
        value.reciverName = value.reciverName.trim();
        this.order.reciverName = value.reciverName
        value.description = value.description.trim();
        this.order.description = value.description

        return value;
      }).filter((value) => this.myForm.valid)
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

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
  back() {
    this.navCtrl.setRoot(UserOrdersPage);

  }

  async openAddressesSelector(event) {
    if (!this.modelReciverOpen) {
      this.modelReciverOpen = true;

      const modal = await this.modalController.create(AddressesSelectorComponent, { addresses: this.addressList, user: this.account });

      modal.onDidDismiss((dataReturned) => {
        this.platform.registerBackButtonAction(() => {
          this.navCtrl.setRoot(UserOrdersPage);
        });
        if (dataReturned !== null) {
          this.addressList = dataReturned.addresses;

          this.modelReciverOpen = false;
          if (this.order.senderAddressId != dataReturned.address.id) {

            //            this.address = dataReturned.address.region + ' , ' + dataReturned.address.street + ' , ' + this.towerText + '/' + dataReturned.address.building + ' , ' + this.floorText + '/' + dataReturned.address.floor + ' , ' + this.flatText + '/' + dataReturned.address.flatNumber + ' , ' + dataReturned.address.city
            this.address = dataReturned.address.region + ' , ' + dataReturned.address.street + ' , ' + dataReturned.address.city
            this.myForm.get("address").clearValidators();
            this.myForm.get("address").updateValueAndValidity();
            this.order.reciverAddressId = dataReturned.address.id
          } else {
            let alert = this._alert.create({
              title: this.equalAddressesTitle,
              message: this.equalAddressesMessage,
              buttons: [
                {
                  text: this.ok,
                  handler: () => {

                  }
                }
              ]
            });
            alert.present();
          }

        } else {

          this.modelReciverOpen = false;
        }
      });

      return await modal.present({
        ev: event
      });
    }
  }

  async openAddressesSelectorSender(event) {
    if (!this.modelSenderOpen) {
      this.modelSenderOpen = true;

      const modal = await this.modalController.create(AddressesSelectorComponent, { addresses: this.addressList, user: this.account });

      modal.onDidDismiss((dataReturned) => {
        this.platform.registerBackButtonAction(() => {
          this.navCtrl.setRoot(UserOrdersPage);
        });
        if (dataReturned !== null) {
          this.addressList = dataReturned.addresses;

          this.modelSenderOpen = false;

          if (this.order.reciverAddressId != dataReturned.address.id) {
            this.senderAddress = dataReturned.address.region + ' , ' + dataReturned.address.street + ' , ' + dataReturned.address.city

            this.myForm.get("senderAddress").clearValidators()
            this.myForm.get("senderAddress").updateValueAndValidity();

            this.order.senderAddressId = dataReturned.address.id
          } else {
            let alert = this._alert.create({
              title: this.equalAddressesTitle,
              message: this.equalAddressesMessage,
              buttons: [
                {
                  text: this.ok,
                  handler: () => {

                  }
                }
              ]
            });
            alert.present();
          }
        } else {

          this.modelSenderOpen = false;
        }
      });

      return await modal.present({
        ev: event
      });
    }
  }

  editOrder() {

    if (this.myForm.valid && !this.validateweight() && !this.checkSpaces() && this.validateChanges()) {

      let load = this.loading.create({
        content: this.pleaseWait


      })
      load.present()

      this.order.userId = this.account.id

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
          } //}
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

  validateweight() {
    const ctrl = this.myForm.get("weight");
    return ctrl.dirty && (ctrl.value <= 0 || ctrl.value > 20000);
  }

  checkSpaces() {
    if (this.order.reciverName == '' || this.order.description == '') {
      return true;
    } else {
      return false;
    }
  }
  checkSpaceTofields(string, field) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && string == '';

  }
  validateChanges() {
    if (this.lastDescription != this.order.description || this.lastReciverName != this.order.reciverName || this.lastReciverPhone != this.order.reciverPhone || this.lastSenderAddressId != this.order.senderAddressId || this.lastSenderPhone != this.order.senderPhone || this.lastWeight != this.order.weight || this.lastReciverAddressId != this.order.reciverAddressId) {
      return true;
    } else {
      return false;
    }
  }

  ionViewDidLoad() {
  }

}
