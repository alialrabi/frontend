import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { AccountService } from '../../providers/auth/account.service';
import { AddAgencyPage } from '../add-agency/add-agency';
import { AssignCaptainsPage } from '../assign-captains/assign-captains';
import { AgencyCaptainsPage } from '../agency-captains/agency-captains';
import { MyApp } from '../../app/app.component';
import { TranslateService } from '@ngx-translate/core';

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

  public  agenciesList = [] ;

  public pleaseWait;


  constructor(public navCtrl: NavController,public navParams: NavParams 
     ,private loading: LoadingController , public translateService: TranslateService, public accountService:AccountService) {

    
    this.translateService.get(['PLEASE_WAIT']).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
    })
    this.getAllAgincies();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgenciesPage');
  }

  getAllAgincies(){
    let load = this.loading.create({
      content: this.pleaseWait
  
  
    })
    load.present()
    this.agenciesList = [];
    this.accountService.getAllAgency().subscribe(res => {
      console.log(res);
      
  
      this.agenciesList = res;
      load.dismiss();
    },err =>{
      console.log(err);
      load.dismiss();
  
    })
   }
  
   add(){
    this.navCtrl.push(AddAgencyPage);
  
   }

   assingCaptains(agency){
     this.navCtrl.push(AssignCaptainsPage , {item:agency});
   }
   viewCaptains(agency){
    this.navCtrl.push(AgencyCaptainsPage , {item:agency});
   }


  //  openMenu(){
  //   this.myApp.openMenu();
  //  }
}
