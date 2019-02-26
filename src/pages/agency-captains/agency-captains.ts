import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams , public toastCtrl: ToastController , public captainService:CaptainService , public translateService:TranslateService) {

    this.agency = this.navParams.get("item");

    this.translateService.get(['UN_ASSIGN_CAPTAIN_ERROR', 'UN_ASSIGN_CAPTAIN_SUCCESS']).subscribe((values) => {
      this.unassignCaptainError = values.UN_ASSIGN_CAPTAIN_ERROR;
      this.unassignCaptainSuccess = values.UN_ASSIGN_CAPTAIN_SUCCESS;
    })

    this.getAgencyCaptains();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgencyCaptainsPage');
  }

  getAgencyCaptains(){
    this.captainsList = [];
    this.captainService.getByAgencyId(this.agency.id).subscribe(res => {
      console.log(res);
      
  
      this.captainsList = res;
  
    },err =>{
      console.log(err);
      
  
    })
   }

   unAssingCaptain(captain){
     this.captainService.unAssignCaptain(captain.id).subscribe(
       res =>{
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

       }
     );
   }
}
