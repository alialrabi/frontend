import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, App } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { JhiDataUtils } from 'ng-jhipster';
import { CaptainService } from '../../providers/auth/captain.service';
import { MainPage } from '../pages';
import { TranslateService } from '@ngx-translate/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import { CaptainsPage } from '../captains/captains';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../providers/user/user';
import { AccountService } from '../../providers/auth/account.service';


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

  account: { login: string, email: string, firstName: string, lastName: string, password: string, langKey: string , activated: boolean } = {
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    langKey: 'en',
    activated: true
  };


  captain : {code:number , name:string , phone:string , evaluation : string , image : any , imageContentType:string , latitude:number , longitude:number , busy:boolean  , userId:any , agencyId:number } = {
    code: null,
    name: '',
    phone: '',
    evaluation: '5',
    image: null ,
    imageContentType:'',
    latitude:26.565155512,
   longitude:12.05827521259 ,
   busy:false ,
   userId:0 ,
   agencyId:0
  }
  myForm: FormGroup;
  private addAddressError: string;
  private addAdressSuccessString: string;

  private signupErrorString: string;
  private signupSuccessString: string;
  private existingUserError: string;
  private invalidPasswordError: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public _alert: AlertController
    , public imagePicker: ImagePicker, public camera: Camera, public toastCtrl: ToastController, 
    public captainService:CaptainService ,
     public translateService: TranslateService , private app:App , private builder: FormBuilder , public user: User , private accountService: AccountService) {

      this.translateService.get(['ADD_CAPTAIN_ERROR', 'ADD_CAPTAIN_SUCCESS']).subscribe((values) => {
        this.addAddressError = values.SIGNUP_ERROR;
        this.addAdressSuccessString = values.SIGNUP_SUCCESS;
      })

      this.myForm = builder.group({
        'code':['', [Validators.required ]],
        'name': ['', [Validators.required , Validators.maxLength(45)]],
        'phone':['', [Validators.required , Validators.pattern("(01)[0-9]{9}")]],
        'email':['', [Validators.required  , Validators.email]],
        'password': ['', [Validators.required , Validators.minLength(6) ]],
      });

      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCaptainPage');
  }
  showDialog() {
    let alert = this._alert.create({
      title: 'Choose Photo',
      buttons: [
        {
          text: 'Choose from gallary',
          handler: () => {
            this.openImagePicker();
          }
        },
        {
          text: 'Take a photo',
          handler: () => {
            this.takePicture();
          }
        }
      ]
    });
    alert.present();

  }

  openImagePicker() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {

      this.captain.image = imageData;


    }, (err) => {
      // Handle error
      console.log(err, 'error');

      let toast = this.toastCtrl.create({
        message: err,
        duration: 10000,
        position: 'top'
      });
      toast.present();

    })


  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options)
      .then((data) => {
        this.captain.image = data;

      }, function (error) {
        console.log(error);

        let toast = this.toastCtrl.create({
          message: error,
          duration: 10000,
          position: 'top'
        });
        toast.present();

      });
  }

  addCaptain(){





    this.account.login = this.account.email;
    this.account.activated = true;
    this.account.firstName = this.captain.name;
    this.account.lastName = this.captain.name;
    // Attempt to login in through our User service
    this.accountService.registerCaptain(this.account).subscribe(
      res1 => {
      console.log(res1 , 'sssssssssssss');
      this.captain.userId = res1.id;


      this.captainService.save(this.captain).subscribe((res) => {
        console.log(res , 'res');
        
        let toast = this.toastCtrl.create({
          message: this.addAdressSuccessString,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        //this.navCtrl.push(CaptainsPage);
        this.app.getRootNavs()[0].setRoot(CaptainsPage);
      }, (err1) => {
        console.log('error' , err1);
        
        // Unable to add address
        // const error = JSON.parse(err.error);
        let displayError = this.addAddressError;
        
        let toast = this.toastCtrl.create({
            message: displayError,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
      });




        

    }, err => {
      // Unable to sign up
      console.log(err);
      
      const error = err.error;
      let displayError = this.signupErrorString;
      if (err.status === 400 && error.type.includes('already-used')) {
          displayError = this.existingUserError;
      } else if (err.status === 400 && error.message === 'error.validation'
          && error.fieldErrors[0].field === 'password' && error.fieldErrors[0].message === 'Size') {
          displayError = this.invalidPasswordError;
      }
      let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'top'
      });
      toast.present();
    });









    

  }  

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
}
