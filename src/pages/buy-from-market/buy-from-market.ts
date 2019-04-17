import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, Platform, App, PopoverController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { OrderKindPage } from '../order-kind/order-kind';
import { AddressService } from '../../providers/auth/address.service';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { AddressesSelectorComponent } from '../../components/addresses-selector/addresses-selector';
import { NewAddressComponent } from '../../components/new-address/new-address';
import { UserOrderService } from '../../providers/auth/userOrders.service';
import { UserOrdersPage } from '../user-orders/user-orders';
import { DeviceTockenService } from '../../providers/auth/deviceToken.service';

/**
 * Generated class for the BuyFromMarketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy-from-market',
  templateUrl: 'buy-from-market.html',
})
export class BuyFromMarketPage {

  myForm1: FormGroup;
 // myForm2: FormGroup;

  order = {
    marketName:'',
    marketAddress:'',
    marketPhone:'',
    priceRange:'',
    description:'',
    reciverImage:null,
    reciverAddressId:0,
    userId:0,
    isBuing:true

  }
  address = ''

  public choosePhoto = '';
  public chooseFromGalary = '';
  public takePhoto = '';
  platformType="cordova";
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

  constructor(public navCtrl: NavController, public navParams: NavParams , public _alert: AlertController
    , public imagePicker: ImagePicker, public camera: Camera, public toastCtrl: ToastController,
    private loading: LoadingController,
    private device: Device,
    private platform: Platform,
    public principal:Principal,
    public addressService:AddressService,
    public poverCtrl: PopoverController,
    public deviceTokenService:DeviceTockenService,
    public userOrderService: UserOrderService,
    public translateService: TranslateService, private app: App, private builder: FormBuilder) {

      if(platform.is("cordova")){
        this.platformType = "cordova";
      }else{
        this.platformType = "notCordova"
      }

    this.translateService.get(['ADD_ORDER_ERROR', 'ADD_ORDER_SUCCESS','CHOOSE_PHOTO', 'CHOOSE_FROM_GALARY', 'TAKE_A_PHOTO', 'PLEASE_WAIT' , 'OTHER']).subscribe((values) => {
      
      this.orderError = values.ADD_ORDER_ERROR;
      this.orderSuccess = values.ADD_ORDER_SUCCESS;

      this.pleaseWait = values.PLEASE_WAIT
      this.takePhoto = values.TAKE_A_PHOTO
      this.chooseFromGalary = values.CHOOSE_FROM_GALARY
     
      this.choosePhoto = values.CHOOSE_PHOTO
      this.otherText = values.OTHER
    })

    this.myForm1 = builder.group({
      'marketName': ['', [Validators.required , Validators.maxLength(45)]],
      'marketAddress': ['', [Validators.required, Validators.maxLength(250)]],
      'marketPhone': ['', [ Validators.pattern("(01)[0-9]{9}")]],
      'priceRange': ['', [Validators.required]],
      'description': ['', [Validators.required, Validators.maxLength(999)]],
      'address': ['', [Validators.required ]],
    });
    // this.myForm2 = builder.group({
    //   'address': ['', [Validators.required ]],
    // });

    this.platform.registerBackButtonAction(() => {
      if(this.reciverData){
        this.reciverData = false;
      
      }else{
        this.navCtrl.setRoot(OrderKindPage);
      }

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
      
      if (account === null ) {
         this.app.getRootNavs()[0].setRoot(FirstRunPage);
      }else{
        this.account = account;
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

  showDialog() {
    let alert = this._alert.create({
      title: this.choosePhoto,
      buttons: [
        {
          text: this.chooseFromGalary,
          handler: () => {
            this.openImagePicker();
          }
        },
        {
          text: this.takePhoto,
          handler: () => {
            this.takePicture();
          }
        }
      ]
    });
    alert.present();

  }

  openImagePicker() {

    let options = {
      maximumImagesCount: 1,
      width: 200,
      height: 200,

      // quality of resized image, defaults to 100
      quality: 100,
      outputType: 1

    }    

    this.imagePicker.getPictures(options).then((results) => {
        this.order.reciverImage = results[0];
    }, (err) => {
      alert(err);
    });

  }
  takePicture() {

    // if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {
    //   this.backgroundMode.enable();
    // }

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }
    //this.backgroundMode.enable();

    this.camera.getPicture(options)
      .then((data) => {
        // if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {
        //   this.backgroundMode.disable();
        // }
        this.order.reciverImage = data;

      }, function (error) {
        console.log(error);

        let toast = this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'top'
        });
        toast.present();

      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyFromMarketPage');
  }

  hasError(field: string, error: string , form) {
    const ctrl = form.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
  back() {
    if(this.reciverData){
      this.reciverData = false;
    
    }else{
      this.navCtrl.setRoot(OrderKindPage);
    }

  }
 
  uploadBrowserImage(event:any){
    //console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
    
    this.readThis(event.target);
    //let files = event.target.files;

   // console.log('files' , files);
   // files[0]
    
    
  }

  openFileSelector(){
   // console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrr");
    
    //this.myInput.nativeElement.click();

    let element = document.getElementById('imageInput') as HTMLElement;
    element.click()
  }
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
     
      this.order.reciverImage = myReader.result.substr(myReader.result.indexOf(',')+1);
      //this.captain.imageContentType = 'fromBrowser'
      console.log(myReader);
      
    }
    myReader.readAsDataURL(file);
    
    
  }

  async openAddressesSelector(event){
    const modal = await this.poverCtrl.create(AddressesSelectorComponent , {addresses:this.addressList});

    modal.onDidDismiss((dataReturned) => {
      if (dataReturned !== null) {
        console.log('Modal Sent Data :', dataReturned);

       this.address = dataReturned.city + ' , '+dataReturned.region + ' , '+dataReturned.street + ' , '+dataReturned.building + ' , '+dataReturned.floor + ' , '+dataReturned.flatNumber
       this.order.reciverAddressId = dataReturned.id
      }
    });

    return await modal.present({
      ev: event
    });
  }

  async newAddressModal(event){
    const modal = await this.poverCtrl.create(NewAddressComponent , {user:this.account});

    modal.onDidDismiss((dataReturned) => {
      if (dataReturned !== null) {
        console.log('Modal Sent Data :', dataReturned);

        this.addressList.push(dataReturned);
        console.log(this.addressList);
        

       this.address = dataReturned.city + ' , '+dataReturned.region + ' , '+dataReturned.street + ' , '+dataReturned.building + ' , '+dataReturned.floor + ' , '+dataReturned.flatNumber
       this.order.reciverAddressId = dataReturned.id
      }
    });

    return await modal.present({
      ev: event
    });
  }

  next(){
    this.reciverData = true;
    console.log(this.reciverData);
    
  }
  addOrder(){

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.order.userId = this.account.id
    if(this.order.priceRange == 'Other'){
      this.order.priceRange = this.otherText;
    }
    this.userOrderService.save(this.order).subscribe(
      res =>{
        console.log("order res "+res);
        if (this.platformType == 'cordova') {
          this.deviceTokenService.getAdminTokens().subscribe(
            res1 => {
              console.log("res1", res1);

              res1.forEach(element => {
                let body = {
                  "notification":{
                    "title":"طلب جديد",
                    "body":"لقد تم اضافه طلب جديد برقم تعريفى " +" "+ res.identifyNumber,
                    "sound":"default",
                    "click_action":"FCM_PLUGIN_ACTIVITY",
                    "icon":"fcm_push_icon"
                  },
                  "data":{
                    "title":"طلب جديد",
                    "body":"لقد تم اضافه طلب جديد برقم تعريفى " +" "+ res.identifyNumber
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
      }, err =>{
        console.log(err , 'errrrrrrrrrrrrrror');
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
