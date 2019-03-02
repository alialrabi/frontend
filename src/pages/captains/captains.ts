import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CaptainService } from '../../providers/auth/captain.service';
import { AddCaptainPage } from '../add-captain/add-captain';
import { CaptainsMapPage } from '../captains-map/captains-map';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';

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

 public  captainsList = [] ;
 userType='';
 public account = null;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private app: App, private principal: Principal, public captainService:CaptainService) {
    //this.getAllCaptains();
  }

  ngOnInit() {
    this.principal.identity().then((account) => {
      console.log(account);
      this.account = account;
      
      if (account === null ) {
         this.app.getRootNavs()[0].setRoot(FirstRunPage);
      }else if(account.authorities[0] == 'ROLE_AGENCY'){
        this.userType = 'agency'
        this.getAgencyCaptains();
      }
       else {

       this.userType = 'admin';
       this.getAllCaptains();
        
      }
      console.log(this.userType);
      
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptainsPage');
  }

 getAllCaptains(){
  this.captainsList = [];
  this.captainService.getAll().subscribe(res => {
    console.log(res);
    

    this.captainsList = res;

  },err =>{
    console.log(err);
    

  })
 }
 getAgencyCaptains(){
  this.captainsList = [];
  this.captainService.getByAgencyId(this.account.id).subscribe(res => {
    console.log(res);
    

    this.captainsList = res;

  },err =>{
    console.log(err);
    

  })
 }

 add(){
  this.navCtrl.push(AddCaptainPage);

 }
 openMap(){
   this.navCtrl.push(CaptainsMapPage)
 }

//  openMenu(){
//   this.menu.open("authenticated");
//  }

}
