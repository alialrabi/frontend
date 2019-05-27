import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, Platform } from 'ionic-angular';
import { AccountService } from '../../providers/auth/account.service';
import { AddAgencyPage } from '../add-agency/add-agency';
import { AssignCaptainsPage } from '../assign-captains/assign-captains';
import { AgencyCaptainsPage } from '../agency-captains/agency-captains';
import { MyApp } from '../../app/app.component';
import { TranslateService } from '@ngx-translate/core';
import { AgencyDetailsPage } from '../agency-details/agency-details';
import { AdminDashboardPage } from '../admin-dashboard/admin-dashboard';

/**
 * Generated class for the AgenciesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agencies',
  templateUrl: 'agencies.html',
})
export class AgenciesPage {

  isLoading = false;


  public agenciesList = [];

  public pleaseWait;
  pageNum = 1;
  moreData = 'Loading more data...'


  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform
    , private loading: LoadingController, public translateService: TranslateService, public accountService: AccountService) {


    this.translateService.get(['PLEASE_WAIT', 'MORE_DATA']).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
      this.moreData = values.MORE_DATA
    })
    if (this.platform.is('cordova') && this.platform.is("android")) {
      this.platform.registerBackButtonAction(() => {
        this.navCtrl.setRoot(AdminDashboardPage);

      });
    }
    this.getAllAgincies(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgenciesPage');
  }

  getAllAgincies(pageNum) {
    if (!this.isLoading) {
      this.isLoading = true;
      let load;
      if (pageNum == 0) {
        load = this.loading.create({
          content: this.pleaseWait


        })
        load.present()
        this.agenciesList = [];
      }
      //this.agenciesList = [];
      this.accountService.getAllAgencyWithPagination(pageNum).subscribe(res => {
        console.log(res);

        if (pageNum == 0) {
          this.agenciesList = res;

          load.dismiss();
        } else {
          if (res.length > 0) {
            this.pageNum++;
          }
          res.forEach(element => {
            this.agenciesList.push(element);
          });
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

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {

      this.getAllAgincies(this.pageNum);

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }


  add() {
    this.navCtrl.setRoot(AddAgencyPage);

  }

  assingCaptains(agency) {
    this.navCtrl.setRoot(AssignCaptainsPage, { item: agency });
  }
  viewCaptains(agency) {
    this.navCtrl.setRoot(AgencyCaptainsPage, { item: agency });
  }
  agencyDetails(agency) {
    this.navCtrl.setRoot(AgencyDetailsPage, { item: agency });
  }

  //  openMenu(){
  //   this.myApp.openMenu();
  //  }
}
