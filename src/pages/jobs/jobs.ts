import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { AdminDashboardPage } from '../admin-dashboard/admin-dashboard';
import { TranslateService } from '@ngx-translate/core';
import { JobService } from '../../providers/auth/job.service';

/**
 * Generated class for the JobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {

  isLoading = false;


  public jobsList = [];

  public pleaseWait;
  pageNum = 1;
  moreData = 'Loading more data...'


  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform
    , private loading: LoadingController, public translateService: TranslateService, public jobService: JobService) {


    this.translateService.get(['PLEASE_WAIT', 'MORE_DATA']).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
      this.moreData = values.MORE_DATA
    })
    if (this.platform.is('cordova') && this.platform.is("android")) {
      this.platform.registerBackButtonAction(() => {
        this.navCtrl.setRoot(AdminDashboardPage);

      });
    }
    this.getAllJobs(0);
  }

  ionViewDidLoad() {
  }

  getAllJobs(pageNum) {
    if (!this.isLoading) {
      this.isLoading = true;
      let load;
      if (pageNum == 0) {
        load = this.loading.create({
          content: this.pleaseWait


        })
        load.present()
        this.jobsList = [];
      }
      //this.agenciesList = [];
      this.jobService.getAllJobs(pageNum).subscribe(res => {

        if (pageNum == 0) {
          this.jobsList = res;

          load.dismiss();
        } else {
          if (res.length > 0) {
            this.pageNum++;
          }
          res.forEach(element => {
            this.jobsList.push(element);
          });
        }
        this.isLoading = false;
      }, err => {
        if (pageNum == 0) {
          load.dismiss();
        }

      })
    }
  }

  doInfinite(infiniteScroll) {

    setTimeout(() => {

      this.getAllJobs(this.pageNum);

      infiniteScroll.complete();
    }, 1000);
  }



}
