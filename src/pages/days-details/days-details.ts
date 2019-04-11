import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
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

  from = null;
  captain = null;
  agency = null;


  agencyId = 0;
  captainId = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private loading: LoadingController, public translateService: TranslateService, public accountService: AccountService, public captainService: CaptainService) {

    this.from = navParams.get("from");
    this.captain = navParams.get("captain");
    this.agency = navParams.get("agency");
    this.agencyId = navParams.get("agencyId");
    this.captainId = navParams.get("captainId");

    this.translateService.get(['PLEASE_WAIT', 'MORE_DATA']).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
      this.moreData = values.MORE_DATA
    })

    this.platform.registerBackButtonAction(() => {
      console.log(this.from);
      
      if (this.from != 'CaptainDetailsPage') {
        this.navCtrl.setRoot(AgencyDetailsPage, { item: this.agency });
      } else {
        this.navCtrl.setRoot(CaptainDetailsPage, { item: this.captain });
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
  back() {
    console.log(this.from);
    
    if (this.from != 'CaptainDetailsPage') {
      this.navCtrl.setRoot(AgencyDetailsPage, { item: this.agency });
    } else {
      this.navCtrl.setRoot(CaptainDetailsPage, { item: this.captain });
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

}
