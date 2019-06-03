import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, App, LoadingController, Platform } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CaptainService } from '../../providers/auth/captain.service';
import { MainPage } from '../pages';
import { TranslateService } from '@ngx-translate/core';
import { CaptainsPage } from '../captains/captains';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../providers/user/user';
import { AccountService } from '../../providers/auth/account.service';
import { MyApp } from '../../app/app.component';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Device } from '@ionic-native/device'
import { LocalStorageService } from 'ngx-webstorage';
import { Ng2ImgMaxService } from 'ng2-img-max';


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

  @ViewChild('imageInput') myInput: ElementRef

  account: { login: string, email: string, firstName: string, lastName: string, password: string, langKey: string, activated: boolean } = {
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    langKey: 'ar',
    activated: true
  };

  language = MyApp.language
  direction = MyApp.direction

  captain: { code: number, name: string, phone: string, image: any, imageContentType: string, latitude: string, longitude: string, lastAssignId: number, busy: boolean, userId: any, agencyId: number, working: boolean, atMarket: boolean } = {
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
    working: true,
    atMarket: true
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
  platformType = "cordova";
  browserImage;
  isCordova = false;
  isloadinImage = false;

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(public navCtrl: NavController, public navParams: NavParams, private ng2ImgMaxService: Ng2ImgMaxService, public _alert: AlertController
    , public imagePicker: ImagePicker, public camera: Camera, public toastCtrl: ToastController,
    public captainService: CaptainService,
    private loading: LoadingController,
    private backgroundMode: BackgroundMode,
    private device: Device,
    private platform: Platform,
    public storage: LocalStorageService,
    public translateService: TranslateService, private app: App, private builder: FormBuilder, public user: User, private accountService: AccountService) {

    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.isCordova = true;
    }

    if (platform.is("cordova")) {
      this.platformType = "cordova";
    } else {
      this.platformType = "notCordova"
    }

    this.translateService.get(['ADD_CAPTAIN_ERROR', 'ADD_CAPTAIN_SUCCESS', 'CHOOSE_PHOTO', 'CHOOSE_FROM_GALARY', 'TAKE_A_PHOTO', 'PLEASE_WAIT', 'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR', 'SIGNUP_ERROR']).subscribe((values) => {
      this.addAddressError = values.ADD_CAPTAIN_ERROR;
      this.addAdressSuccessString = values.ADD_CAPTAIN_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
      this.takePhoto = values.TAKE_A_PHOTO
      this.chooseFromGalary = values.CHOOSE_FROM_GALARY
      this.existingUserError = values.EXISTING_USER_ERROR;
      this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
      this.choosePhoto = values.CHOOSE_PHOTO
      this.signupErrorString = values.SIGNUP_ERROR
    })

    this.myForm = builder.group({
      'code': ['', [Validators.required , Validators.pattern("[0-9]{1,8}")]],
      'name': ['', [Validators.required, Validators.maxLength(45)]],
      'phone': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6) , Validators.maxLength(50)]],
      'passwordConfirm': ['', [Validators.required]]
    });

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(CaptainsPage);

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
      if (results[0] != null && results[0] != undefined && results[0] != 'O' && results[0] != '') {
      this.captain.image = results[0];
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
    console.log(options);

    //this.backgroundMode.enable();

    this.camera.getPicture(options)
      .then((data) => {
        // if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {
        //   this.backgroundMode.disable();
        // }
        this.captain.image = data;

      }, function (error) {
        console.log(error);

        // let toast = this.toastCtrl.create({
        //   message: error,
        //   duration: 3000,
        //   position: 'top'
        // });
        // toast.present();

      });

  }

  addCaptain() {

    if(this.myForm.valid && !this.notMathces() && !this.isloadinImage){

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.account.login = this.account.email;
    this.account.activated = true;
    this.account.firstName = this.captain.name;
    this.account.lastName = this.captain.name;

    if (this.captain.image == 'O') {
      this.captain.image = null;
    }
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
    console.log("**************************");
    this.isloadinImage = true;
    if (inputValue != null && inputValue != undefined) {
      var file: File = inputValue.files[0];
      if (file != null && file != undefined) {
        this.ng2ImgMaxService.resize([file], 300, 300).subscribe((result) => {
          console.log("result", result);


          var myReader: FileReader = new FileReader();

          myReader.onloadend = (e) => {
            console.log("--------------------");

            this.isloadinImage = false;
            this.captain.image = myReader.result.substr(myReader.result.indexOf(',') + 1)


            //this..imageContentType = 'fromBrowser'
            console.log(myReader);

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

  hideShowPassword() {    
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
}
