import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';
import { CaptainsPage } from '../captains/captains';
import { MyApp } from '../../app/app.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Builder } from 'selenium-webdriver';
import { AccountService } from '../../providers/auth/account.service';

/**
 * Generated class for the CaptainAssignDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-captain-assign-details',
  templateUrl: 'captain-assign-details.html',
})
export class CaptainAssignDetailsPage {

  assingCaptains = [];
  pleaseWait = null;
  captain;

  language = MyApp.language
  direction = MyApp.direction

  seachFlag = false;

  seaarchFilter = {
    captainId: null,
    startDate: null,
    endDate: null,
    agencyId: null
  }

  myForm: FormGroup;
  captainList = [];
  agenciesList = []
  public maxDate;

  constructor(public navCtrl: NavController, public navParams: NavParams, private builder: FormBuilder, public platform: Platform, private loading: LoadingController, public translateService: TranslateService, public accountService: AccountService, public captainService: CaptainService) {

    this.captain = navParams.get("item");

    var CurrentYear = new Date().getFullYear()
    this.maxDate = CurrentYear + 2;

    this.myForm = builder.group({
      //'userId':['', [Validators.required ]],
      'captainId': ['', []],
      'agencyId': ['', []],
      'startDate': ['', []],
      'endDate': ['', []],

    });


    this.translateService.get(['PLEASE_WAIT']).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
    })

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(CaptainsPage);

    });


    this.getCaptainAssignes();
    if (this.captain == null || this.captain == undefined) {
      this.getAllCaptains();
      this.getAllAgencyies();
    }
  }
  getAllCaptains() {
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.captainService.captainsPickList().subscribe(
      res => {

        console.log(res, "res");
        this.captainList = res;
        load.dismiss();

      }, err => {

        console.log(err, "err");
        load.dismiss();


      }
    )

  }
  getAllAgencyies() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.accountService.getAllAgency().subscribe(
      res => {

        console.log(res, "res");
        this.agenciesList = res;
        load.dismiss();

      }, err => {

        console.log(err, "err");
        load.dismiss();


      }
    )

  }

  getCaptainAssignes() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    if (this.captain == null || this.captain == undefined) {

      if (this.seaarchFilter.endDate == '' || this.seaarchFilter.endDate == undefined) {
        this.seaarchFilter.endDate = null;
      }
      if (this.seaarchFilter.startDate == '' || this.seaarchFilter.startDate == undefined) {
        this.seaarchFilter.startDate = null;
      }

      let captainId = this.myForm.get("captainId").value;
      if (captainId != null && captainId != undefined && captainId != '') {
        this.seaarchFilter.captainId = captainId;
      } else {
        this.seaarchFilter.captainId = null;
      }

      let agencyId = this.myForm.get("agencyId").value;
      if (agencyId != null && agencyId != undefined && agencyId != '') {
        this.seaarchFilter.agencyId = agencyId;
      } else {
        this.seaarchFilter.agencyId = null;
      }
      console.log('searchFilter', this.seaarchFilter);
    } else {
      this.seaarchFilter.endDate = null;
      this.seaarchFilter.startDate = null;
      this.seaarchFilter.agencyId = null;
      this.seaarchFilter.captainId = this.captain.id;
    }


    this.assingCaptains = [];

    this.captainService.getCaptainAssignDetails(this.seaarchFilter).subscribe(
      res => {
        this.assingCaptains = res;
        load.dismiss();

      }, err => {

        console.log(err, 'errorrrr');
        load.dismiss();


      }
    )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptainAssignDetailsPage');
  }
  back() {
    this.navCtrl.setRoot(CaptainsPage);
  }

  toggleSearch() {
    this.seachFlag = !this.seachFlag;
  }
  clear() {
    this.myForm.reset();
    this.seaarchFilter = {
      captainId: null,
      startDate: null,
      endDate: null,
      agencyId: null
    }

    this.myForm.get("startDate").clearValidators();
      this.myForm.get("startDate").updateValueAndValidity();

      this.myForm.get("endDate").clearValidators();
      this.myForm.get("endDate").updateValueAndValidity();

  }
  dateChange() {
    
    if ((this.seaarchFilter.startDate != null && this.seaarchFilter.startDate != undefined && this.seaarchFilter.startDate != '') || (this.seaarchFilter.endDate != null && this.seaarchFilter.endDate != undefined && this.seaarchFilter.endDate != '')) {
            
      this.myForm.get("startDate").clearValidators();
      this.myForm.get("startDate").updateValueAndValidity();
      this.myForm.get("startDate").setValidators(Validators.required);
      this.myForm.get("startDate").updateValueAndValidity();

      this.myForm.get("endDate").clearValidators();
      this.myForm.get("endDate").updateValueAndValidity();
      this.myForm.get("endDate").setValidators(Validators.required);
      this.myForm.get("endDate").updateValueAndValidity();
    } else {

      this.myForm.get("startDate").clearValidators();
      this.myForm.get("startDate").updateValueAndValidity();

      this.myForm.get("endDate").clearValidators();
      this.myForm.get("endDate").updateValueAndValidity();

    }
  }
  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }

}
