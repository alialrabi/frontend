import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { CaptainService } from '../../providers/auth/captain.service';
import { AddCaptainPage } from '../add-captain/add-captain';
import { CaptainsMapPage } from '../captains-map/captains-map';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { TranslateService } from '@ngx-translate/core';
import { CaptainEvaluationPage } from '../captain-evaluation/captain-evaluation';

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
 public pleaseWait;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private loading: LoadingController ,public translateService: TranslateService,private app: App, private principal: Principal, public captainService:CaptainService) {
    //this.getAllCaptains();

    this.translateService.get(['PLEASE_WAIT']).subscribe((values) => {
      
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
      this.account = account;

      load.dismiss()


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
      
    }).catch((err) =>{
      load.dismiss()
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptainsPage');
  }

 getAllCaptains(){

  let load = this.loading.create({
    content: this.pleaseWait


  })
  load.present()

  this.captainsList = [];
  this.captainService.getAll().subscribe(res => {
    console.log(res);
    

    this.captainsList = res;
    load.dismiss();

  },err =>{
    console.log(err);
    load.dismiss();
    

  })
 }
 getAgencyCaptains(){

  let load = this.loading.create({
    content: this.pleaseWait


  })
  load.present()

  this.captainsList = [];
  this.captainService.getByAgencyId(this.account.id).subscribe(res => {
    console.log(res);
    

    this.captainsList = res;
    load.dismiss();

  },err =>{
    console.log(err);
    load.dismiss();

  })
 }

 add(){
  this.navCtrl.setRoot(AddCaptainPage);

 }
 openMap(){
   this.navCtrl.setRoot(CaptainsMapPage)
 }

 openEvaluation(captain){
   this.navCtrl.setRoot(CaptainEvaluationPage , {item : captain});
 }

//  openMenu(){
//   this.menu.open("authenticated");
//  }

}
