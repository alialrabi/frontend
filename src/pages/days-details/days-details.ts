import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../../providers/auth/account.service';
import { CaptainService } from '../../providers/auth/captain.service';
import { CaptainDetailsPage } from '../captain-details/captain-details';
import { AgencyDetailsPage } from '../agency-details/agency-details';

/**
 * Generated class for the DaysDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-days-details',
  templateUrl: 'days-details.html',
})
export class DaysDetailsPage {

  assingCaptains = [];
  pleaseWait = null;
  assign;

  language = MyApp.language
  direction = MyApp.direction


  pageNum = 1;
  moreData = 'Loading more data...'

  deleteSubTitle = '';
  deleteSubMessage = '';
  ok = '';
  cancel = '';
  deleteSuccess = '';
  deleteError = ''

  from = null;
  captain = null;
  agency = null;


  agencyId = 0;
  captainId = 0;

  isCordova = false;

  frommain = ''
  agencymain = null

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public _alert: AlertController, public platform: Platform, private loading: LoadingController, public translateService: TranslateService, public accountService: AccountService, public captainService: CaptainService) {

    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.isCordova = true;
    }

    this.frommain = navParams.get("frommain");
    this.agencymain = navParams.get("agency");

    this.from = navParams.get("from");
    this.captain = navParams.get("captain");
    this.agency = navParams.get("agency");
    this.agencyId = navParams.get("agencyId");
    this.captainId = navParams.get("captainId");

    this.translateService.get(['PLEASE_WAIT', 'MORE_DATA', 'DELETE_SUB_TITLE', 'DELETE_SUB_MESSAGE', 'DONE', 'CANCEL', 'DELETE_SUBASSIGN_SUCCESS', 'DELETE_SUBASSIGN_ERROR']).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
      this.moreData = values.MORE_DATA

      this.deleteSubTitle = values.DELETE_SUB_TITLE
      this.deleteSubMessage = values.DELETE_SUB_MESSAGE
      this.ok = values.DONE
      this.cancel = values.CANCEL
      this.deleteSuccess = values.DELETE_SUBASSIGN_SUCCESS
      this.deleteError = values.DELETE_SUBASSIGN_ERROR
    })

    this.platform.registerBackButtonAction(() => {
      console.log(this.from);

      if (this.from != 'CaptainDetailsPage') {
        this.navCtrl.setRoot(AgencyDetailsPage, { item: this.agency });
      } else {
        this.navCtrl.setRoot(CaptainDetailsPage, { item: this.captain, from: this.frommain, agency: this.agencymain });
      }




    });


    this.getSubAssign();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaysDetailsPage');
  }
  getSubAssign() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.assingCaptains = [];

    this.captainService.getSubAssignesToCaptainWithAgency(this.captainId, this.agencyId).subscribe(
      res => {
        console.log(res);

        this.assingCaptains = res;
        load.dismiss();


      }, err => {

        console.log(err, 'errorrrr');
        load.dismiss();
      }
    )

  }
  getSubAssignAfterDelete(load) {

    this.assingCaptains = [];

    this.captainService.getSubAssignesToCaptainWithAgency(this.captainId, this.agencyId).subscribe(
      res => {
        console.log(res);

        this.assingCaptains = res;
        load.dismiss();


      }, err => {

        console.log(err, 'errorrrr');
        load.dismiss();
      }
    )

  }
  back() {
    console.log(this.from);

    if (this.from != 'CaptainDetailsPage') {
      this.navCtrl.setRoot(AgencyDetailsPage, { item: this.agency });
    } else {
      this.navCtrl.setRoot(CaptainDetailsPage, { item: this.captain, from: this.frommain, agency: this.agencymain });
    }


  }
  convertToTime(time) {
    let timeInt = parseInt(time);
    let minutes = Math.trunc((timeInt / (1000 * 60)) % 60);
    let hours = Math.trunc(timeInt / (1000 * 60 * 60));
    let hoursStr = (hours < 10) ? "0" + hours : hours;
    let minutesStr = (minutes < 10) ? "0" + minutes : minutes;

    return hoursStr + ":" + minutesStr;
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
  deleteSubAssign(assign) {
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.captainService.deleteSubAssign(assign.id).subscribe(res => {
      //      load.dismiss();
      let toast = this.toastCtrl.create({
        message: this.deleteSuccess,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.getSubAssignAfterDelete(load);
    }, err => {
      console.log(err, 'errror');
      let toast = this.toastCtrl.create({
        message: this.deleteError,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
      load.dismiss();

    })
  }

}
