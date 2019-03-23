import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, App, LoadingController, Platform } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { JhiDataUtils } from 'ng-jhipster';
import { CaptainService } from '../../providers/auth/captain.service';
import { MainPage } from '../pages';
import { TranslateService } from '@ngx-translate/core';
import { importType, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CaptainsPage } from '../captains/captains';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../providers/user/user';
import { AccountService } from '../../providers/auth/account.service';
import { MyApp } from '../../app/app.component';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Device } from '@ionic-native/device'
import { LocalStorageService } from 'ngx-webstorage';


/**
 * Generated class for the AddCaptainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-captain',
  templateUrl: 'add-captain.html',
})
export class AddCaptainPage {

  account: { login: string, email: string, firstName: string, lastName: string, password: string, langKey: string, activated: boolean } = {
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    langKey: MyApp.language,
    activated: true
  };

  language = MyApp.language
  direction = MyApp.direction

  captain: { code: number, name: string, phone: string, image: any, imageContentType: string, latitude: string, longitude: string, lastAssignId: number, busy: boolean, userId: any, agencyId: number, working: boolean } = {
    code: null,
    name: '',
    phone: '',
    image: null,
    imageContentType: '',
    latitude: '31.214262511126286',
    longitude: '29.98716374830485',
    lastAssignId: 0,
    busy: false,
    userId: 0,
    agencyId: 0,
    working: true
  }
  myForm: FormGroup;
  private addAddressError: string;
  private addAdressSuccessString: string;

  private signupErrorString: string;
  private signupSuccessString: string;
  private existingUserError: string;
  private invalidPasswordError: string;
  public pleaseWait;

  public choosePhoto = '';
  public chooseFromGalary = '';
  public takePhoto = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public _alert: AlertController
    , public imagePicker: ImagePicker, public camera: Camera, public toastCtrl: ToastController,
    public captainService: CaptainService,
    private loading: LoadingController,
    private backgroundMode: BackgroundMode,
    private device: Device,
    private platform: Platform,
    public storage: LocalStorageService,
    public translateService: TranslateService, private app: App, private builder: FormBuilder, public user: User, private accountService: AccountService) {


    this.translateService.get(['ADD_CAPTAIN_ERROR', 'ADD_CAPTAIN_SUCCESS', 'CHOOSE_PHOTO', 'CHOOSE_FROM_GALARY', 'TAKE_A_PHOTO', 'PLEASE_WAIT', 'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR']).subscribe((values) => {
      this.addAddressError = values.ADD_CAPTAIN_ERROR;
      this.addAdressSuccessString = values.ADD_CAPTAIN_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
      this.takePhoto = values.TAKE_A_PHOTO
      this.chooseFromGalary = values.CHOOSE_FROM_GALARY
      this.existingUserError = values.EXISTING_USER_ERROR;
      this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
      this.choosePhoto = values.CHOOSE_PHOTO
    })

    this.myForm = builder.group({
      'code': ['', [Validators.required]],
      'name': ['', [Validators.required, Validators.maxLength(45)]],
      'phone': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'passwordConfirm': ['', [Validators.required]]
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCaptainPage');
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

  // openImagePicker() {

  //   //console.log(this.device.version , parseInt(this.device.version, 10) , this.device.platform.toLowerCase());


  //   // if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {

  //   //   this.backgroundMode.enable();
  //   // }

  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //     targetWidth: 1280,
  //     targetHeight: 1280,
  //     cameraDirection: this.camera.Direction.BACK,
  //   }

  //     this.camera.getPicture(options).then((imageData) => {

  //       // if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {
  //       //   this.backgroundMode.disable();
  //       // }


  //       this.captain.image = imageData;


  //     }, (err) => {
  //       // Handle error
  //       console.log(err, 'error');

  //       let toast = this.toastCtrl.create({
  //         message: err,
  //         duration: 3000,
  //         position: 'top'
  //       });
  //       toast.present();

  //     })
  // }
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
        this.captain.image = results[0];
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
        this.captain.image = data;

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

  addCaptain() {


    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.account.login = this.account.email;
    this.account.activated = true;
    this.account.firstName = this.captain.name;
    this.account.lastName = this.captain.name;
    // Attempt to login in through our User service
    this.accountService.registerCaptain(this.account).subscribe(
      res1 => {
        console.log(res1, 'sssssssssssss');
        this.captain.userId = res1.id;


        this.captainService.save(this.captain).subscribe((res) => {
          console.log(res, 'res');

          let toast = this.toastCtrl.create({
            message: this.addAdressSuccessString,
            duration: 3000,
            position: 'top'
          });
          toast.present();
          load.dismiss();
          //this.navCtrl.push(CaptainsPage);
          this.app.getRootNavs()[0].setRoot(CaptainsPage);
        }, (err1) => {
          console.log('error', err1);

          // Unable to add address
          // const error = JSON.parse(err.error);
          let displayError = this.addAddressError;

          let toast = this.toastCtrl.create({
            message: displayError,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          load.dismiss();
        });


      }, err => {
        // Unable to sign up
        console.log(err);

        let displayError = this.signupErrorString;
        if (err.status === 400 && (err.error.errorKey == 'userexists' || err.error.message == 'error.userexists' || err.error.title == 'Login name already used!')) {
          displayError = this.existingUserError;
        } else if (err.status === 400 && err.error.message === 'error.validation'
          && err.error.fieldErrors[0].field === 'password' && err.error.fieldErrors[0].message === 'Size') {
          displayError = this.invalidPasswordError;
        }
        load.dismiss();
        console.log(displayError, 'ssssssssssssss');

        let toast1 = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'top'
        });
        toast1.present();
        console.log("8888888888888888888888888888");

      });
  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
  notMathces() {
    const ctrl = this.myForm.get("passwordConfirm");
    return ctrl.dirty && ctrl.value != this.myForm.get("password").value
  }

  back() {
    this.navCtrl.setRoot(CaptainsPage);
  }

}
