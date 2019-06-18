import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController, Platform, AlertController, ToastController } from 'ionic-angular';
import { CaptainService } from '../../providers/auth/captain.service';
import { AddCaptainPage } from '../add-captain/add-captain';
import { CaptainsMapPage } from '../captains-map/captains-map';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { TranslateService } from '@ngx-translate/core';
import { CaptainEvaluationPage } from '../captain-evaluation/captain-evaluation';
import { CaptainAssignDetailsPage } from '../captain-assign-details/captain-assign-details';
import { CaptainDetailsPage } from '../captain-details/captain-details';
import { AdminDashboardPage } from '../admin-dashboard/admin-dashboard';
import { OrdersPage } from '../orders/orders';
import { MyApp } from '../../app/app.component';
import { AccountService } from '../../providers/auth/account.service';

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

  isLoading = false;

  language = MyApp.language
  direction = MyApp.direction

  public captainsList = [];
  userType = '';
  public account = null;
  public pleaseWait;
  pageNum = 1;
  moreData = 'Loading more data...'

  deleteTitle = ''
  deleteMessage = ''
  deleteString = ''
  cancel = ''
  deleteSuccess = ''
  deleteError = ''

  confirmDeleteMessage = ''
  deleteAnyWhere = ''

  constructor(public navCtrl: NavController, public navParams: NavParams, public _alert:AlertController , public accountService:AccountService , public toastCtrl : ToastController , public platform:Platform , private loading: LoadingController, public translateService: TranslateService, private app: App, private principal: Principal, public captainService: CaptainService) {
    //this.getAllCaptains();

    this.translateService.get(['PLEASE_WAIT', 'MORE_DATA' , 'CAPTAIN_DELETE_TITLE' , 'CAPTAIN_DELETE_MESSAGE' , 'CAPTAIN_DELETE_SUCCESS' , 'CAPTAIN_DELETE_ERROR' , 'DELETE' , 'CANCEL' , 'CONFIRM_CAPTAIN_DELETE_MESSAGE' , 'DELETE_ANY_WHERE' ]).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
      this.moreData = values.MORE_DATA
      this.deleteTitle = values.CAPTAIN_DELETE_TITLE
      this.deleteMessage = values.CAPTAIN_DELETE_MESSAGE
      this.deleteString = values.DELETE
      this.cancel = values.CANCEL
      this.deleteSuccess = values.CAPTAIN_DELETE_SUCCESS
      this.deleteError = values.CAPTAIN_DELETE_ERROR

      this.confirmDeleteMessage = values.CONFIRM_CAPTAIN_DELETE_MESSAGE
      this.deleteAnyWhere = values.DELETE_ANY_WHERE
    })
    if (this.platform.is('cordova') && this.platform.is("android")) {
      this.platform.registerBackButtonAction(() => {
        if(this.userType == 'admin'){
        this.navCtrl.setRoot(AdminDashboardPage);
        }else if(this.userType == 'agency'){
          this.navCtrl.setRoot(OrdersPage);
        }

      });
    }

  }

  ngOnInit() {

    // let load = this.loading.create({
    //   content: this.pleaseWait


    // })
    // load.present()

    this.principal.identity().then((account) => {
      this.account = account;

 //     load.dismiss()


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

    }).catch((err) => {
 //     load.dismiss()
    });
  }


  ionViewDidLoad() {
  }

  getAllCaptains(pageNum) {
    if (!this.isLoading) {
      this.isLoading = true;
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
        this.isLoading = false;
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
  }
  getAllCaptainsAfterDelete(pageNum , load) {
    
        this.captainsList = [];
      this.pageNum = 1;

      this.captainService.getAllToAdmin(pageNum).subscribe(res => {


          this.captainsList = res;
          load.dismiss();
        
      }, err => {
        console.log(err);
          load.dismiss();
        


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

    setTimeout(() => {

      if (this.userType == 'agency') {

        this.getAgencyCaptains(this.pageNum)

      } else {


        this.getAllCaptains(this.pageNum);

      }


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
  captainDetails(captain) {
    this.navCtrl.setRoot(CaptainDetailsPage, { item: captain });
  }
  DeleteCaptain(captain){

    
    let alert = this._alert.create({
      title: this.deleteTitle,
      message: this.deleteMessage,
      buttons: [
        {
          text: this.deleteString,
          handler: () => {
            this.delete(captain , false)
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
  confirmDeleteCaptain(captain){

    
    let alert = this._alert.create({
      title: this.deleteTitle,
      message: this.confirmDeleteMessage,
      buttons: [
        {
          text: this.deleteAnyWhere,
          handler: () => {
            this.delete(captain , true)
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
  delete(captain , flag){

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.captainService.delete(captain.id , flag).subscribe(
      res =>{

        if(res.status == 'deactivate'){
        this.accountService.deactivate(res.userId).subscribe(
          res =>{
            this.getAllCaptainsAfterDelete(0 , load);

            let toast = this.toastCtrl.create({
              message: this.deleteSuccess,
              duration: 3000,
              position: 'top'
            });
            toast.present();
    
            
          }, err =>{

            load.dismiss();

            let toast = this.toastCtrl.create({
              message: this.deleteError,
              duration: 3000,
              position: 'middle'
            });
            toast.present();
            
          }
        );

        }else if(res.status == 'delete'){
          this.accountService.delete(res.userId).subscribe(
            res =>{
              this.getAllCaptainsAfterDelete(0 , load);
  
              let toast = this.toastCtrl.create({
                message: this.deleteSuccess,
                duration: 3000,
                position: 'top'
              });
              toast.present();
      
              
            }, err =>{

              load.dismiss()

              let toast = this.toastCtrl.create({
                message: this.deleteError,
                duration: 3000,
                position: 'middle'
              });
              toast.present();
              
            }
          );
  
        }else{

          this.getAllCaptainsAfterDelete(0 , load);

        }

      }, err =>{
        load.dismiss();
        // const error = JSON.parse(err.error);
        // console.log(error);
        console.log(err);
        
        
      if (err.status === 400){
        this.confirmDeleteCaptain(captain)
      }else{
        let toast = this.toastCtrl.create({
          message: this.deleteError,
          duration: 3000,
          position: 'middle'
        });
        toast.present();
      }

      }
    )

  }

  //  openMenu(){
  //   this.menu.open("authenticated");
  //  }

}
