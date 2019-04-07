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

  constructor(public navCtrl: NavController, public _alert: AlertController , public navParams: NavParams, public platform: Platform, private principal: Principal, private app: App, private loading: LoadingController, public toastCtrl: ToastController, public captainService: CaptainService, public translateService: TranslateService) {

    this.agency = this.navParams.get("item");

    console.log('agency 3', this.agency);


    this.translateService.get(['UN_ASSIGN_CAPTAIN_ERROR', 'UN_ASSIGN_CAPTAIN_SUCCESS', 'PLEASE_WAIT', 'MORE_DATA' 
    , 'UNASSIGN_ALERT_TITLE' , 'UNASSIGN_ALERT_MESSAGE' , 'YES' ,
     'CANCEL' , 'FROM_WHEN_MESSAGE','FROM_TODAY','FROM_TOMMOROW']).subscribe((values) => {
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

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.principal.identity().then((account) => {
      console.log(account);
      load.dismiss();

      if (account === null) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {
        this.user = account;
        this.getAgencyCaptains(0);

      }
    }).catch((err) => {
      console.log(err, 'err')
      load.dismiss();
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AgencyCaptainsPage');
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {


      this.getAgencyCaptains(this.pageNum);


      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }

  getAgencyCaptains(pageNum) {
    let load;
    if (pageNum == 0) {

      load = this.loading.create({
        content: this.pleaseWait


      })
      load.present()
      this.captainsList = [];
    }
    let agencyId = 0;
    if (this.agency == null || this.agency == undefined) {
      agencyId = this.user.id
    } else {
      agencyId = this.agency.id;
    }
    this.captainService.getByAgencyId(agencyId, pageNum).subscribe(res => {
      console.log(res);

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

    }, err => {
      console.log(err);
      if (pageNum == 0) {
        load.dismiss();
      }

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
  fromWhenDialog(captain){
    let alert = this._alert.create({
      title: this.unAssignAlertTilte,
      message: this.fromWhenMessage,
      buttons: [
        {
          text: this.todayMessage,
          handler: () => {
            this.doUnAssingCaptain(captain , 'today');
          }
        },
        {
          text: this.tommorowMessage,
          handler: () => {
            this.doUnAssingCaptain(captain , 'tommorow');
          }
        }
      ]
    });
    alert.present();
  }

  doUnAssingCaptain(captain , day) {
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.captainService.unAssignCaptain(captain.id , day).subscribe(
      res => {
        load.dismiss();
        this.getAgencyCaptains(0);

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
    this.navCtrl.setRoot(SubAssignDetailsPage, { item: captain, from: "AgencyCaptainsPage" , agency:this.agency });
  }

  back() {
    this.navCtrl.setRoot(AgenciesPage);
  }
}
