import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, AlertController, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';
import { CaptainsPage } from '../captains/captains';
import { MyApp } from '../../app/app.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Builder } from 'selenium-webdriver';
import { AccountService } from '../../providers/auth/account.service';
import { SubAssignDetailsPage } from '../sub-assign-details/sub-assign-details';

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
  side = "left";
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

  pageNum = 1;
  moreData = 'Loading more data...'
  deleteSubTitle = '';
  deleteSubMessage = '';
  ok = '';
  cancel = '';
  deleteSuccess = '';
  deleteError = ''
  adminUnAssignMessage = ''
  periodFinishMessage = ''
  adminDeletedAllDays = ''

  constructor(public navCtrl: NavController,  public toastCtrl: ToastController, public _alert: AlertController , public navParams: NavParams, private builder: FormBuilder, public platform: Platform, private loading: LoadingController, public translateService: TranslateService, public accountService: AccountService, public captainService: CaptainService) {

    this.captain = navParams.get("item");
    if(this.language == 'en'){
      this.side = "right";
    }else{
      this.side = "left";
    }

    var CurrentYear = new Date().getFullYear()
    this.maxDate = CurrentYear + 2;

    this.myForm = builder.group({
      //'userId':['', [Validators.required ]],
      'captainId': ['', []],
      'agencyId': ['', []],
      'startDate': ['', []],
      'endDate': ['', []],

    });


    this.translateService.get(['PLEASE_WAIT', 'MORE_DATA' , 'DELETE_SUB_TITLE' , 'DELETE_SUB_MESSAGE' , 'DONE' , 'CANCEL' , 'DELETE_SUBASSIGN_SUCCESS' , 'DELETE_SUBASSIGN_ERROR' , 'PERIOD_FINISHED_MESSAGE' , 'ADMIN_UNASSIGN_MESSAGE' , 'ADMIN_DELETED_ALL_DAYS']).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
      this.moreData = values.MORE_DATA
      this.deleteSubTitle = values.DELETE_SUB_TITLE
      this.deleteSubMessage  =values.DELETE_SUB_MESSAGE
      this.ok = values.DONE
      this.cancel = values.CANCEL
      this.deleteSuccess = values.DELETE_SUBASSIGN_SUCCESS
      this.deleteError = values.DELETE_SUBASSIGN_ERROR
      this.periodFinishMessage = values.PERIOD_FINISHED_MESSAGE
      this.adminUnAssignMessage = values.ADMIN_UNASSIGN_MESSAGE
      this.adminDeletedAllDays = values.ADMIN_DELETED_ALL_DAYS
    })

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(CaptainsPage);

    });


    this.getCaptainAssignes(0);
    if (this.captain == null || this.captain == undefined) {
      this.getAllCaptains();
      this.getAllAgencyies();
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {


      this.getCaptainAssignes(this.pageNum);


      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
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

  getCaptainAssignes(pageNum) {

    let load;
    if (pageNum == 0) {

      load = this.loading.create({
        content: this.pleaseWait


      })
      load.present()
      this.assingCaptains = [];
    }

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




    this.captainService.getCaptainAssignDetails(this.seaarchFilter, pageNum).subscribe(
      res => {
        if (pageNum == 0) {
          this.assingCaptains = res;
          load.dismiss();
        } else {
          if (res.length > 0) {
            this.pageNum++;
          }
          res.forEach(element => {
            this.assingCaptains.push(element);
          });
        }

      }, err => {

        console.log(err, 'errorrrr');
        if (pageNum == 0) {
          load.dismiss();
        }


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
    this.myForm.get("captainId").setValue("");
    this.myForm.get("agencyId").setValue("");
    this.myForm.get("startDate").setValue("");
    this.myForm.get("endDate").setValue("");
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
  assignDetails(assign) {
    this.navCtrl.setRoot(SubAssignDetailsPage, { item: assign, from: "CaptainAssignDetailsPage", captain: this.captain });
  }
  DeleteSub(sub) {

    let alert = this._alert.create({
      title: this.deleteSubTitle,
      message: this.deleteSubMessage,
      buttons: [
        {
          text: this.ok,
          handler: () => {
            this.deleteSubAssign(sub)
          }
        },
        {
          text: this.cancel,
          handler: () => {
            
          }
        }
      ]
    });
    alert.present();



  }
  deleteSubAssign(assign){
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.captainService.deleteSubAssign(assign.id).subscribe(res =>{
      load.dismiss();
      let toast = this.toastCtrl.create({
        message: this.deleteSuccess,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.getCaptainAssignes(0);
      this.pageNum = 1;
    },err =>{
      console.log(err , 'errror');
      let toast = this.toastCtrl.create({
        message: this.deleteError,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
      load.dismiss();
      
    })
  }
  getStatus(message){
    console.log(message);
    
    let result = "";
    if(message == "This Captain is unAssigned because the Admin is unassign him"){
      result = this.adminUnAssignMessage
      console.log("ssssssss");
      
    }else if(message == "the admin deleted all assign days"){
      result = this.adminDeletedAllDays
    }else if(message == "The assign period is finished"){
      result = this.periodFinishMessage
    }else{
      result = message
    }
    return result;
  }

}
