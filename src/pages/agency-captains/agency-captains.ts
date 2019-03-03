import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { CaptainService } from '../../providers/auth/captain.service';
import { TranslateService } from '@ngx-translate/core';

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

  public  captainsList = [] ;

  public agency = null;

  unassignCaptainError;
  unassignCaptainSuccess;
  public pleaseWait;


  constructor(public navCtrl: NavController, public navParams: NavParams ,private loading: LoadingController , public toastCtrl: ToastController , public captainService:CaptainService , public translateService:TranslateService) {

    this.agency = this.navParams.get("item");

    this.translateService.get(['UN_ASSIGN_CAPTAIN_ERROR', 'UN_ASSIGN_CAPTAIN_SUCCESS' , 'PLEASE_WAIT']).subscribe((values) => {
      this.unassignCaptainError = values.UN_ASSIGN_CAPTAIN_ERROR;
      this.unassignCaptainSuccess = values.UN_ASSIGN_CAPTAIN_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
    })

    this.getAgencyCaptains();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgencyCaptainsPage');
  }

  getAgencyCaptains(){
    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()
    this.captainsList = [];
    this.captainService.getByAgencyId(this.agency.id).subscribe(res => {
      console.log(res);
      
  
      this.captainsList = res;
      load.dismiss();
  
    },err =>{
      console.log(err);
      load.dismiss();
  
    })
   }

   unAssingCaptain(captain){
    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()
     this.captainService.unAssignCaptain(captain.id).subscribe(
       res =>{
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
}
