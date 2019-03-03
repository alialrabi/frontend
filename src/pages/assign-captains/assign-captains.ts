import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';
import { AgenciesPage } from '../agencies/agencies';

/**
 * Generated class for the AssignCaptainsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assign-captains',
  templateUrl: 'assign-captains.html',
})
export class AssignCaptainsPage {

  public captainList = [];
  myForm: FormGroup;

  assingOrderSuccess = null;
  assignOrderError = null;
  public pleaseWait;


  public agency = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App ,private loading: LoadingController ,private builder: FormBuilder, public captainService: CaptainService, public toastCtrl: ToastController, public translateService: TranslateService) {

    this.agency = this.navParams.get("item");

    this.translateService.get(['ASSIGN_ORDER_ERROR', 'ASSIGN_ORDER_SUCCESS' , 'PLEASE_WAIT']).subscribe((values) => {
      this.assignOrderError = values.ASSIGN_ORDER_ERROR;
      this.assingOrderSuccess = values.ASSIGN_ORDER_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
    })


    this.myForm = builder.group({
      //'userId':['', [Validators.required ]],
      'captainIds': ['', [Validators.required]],

    });

    this.getAllCaptains();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignCaptainsPage');
  }

  getAllCaptains() {
    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()

    
    this.captainService.getNotAssigned().subscribe(
      res => {

        console.log(res, "res");
        this.captainList = res;
        load.dismiss()

      }, err => {

        console.log(err, "err");
        load.dismiss();


      }
    )

  }


  assignCaptain() {
    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()


    let ids = this.myForm.get("captainIds").value;
    console.log(ids, 'ids');

    let assignCaptains = {
      agencyId: this.agency.id,
      captainsIds: ids
    }

    this.captainService.assignCaptains(assignCaptains).subscribe(
      res => {
        let toast = this.toastCtrl.create({
          message: this.assingOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        load.dismiss()
        //this.navCtrl.push(AgenciesPage);
        this.app.getRootNavs()[0].setRoot(AgenciesPage);

      }, err => {

        let displayError = this.assignOrderError;

        let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'middle'
        });
        toast.present();
        load.dismiss()

      }
    )


  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
}
