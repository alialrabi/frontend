import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AccountService } from '../../providers/auth/account.service';
import { AddAgencyPage } from '../add-agency/add-agency';
import { AssignCaptainsPage } from '../assign-captains/assign-captains';
import { AgencyCaptainsPage } from '../agency-captains/agency-captains';
import { MyApp } from '../../app/app.component';

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

  constructor(public navCtrl: NavController,public navParams: NavParams 
     ,public accountService:AccountService) {

    this.getAllCaptains();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgenciesPage');
  }

  getAllCaptains(){
    this.agenciesList = [];
    this.accountService.getAllAgency().subscribe(res => {
      console.log(res);
      
  
      this.agenciesList = res;
  
    },err =>{
      console.log(err);
      
  
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
