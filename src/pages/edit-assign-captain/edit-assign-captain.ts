import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController, ToastController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { CaptainService } from '../../providers/auth/captain.service';
import { TranslateService } from '@ngx-translate/core';
import { AgencyCaptainsPage } from '../agency-captains/agency-captains';

/**
 * Generated class for the EditAssignCaptainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-assign-captain',
  templateUrl: 'edit-assign-captain.html',
})
export class EditAssignCaptainPage {

  myForm: FormGroup;

  assingOrderSuccess = null;
  assignOrderError = null;
  public pleaseWait;


  public assign = {
    endDate: "",
    startTime: "",
    endTime: "",
    id: "",

  };
  public user = null;

  language = MyApp.language
  direction = MyApp.direction

  public maxDate;
  public minDate;

  fromToday = "today";

  agency = null;

  endDateValue = '';
  endTimeValue = '';
  startTimeValue = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, private principal: Principal, private app: App, private loading: LoadingController, private builder: FormBuilder, public captainService: CaptainService, public toastCtrl: ToastController, public translateService: TranslateService) {

    this.assign = this.navParams.get("item");
    //this.lastAssign = this.navParams.get("item");
    this.endDateValue = this.assign.endDate;
    this.endTimeValue = this.assign.endTime;
    this.startTimeValue = this.assign.startTime;


    this.agency = this.navParams.get("agency");

    console.log('edit agency ', this.agency);


    var CurrentYear = new Date().getFullYear()
    this.maxDate = CurrentYear + 1;
    this.minDate = CurrentYear;

    this.translateService.get(['EDIT_ASSIGN_ORDER_ERROR', 'EDIT_ASSIGN_ORDER_SUCCESS', 'PLEASE_WAIT']).subscribe((values) => {
      this.assignOrderError = values.EDIT_ASSIGN_ORDER_ERROR;
      this.assingOrderSuccess = values.EDIT_ASSIGN_ORDER_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
    })


    this.myForm = builder.group({
      'endDate': ['', [Validators.required]],
      'startTime': ['', [Validators.required]],
      'endTime': ['', [Validators.required]],
      'fromToday': ['', [Validators.required]]

    });
  }

  ngOnInit() {
    this.principal.identity().then((account) => {
      console.log(account);

      if (account === null) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {
        this.user = account;

      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAssignCaptainPage');
  }
  editAssignCaptain() {
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()


    let ids = [this.assign.id];
    console.log(ids, 'ids');

    let assignCaptains = {
      captainsIds: ids,
      endDate: this.myForm.get("endDate").value,
      startTime: this.myForm.get("startTime").value,
      endTime: this.myForm.get("endTime").value,
      fromToday: true
    }
    if (this.fromToday == 'today') {
      assignCaptains.fromToday = true
    } else {
      assignCaptains.fromToday = false
    }
    this.captainService.editAssignCaptains(assignCaptains).subscribe(
      res => {
        let toast = this.toastCtrl.create({
          message: this.assingOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        load.dismiss()
        //this.navCtrl.push(AgenciesPage);
        this.app.getRootNavs()[0].setRoot(AgencyCaptainsPage, { item: this.agency });
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
  back() {
    this.navCtrl.setRoot(AgencyCaptainsPage, { "item": this.agency });
  }
  validateChange() {

    if (this.endTimeValue == this.assign.endTime && this.startTimeValue == this.assign.startTime && this.endDateValue == this.assign.endDate) {
      return true;
    } else {
      return false;
    }
  }

}
