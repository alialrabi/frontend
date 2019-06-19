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
import { Ng2ImgMaxService } from 'ng2-img-max';

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
  platformType = "cordova";

  isloadinImage = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, private ng2ImgMaxService: Ng2ImgMaxService, private app: App, private principal: Principal, public camera: Camera, public _alert: AlertController
    , public imagePicker: ImagePicker, private loading: LoadingController, public toastCtrl: ToastController, public orderService: OrderService, public platform: Platform, public translateService: TranslateService) {

    if (platform.is("cordova")) {
      this.platformType = "cordova";
    } else {
      this.platformType = "notCordova"
    }


    this.translateService.get(['ADD_ORDER_ERROR', 'ADD_ORDER_SUCCESS', 'PLEASE_WAIT', 'CHOOSE_PHOTO', 'CHOOSE_FROM_GALARY', 'TAKE_A_PHOTO']).subscribe((values) => {

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
      load.dismiss();
      if (account === null  || (account.id == null && account.firstName == null && account.login == null && account.authorities.length == 0) || account.authorities[0] != 'ROLE_AGENCY') {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else if (account.authorities[0] == 'ROLE_AGENCY') {
        this.account = account


      }
    }).catch((err) => {
      load.dismiss();
    });
  }


  ionViewDidLoad() {
  }

  addOrder() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.order.agencyId = this.account.id;

    this.orderService.save(this.order).subscribe((res) => {

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
      if (results[0] != null && results[0] != undefined && results[0] != 'O' && results[0] != '') {
        this.order.check = results[0];
      }
    }, (err) => {
      alert(err);
    });

  }
  takePicture() {

    // if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {
    //   this.backgroundMode.enable();
    // }

    const options: CameraOptions = {
      quality: 65,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 600,
      targetHeight: 600
    }
    //this.backgroundMode.enable();

    this.camera.getPicture(options)
      .then((data) => {
        // if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {
        //   this.backgroundMode.disable();
        // }
        this.order.check = data;

      }, function (error) {

        //   let toast = this.toastCtrl.create({
        //     message: error,
        //     duration: 3000,
        //     position: 'top'
        //   });
        //   toast.present();

      });

  }
  uploadBrowserImage(event: any) {

    this.readThis(event.target);
    //let files = event.target.files;

    // files[0]


  }

  openFileSelector() {

    //this.myInput.nativeElement.click();

    let element = document.getElementById('imageInput') as HTMLElement;
    element.click()
  }
  readThis(inputValue: any): void {

    this.isloadinImage = true;

    if (inputValue != null && inputValue != undefined) {
      var file: File = inputValue.files[0];
      if (file != null && file != undefined) {


        this.ng2ImgMaxService.resize([file], 300, 300).subscribe((result) => {


          var myReader: FileReader = new FileReader();

          myReader.onloadend = (e) => {

            this.isloadinImage = false;

            this.order.check = myReader.result.substr(myReader.result.indexOf(',') + 1)

            //this..imageContentType = 'fromBrowser'

          }
          myReader.readAsDataURL(result);

        })
      } else {
        this.isloadinImage = false;
      }
    } else {
      this.isloadinImage = false;
    }
  }

}
