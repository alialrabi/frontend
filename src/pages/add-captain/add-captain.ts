import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { JhiDataUtils } from 'ng-jhipster';
import { CaptainService } from '../../providers/auth/captain.service';
import { MainPage } from '../pages';
import { TranslateService } from '@ngx-translate/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import { CaptainsPage } from '../captains/captains';


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
  captain : {code:string , name:string , phone:string , evaluation : string , image : any , imageContentType:string , latitude:number , longitude:number , busy:boolean  } = {
    code: '',
    name: '',
    phone: '',
    evaluation: '',
    image: null ,
    imageContentType:'',
    latitude:26.555555512,
   longitude:12.5824521259 ,
   busy:true
  }
  private addAddressError: string;
  private addAdressSuccessString: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _alert: AlertController
    , public imagePicker: ImagePicker, public camera: Camera, public toastCtrl: ToastController, public captainService:CaptainService , public translateService: TranslateService) {

      this.translateService.get(['ADD_CAPTAIN_ERROR', 'ADD_CAPTAIN_SUCCESS']).subscribe((values) => {
        this.addAddressError = values.SIGNUP_ERROR;
        this.addAdressSuccessString = values.SIGNUP_SUCCESS;
      })
      
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

    this.captainService.save(this.captain).subscribe((res) => {
      console.log(res , 'res');
      
      let toast = this.toastCtrl.create({
        message: this.addAdressSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.navCtrl.push(CaptainsPage);
    }, (err) => {
      console.log('error' , err);
      
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

  }  

}
