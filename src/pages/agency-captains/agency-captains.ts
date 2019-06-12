import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, App, Platform, AlertController } from 'ionic-angular';
import { CaptainService } from '../../providers/auth/captain.service';
import { TranslateService } from '@ngx-translate/core';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { AssignCaptainsPage } from '../assign-captains/assign-captains';
import { MyApp } from '../../app/app.component';
import { AgenciesPage } from '../agencies/agencies';
import { EditAssignCaptainPage } from '../edit-assign-captain/edit-assign-captain';
import { SubAssignDetailsPage } from '../sub-assign-details/sub-assign-details';
import { CaptainDetailsPage } from '../captain-details/captain-details';

/**
 * Generated class for the AgencyCaptainsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agency-captains',
  templateUrl: 'agency-captains.html',
})
export class AgencyCaptainsPage {

  isLoading = false;

  public captainsList = [];

  public agency = null;

  public user = null;

  unassignCaptainError;
  unassignCaptainSuccess;
  public pleaseWait;

  language = MyApp.language
  direction = MyApp.direction

  pageNum = 1;
  moreData = 'Loading more data...'

  unAssignAlertTilte = '';
  unAssignAlertMessage = '';
  yes = '';
  cancel = '';
  fromWhenMessage = '';
  todayMessage = '';
  tommorowMessage = '';

  isCordova = false;


  constructor(public navCtrl: NavController, public _alert: AlertController, public navParams: NavParams, public platform: Platform, private principal: Principal, private app: App, private loading: LoadingController, public toastCtrl: ToastController, public captainService: CaptainService, public translateService: TranslateService) {

    this.agency = this.navParams.get("item");

    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.isCordova = true;
    }



    this.translateService.get(['UN_ASSIGN_CAPTAIN_ERROR', 'UN_ASSIGN_CAPTAIN_SUCCESS', 'PLEASE_WAIT', 'MORE_DATA'
      , 'UNASSIGN_ALERT_TITLE', 'UNASSIGN_ALERT_MESSAGE', 'YES',
      'CANCEL', 'FROM_WHEN_MESSAGE', 'FROM_TODAY', 'FROM_TOMMOROW']).subscribe((values) => {
        this.unassignCaptainError = values.UN_ASSIGN_CAPTAIN_ERROR;
        this.unassignCaptainSuccess = values.UN_ASSIGN_CAPTAIN_SUCCESS;
        this.pleaseWait = values.PLEASE_WAIT
        this.moreData = values.MORE_DATA
        this.unAssignAlertTilte = values.UNASSIGN_ALERT_TITLE
        this.unAssignAlertMessage = values.UNASSIGN_ALERT_MESSAGE
        this.yes = values.YES
        this.cancel = values.CANCEL
        this.fromWhenMessage = values.FROM_WHEN_MESSAGE
        this.todayMessage = values.FROM_TODAY
        this.tommorowMessage = values.FROM_TOMMOROW
      })

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(AgenciesPage);

    });


  }
  ngOnInit() {

    // let load = this.loading.create({
    //   content: this.pleaseWait


    // })
    // load.present()

    this.principal.identity().then((account) => {
      //      load.dismiss();

      if (account === null) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {
        this.user = account;
        this.getAgencyCaptains(0);

      }
    }).catch((err) => {
      console.log(err, 'err')
      //     load.dismiss();
    });
  }


  ionViewDidLoad() {
  }

  doInfinite(infiniteScroll) {

    setTimeout(() => {


      this.getAgencyCaptains(this.pageNum);


      infiniteScroll.complete();
    }, 1000);
  }

  getAgencyCaptains(pageNum) {
    if (!this.isLoading) {
      this.isLoading = true;
      let load;
      if (pageNum == 0) {

        load = this.loading.create({
          content: this.pleaseWait


        })
        load.present()
        this.captainsList = [];
        this.pageNum = 1;
      }
      let agencyId = 0;
      if (this.agency == null || this.agency == undefined) {
        agencyId = this.user.id
      } else {
        agencyId = this.agency.id;
      }
      this.captainService.getByAgencyId(agencyId, pageNum).subscribe(res => {

        if (pageNum == 0) {
          this.captainsList = res;
        } else {
          if (res.length > 0) {
            this.pageNum++;
          }

          res.forEach(element => {
            this.captainsList.push(element);

          });
        }
        if (pageNum == 0) {
          load.dismiss();
        }

        this.isLoading = false;

      }, err => {
        console.log(err);
        if (pageNum == 0) {
          load.dismiss();
        }

      })
    }
  }
  getAgencyCaptainsAfterUnAssign(pageNum, load) {

    this.captainsList = [];

    let agencyId = 0;
    if (this.agency == null || this.agency == undefined) {
      agencyId = this.user.id
    } else {
      agencyId = this.agency.id;
    }
    this.pageNum = 1;
    this.captainService.getByAgencyId(agencyId, pageNum).subscribe(res => {

      this.captainsList = res;



      load.dismiss();


    }, err => {
      console.log(err);
      load.dismiss();


    })
  }


  unAssingCaptain(captain) {
    let alert = this._alert.create({
      title: this.unAssignAlertTilte,
      message: this.unAssignAlertMessage,
      buttons: [
        {
          text: this.yes,
          handler: () => {
            this.fromWhenDialog(captain);
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
  fromWhenDialog(captain) {
    let alert = this._alert.create({
      title: this.unAssignAlertTilte,
      message: this.fromWhenMessage,
      buttons: [
        {
          text: this.todayMessage,
          handler: () => {
            this.doUnAssingCaptain(captain, 'today');
          }
        },
        {
          text: this.tommorowMessage,
          handler: () => {
            this.doUnAssingCaptain(captain, 'tommorow');
          }
        }
      ]
    });
    alert.present();
  }

  doUnAssingCaptain(captain, day) {
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.captainService.unAssignCaptain(captain.id, day).subscribe(
      res => {
        //     load.dismiss();
        this.getAgencyCaptainsAfterUnAssign(0, load);
        this.pageNum = 1;

        let toast = this.toastCtrl.create({
          message: this.unassignCaptainSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      },
      err => {

        let displayError = this.unassignCaptainError;

        let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'middle'
        });
        toast.present();
        load.dismiss();
      }
    );
  }

  add() {
    this.navCtrl.setRoot(AssignCaptainsPage);

  }

  assignDetails(captain) {
    this.navCtrl.setRoot(SubAssignDetailsPage, { item: captain, from: "AgencyCaptainsPage", agency: this.agency });
  }

  back() {
    this.navCtrl.setRoot(AgenciesPage);
  }
  captainDetails(captain) {
    this.navCtrl.setRoot(CaptainDetailsPage, { item: captain, from: "AgencyCaptainsPage", agency: this.agency });
  }
}
