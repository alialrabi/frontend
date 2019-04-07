import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../../providers/auth/account.service';
import { CaptainService } from '../../providers/auth/captain.service';
import { AgencyCaptainsPage } from '../agency-captains/agency-captains';
import { AssignCaptainsPage } from '../assign-captains/assign-captains';
import { CaptainAssignDetailsPage } from '../captain-assign-details/captain-assign-details';
import { EditAssignCaptainPage } from '../edit-assign-captain/edit-assign-captain';

/**
 * Generated class for the SubAssignDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub-assign-details',
  templateUrl: 'sub-assign-details.html',
})
export class SubAssignDetailsPage {

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


  id = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private loading: LoadingController, public translateService: TranslateService, public accountService: AccountService, public captainService: CaptainService) {

    this.assign = navParams.get("item");
    this.from = navParams.get("from");
    this.captain = navParams.get("captain");
    this.agency = navParams.get("agency");

    if (this.from == 'AgencyCaptainsPage') {
      this.id = this.assign.lastAssignId;
    } else {
      this.id = this.assign.id;
    }


    this.translateService.get(['PLEASE_WAIT', 'MORE_DATA']).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
      this.moreData = values.MORE_DATA
    })

    this.platform.registerBackButtonAction(() => {

      if (this.from == 'AgencyCaptainsPage') {
        this.navCtrl.setRoot(AgencyCaptainsPage, { item: this.agency });
      } else {
        this.navCtrl.setRoot(CaptainAssignDetailsPage, { item: this.captain });
      }



    });


    this.getSubAssign(0);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {


      this.getSubAssign(this.pageNum);


      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }
  getSubAssign(pageNum) {

    let load;
    if (pageNum == 0) {

      load = this.loading.create({
        content: this.pleaseWait


      })
      load.present()
      this.assingCaptains = [];
    }
    this.captainService.getSubAssignes(this.id, pageNum).subscribe(
      res => {
        console.log(res);
        
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
  back() {
    if (this.from == 'AgencyCaptainsPage') {
      this.navCtrl.setRoot(AgencyCaptainsPage, { item: this.agency });
    } else {
      this.navCtrl.setRoot(CaptainAssignDetailsPage, { item: this.captain });
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubAssignDetailsPage');
  }
  convertToTime(time) {
    let timeInt = parseInt(time);
    let minutes = Math.trunc((timeInt / (1000 * 60)) % 60);
    let hours = Math.trunc(timeInt / (1000 * 60 * 60));
    let hoursStr = (hours < 10) ? "0" + hours : hours;
    let minutesStr = (minutes < 10) ? "0" + minutes : minutes;

    return hoursStr + ":" + minutesStr;
  }

  editAssign(assign){
    this.navCtrl.setRoot(EditAssignCaptainPage, { subAssign: assign , agency:this.agency , captain:this.captain , from:this.from , suberAssign:this.assign });
  }

}
