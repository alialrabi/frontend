import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CaptainService } from '../../providers/auth/captain.service';
import { AddCaptainPage } from '../add-captain/add-captain';
import { CaptainsMapPage } from '../captains-map/captains-map';

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

  constructor(public navCtrl: NavController, public navParams: NavParams , public captainService:CaptainService) {
    this.getAllCaptains();
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

 add(){
  this.navCtrl.push(AddCaptainPage);

 }
 openMap(){
   this.navCtrl.push(CaptainsMapPage)
 }

}
