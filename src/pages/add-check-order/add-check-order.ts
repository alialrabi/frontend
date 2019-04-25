import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, ToastController, AlertController, App } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { TranslateService } from '@ngx-translate/core';
import { OrdersPage } from '../orders/orders';
import { OrderService } from '../../providers/auth/order.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { Principal } from '../../providers/auth/principal.service';
import { FirstRunPage } from '../pages';

/**
 * Generated class for the AddCheckOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-check-order',
  templateUrl: 'add-check-order.html',
})
export class AddCheckOrderPage {

  order = {
    check: null,
    checkContentType: '',
    status: 'not assigned',
    captainId: 0,
    agencyId: 0,
    userId: 0,
    fromAddress: null,
    isUserOrder: false,
    addressId: 0,
  }

  account;
  public addORDERError;
  public addORDERSuccessString;
  public pleaseWait;
  language = MyApp.language
  direction = MyApp.direction
  public choosePhoto = '';
  public chooseFromGalary = '';
  public takePhoto = '';
  platformType="cordova";

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App,private principal:Principal, public camera: Camera, public _alert: AlertController
    , public imagePicker: ImagePicker, private loading: LoadingController, public toastCtrl: ToastController, public orderService: OrderService, public platform: Platform, public translateService: TranslateService) {

      if(platform.is("cordova")){
        this.platformType = "cordova";
      }else{
        this.platformType = "notCordova"
      }


    this.translateService.get(['ADD_ORDER_ERROR', 'ADD_ORDER_SUCCESS', 'PLEASE_WAIT', 'CHOOSE_PHOTO', 'CHOOSE_FROM_GALARY', 'TAKE_A_PHOTO']).subscribe((values) => {
      console.log(values);

      this.addORDERError = values.ADD_ORDER_ERROR;
      this.addORDERSuccessString = values.ADD_ORDER_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
      this.takePhoto = values.TAKE_A_PHOTO
      this.chooseFromGalary = values.CHOOSE_FROM_GALARY

      this.choosePhoto = values.CHOOSE_PHOTO

    })
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(OrdersPage);

    });


  }
  ngOnInit() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.principal.identity().then((account) => {
      console.log(account);
      load.dismiss();
      if (account === null || account.authorities[0] != 'ROLE_AGENCY') {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else if (account.authorities[0] == 'ROLE_AGENCY') {
        this.account=account

        
      } 
    }).catch((err) => {
      load.dismiss();
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCheckOrderPage');
  }

  addOrder() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.order.agencyId = this.account.id;

    this.orderService.save(this.order).subscribe((res) => {
      console.log(res, 'res');

      let obj = res;
      load.dismiss();

      this.navCtrl.setRoot('AssignOrderPage', { item: obj })

      let toast = this.toastCtrl.create({
        message: this.addORDERSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();

    }, (err) => {
      console.log('error', err);

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

  back() {
    this.navCtrl.setRoot(OrdersPage);

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
      this.order.check = results[0];
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
        this.order.check = data;

      }, function (error) {
        console.log(error);

      //   let toast = this.toastCtrl.create({
      //     message: error,
      //     duration: 3000,
      //     position: 'top'
      //   });
      //   toast.present();

       });

  }
  uploadBrowserImage(event: any) {
    //console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');

    this.readThis(event.target);
    //let files = event.target.files;

    // console.log('files' , files);
    // files[0]


  }

  openFileSelector() {
    // console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrr");

    //this.myInput.nativeElement.click();

    let element = document.getElementById('imageInput') as HTMLElement;
    element.click()
  }
  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {

      this.order.check = myReader.result.substr(myReader.result.indexOf(',') + 1);
      //this..imageContentType = 'fromBrowser'
      console.log(myReader);

    }
    myReader.readAsDataURL(file);


  }

}
