import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, Platform, App } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CaptainService } from '../../providers/auth/captain.service';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Device } from '@ionic-native/device';
import { LocalStorageService } from 'ngx-webstorage';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../providers/user/user';
import { AccountService } from '../../providers/auth/account.service';
import { CaptainDetailsPage } from '../captain-details/captain-details';
import { MyApp } from '../../app/app.component';
import { Ng2ImgMaxService } from 'ng2-img-max';

/**
 * Generated class for the EditCaptainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-captain',
  templateUrl: 'edit-captain.html',
})
export class EditCaptainPage {

  account = {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  };

  language = MyApp.language
  direction = MyApp.direction

  captain = {
    id: 0,
    code: '',
    name: '',
    phone: '',
    image: null,
    imageContentType: ''

  }

  code = ''
  name = ''
  phone = ''
  image = null
  email = ''
  password = ''

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


  oldCaptain

  captainDetails;

  platformType = "cordova";

  isCordova = false;
  isloadinImage = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _alert: AlertController
    , public imagePicker: ImagePicker, public camera: Camera, public toastCtrl: ToastController,
    public captainService: CaptainService,
    private loading: LoadingController,
    private ng2ImgMaxService: Ng2ImgMaxService,
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

    this.oldCaptain = this.navParams.get("captain");
    this.captainDetails = this.navParams.get("item");
    this.account.id = this.captainDetails.userId;
    this.account.email = this.captainDetails.email;
    this.captain.id = this.captainDetails.id;
    this.captain.code = this.captainDetails.code;
    this.captain.image = this.captainDetails.image;
    this.captain.imageContentType = this.captainDetails.imageContentType;
    this.captain.name = this.captainDetails.name;
    this.captain.phone = this.captainDetails.phone;

    this.email = this.captainDetails.email;
    this.code = this.captainDetails.code;
    this.image = this.captainDetails.image;
    this.name = this.captainDetails.name;
    this.phone = this.captainDetails.phone;
    this.password = this.captainDetails.password;

    this.translateService.get(['EDIT_CAPTAIN_ERROR', 'EDIT_CAPTAIN_SUCCESS', 'CHOOSE_PHOTO', 'CHOOSE_FROM_GALARY', 'TAKE_A_PHOTO', 'PLEASE_WAIT', 'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR', 'SIGNUP_ERROR']).subscribe((values) => {
      this.addAddressError = values.EDIT_CAPTAIN_ERROR;
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
      'code': ['', [Validators.required]],
      'name': ['', [Validators.required, Validators.maxLength(45)]],
      'phone': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.minLength(6)]],
      'passwordConfirm': ['', []]
    });

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(CaptainDetailsPage, { item: this.oldCaptain });

    });


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCaptainPage');
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

  editCaptain() {


    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    let editAccount = {
      id: this.account.id,
      firstName: this.captain.name,
      lastName: this.captain.name,
      phone: this.captain.phone,
      email: this.myForm.get("email").value,
      password: this.myForm.get("password").value,
      emailChanged: this.email != this.myForm.get("email").value
    }

    if (this.myForm.get("password").value != this.password && this.myForm.get("password").value != '' && this.myForm.get("password").value != null) {
      editAccount.password = this.myForm.get("password").value;
    } else {
      editAccount.password = null;
    }
    if (this.captain.image == 'O') {
      this.captain.image = null;
    }
    // Attempt to login in through our User service
    this.accountService.updateUserInformation(editAccount).subscribe(
      res1 => {

        this.captainService.updateCaptainInformation(this.captain).subscribe((res) => {
          console.log(res, 'res');

          let toast = this.toastCtrl.create({
            message: this.addAdressSuccessString,
            duration: 3000,
            position: 'top'
          });
          toast.present();
          load.dismiss();
          //this.navCtrl.push(CaptainsPage);
          this.app.getRootNavs()[0].setRoot(CaptainDetailsPage, { item: this.oldCaptain });
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
    this.navCtrl.setRoot(CaptainDetailsPage, { item: this.oldCaptain });
  }
  valuesChanges() {
    if (this.code != this.captain.code || this.name != this.captain.name || this.phone != this.captain.phone || (this.image != this.captain.image && this.captain.image != 'O') || this.email != this.account.email || (this.password != this.myForm.get("password").value && this.myForm.get("password").value != '' && this.myForm.get("password").value != null)) {
      return true;
    } else {
      return false;
    }
  }
  passwordChange() {

    if (this.myForm.get("password").value != '' && this.myForm.get("password").value != null) {
      this.myForm.get("passwordConfirm").clearValidators();
      this.myForm.get("passwordConfirm").updateValueAndValidity()

      this.myForm.get("passwordConfirm").setValidators(Validators.required);
      this.myForm.get("passwordConfirm").clearValidators();
      this.myForm.get("passwordConfirm").updateValueAndValidity();

    } else {
      this.myForm.get("passwordConfirm").clearValidators();
      this.myForm.get("passwordConfirm").updateValueAndValidity()
    }
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

}
