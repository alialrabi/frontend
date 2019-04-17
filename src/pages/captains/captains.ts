import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { CaptainService } from '../../providers/auth/captain.service';
import { AddCaptainPage } from '../add-captain/add-captain';
import { CaptainsMapPage } from '../captains-map/captains-map';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { TranslateService } from '@ngx-translate/core';
import { CaptainEvaluationPage } from '../captain-evaluation/captain-evaluation';
import { CaptainAssignDetailsPage } from '../captain-assign-details/captain-assign-details';
import { CaptainDetailsPage } from '../captain-details/captain-details';

/**
 * Generated class for the CaptainsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-captains',
  templateUrl: 'captains.html',
})
export class CaptainsPage {

  public captainsList = [];
  userType = '';
  public account = null;
  public pleaseWait;
  pageNum = 1;
  moreData = 'Loading more data...'

  constructor(public navCtrl: NavController, public navParams: NavParams, private loading: LoadingController, public translateService: TranslateService, private app: App, private principal: Principal, public captainService: CaptainService) {
    //this.getAllCaptains();

    this.translateService.get(['PLEASE_WAIT' , 'MORE_DATA']).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
      this.moreData = values.MORE_DATA
    })

  }

  ngOnInit() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.principal.identity().then((account) => {
      console.log(account);
      this.account = account;

      load.dismiss()


      if (account === null) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else if (account.authorities[0] == 'ROLE_AGENCY') {
        this.userType = 'agency'
        this.getAgencyCaptains(0);
      }
      else {

        this.userType = 'admin';
        this.getAllCaptains(0);

      }
      console.log(this.userType);

    }).catch((err) => {
      load.dismiss()
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptainsPage');
  }

  getAllCaptains(pageNum) {
    let load;
    if (pageNum == 0) {

      load = this.loading.create({
        content: this.pleaseWait


      })
      load.present()
      this.captainsList = [];
    }

    //this.captainsList = [];
    this.captainService.getAllToAdmin(pageNum).subscribe(res => {
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
  getAgencyCaptains(pageNum) {
    let load;
    if (pageNum == 0) {

      load = this.loading.create({
        content: this.pleaseWait


      })
      load.present()
      this.captainsList = [];
    }

    //this.captainsList = [];
    this.captainService.getByAgencyId(this.account.id, pageNum).subscribe(res => {
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

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {

      if (this.userType == 'agency') {

        this.getAgencyCaptains(this.pageNum)

      } else {


        this.getAllCaptains(this.pageNum);

      }


      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }


  add() {
    this.navCtrl.setRoot(AddCaptainPage);

  }
  openMap() {
    this.navCtrl.setRoot(CaptainsMapPage)
  }

  openEvaluation(captain) {
    this.navCtrl.setRoot(CaptainEvaluationPage, { item: captain });
  }
  viewAssignDetails(captain) {
    this.navCtrl.setRoot(CaptainAssignDetailsPage, { item: captain });
  }
  captainDetails(captain){
    this.navCtrl.setRoot(CaptainDetailsPage, { item: captain });
  }

  //  openMenu(){
  //   this.menu.open("authenticated");
  //  }

}
