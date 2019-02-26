import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams , public toastCtrl: ToastController, 
    public captainService:CaptainService ,
     public translateService: TranslateService , private builder: FormBuilder ) {

      this.translateService.get(['EDIT_EVALUATION_ERROR', 'EDIT_EVALUATION_SUCCESS']).subscribe((values) => {
        // this.addAddressError = values.SIGNUP_ERROR;
        // this.addAdressSuccessString = values.SIGNUP_SUCCESS;
      })

      this.myForm = builder.group({
        'moral': ['', [Validators.required , Validators.pattern("[1-5]{1}")]],
        'appearnce': ['', [Validators.required , Validators.pattern("[1-5]{1}")]],
        'speed': ['', [Validators.required ,Validators.pattern("[1-5]{1}")]],
        'commitment': ['', [Validators.required  , Validators.pattern("[1-5]{1}")]],
        'excellence': ['', [Validators.required , Validators.pattern("[1-5]{1}")]],
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptainEvaluationPage');
  }

  editEvaluation(){

  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }

}
