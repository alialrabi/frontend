import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, App } from 'ionic-angular';
import { CaptainService } from '../../providers/auth/captain.service';
import { TranslateService } from '@ngx-translate/core';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { AssignCaptainsPage } from '../assign-captains/assign-captains';
import { MyApp } from '../../app/app.component';
import { AgenciesPage } from '../agencies/agencies';
import { EditAssignCaptainPage } from '../edit-assign-captain/edit-assign-captain';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, private principal: Principal, private app: App, private loading: LoadingController, public toastCtrl: ToastController, public captainService: CaptainService, public translateService: TranslateService) {

    this.agency = this.navParams.get("item");

    console.log('agency 3' , this.agency);
    

    this.translateService.get(['UN_ASSIGN_CAPTAIN_ERROR', 'UN_ASSIGN_CAPTAIN_SUCCESS', 'PLEASE_WAIT']).subscribe((values) => {
      this.unassignCaptainError = values.UN_ASSIGN_CAPTAIN_ERROR;
      this.unassignCaptainSuccess = values.UN_ASSIGN_CAPTAIN_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
    })



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
        this.getAgencyCaptains();

      }
    }).catch((err) => {
      console.log(err, 'err')
      load.dismiss();
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AgencyCaptainsPage');
  }

  getAgencyCaptains() {
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.captainsList = [];
    let agencyId = 0;
    if (this.agency == null || this.agency == undefined) {
      agencyId = this.user.id
    } else {
      agencyId = this.agency.id;
    }
    this.captainService.getByAgencyId(agencyId).subscribe(res => {
      console.log(res);


      this.captainsList = res;
      load.dismiss();

    }, err => {
      console.log(err);
      load.dismiss();

    })
  }

  unAssingCaptain(captain) {
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.captainService.unAssignCaptain(captain.id).subscribe(
      res => {
        load.dismiss();
        this.getAgencyCaptains();

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

  editAssign(captain){
    console.log('agency 2' , this.agency);
    
    this.navCtrl.setRoot(EditAssignCaptainPage , {item:captain , agency:this.agency});
  }

  back(){
    this.navCtrl.setRoot(AgenciesPage);
  }
}
