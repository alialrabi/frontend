import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, App, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';
import { CaptainsPage } from '../captains/captains';
import { MyApp } from '../../app/app.component';

/**
 * Generated class for the CaptainEvaluationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-captain-evaluation',
  templateUrl: 'captain-evaluation.html',
})
export class CaptainEvaluationPage {

  myForm: FormGroup;
  public evaluation = {
    moral:1,
    appearance:1,
    speed:1,
    commitment:1,
    excellence:1,
  };
  captain;

  public editEvaluationSuccess;
  public editEvaluationError;
  public pleaseWait;

  language = MyApp.language
  direction = MyApp.direction

  isCordova = false;

  constructor(public navCtrl: NavController, public navParams: NavParams , public toastCtrl: ToastController, 
    public captainService:CaptainService ,private loading: LoadingController , private app:App , public platform:Platform,
     public translateService: TranslateService , private builder: FormBuilder ) {

      this.captain = this.navParams.get("item");
      

      if (this.platform.is("cordova") && this.platform.is("android")) {
        this.isCordova = true;
      }

      this.translateService.get(['EDIT_EVALUATION_ERROR', 'EDIT_EVALUATION_SUCCESS' , 'PLEASE_WAIT']).subscribe((values) => {
         this.editEvaluationError = values.EDIT_EVALUATION_ERROR;
         this.editEvaluationSuccess = values.EDIT_EVALUATION_SUCCESS;
         this.pleaseWait = values.PLEASE_WAIT
      })

      this.getEvaluation(this.captain.id);

      this.myForm = builder.group({
        'moral': ['', [Validators.required , Validators.pattern("[1-5]{1}")]],
        'appearnce': ['', [Validators.required , Validators.pattern("[1-5]{1}")]],
        'speed': ['', [Validators.required ,Validators.pattern("[1-5]{1}")]],
        'commitment': ['', [Validators.required  , Validators.pattern("[1-5]{1}")]],
        'excellence': ['', [Validators.required , Validators.pattern("[1-5]{1}")]],
      });

      this.platform.registerBackButtonAction(() => {
        this.navCtrl.setRoot(CaptainsPage);
  
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptainEvaluationPage');
  }

  getEvaluation(captainId){

    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()

    this.captainService.getCaptainElevation(captainId).subscribe(
      res =>{
        this.evaluation = res;
        load.dismiss();
        
      }, err =>{
        console.log(err , 'errrrrror');
        load.dismiss();
        
      }
    )
  
  }

  editEvaluation(){

    if(this.myForm.valid){

    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()

    this.captainService.updateEvaluation(this.evaluation).subscribe((res) => {
      console.log(res , 'res');
      
      let toast = this.toastCtrl.create({
        message: this.editEvaluationSuccess,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      load.dismiss();
      //this.navCtrl.push(CaptainsPage);
      this.app.getRootNavs()[0].setRoot(CaptainsPage);
    }, (err1) => {
      console.log('error' , err1);
      
      // Unable to add address
      // const error = JSON.parse(err.error);
      let displayError = this.editEvaluationError;
      
      let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'middle'
      });
      toast.present();
      load.dismiss();
    });
  }

  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }

  back(){
    this.navCtrl.setRoot(CaptainsPage);
  }

}
