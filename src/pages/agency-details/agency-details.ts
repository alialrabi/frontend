import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../../providers/auth/account.service';
import { AgenciesPage } from '../agencies/agencies';
import { MyApp } from '../../app/app.component';
import { EditAgencyPage } from '../edit-agency/edit-agency';
import { DaysDetailsPage } from '../days-details/days-details';

/**
 * Generated class for the AgencyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agency-details',
  templateUrl: 'agency-details.html',
})
export class AgencyDetailsPage {

  public agencyDetail = {
    id:0,
    firstName:"",
    lastName:"",
    email:"",
    orderCount:'',
    creationDate:'2019-01-01T00:00:00.000Z',
    password:"",
    captains:[]
  };
  passwordEye="eye"
  language = MyApp.language
  direction = MyApp.direction


  public pleaseWait;
  item;
  togglePassword=true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform:Platform
    , private loading: LoadingController, public translateService: TranslateService, public accountService: AccountService) {

    this.item = navParams.get("item");

    this.translateService.get(['PLEASE_WAIT']).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
    })

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(AgenciesPage);
    });


    this.getAgency();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgencyDetailsPage');
  }
  getAgency() {
    let load = this.loading.create({
      content: this.pleaseWait
    })
    load.present()

    this.accountService.getAgencyDetails(this.item.id).subscribe(res => {
      console.log(res);
      this.agencyDetail = res
      load.dismiss();
    }, err => {
      console.log(err);
      load.dismiss();
    })
  }

  back(){
    this.navCtrl.setRoot(AgenciesPage);
  }

  getFormattedDate(dateString) {
    var date = new Date(dateString);
    var str = date.getFullYear() + "-";
    str +=  (date.getMonth() + 1) < 10 ? "0"+(date.getMonth() + 1) : (date.getMonth() + 1) ;
    str += "-";
    str += date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
    str += " "
    str += date.getHours() < 10 ? "0"+ date.getHours() :  date.getHours();
    str += ":";
    str += date.getMinutes() < 10 ? "0"+ date.getMinutes() :  date.getMinutes();
    str += ":";
    str += date.getSeconds() < 10 ? "0"+ date.getSeconds() :  date.getSeconds();
    return str;
}
togglePasswordMethod(){

  this.togglePassword = !this.togglePassword;
  if(this.togglePassword){
    this.passwordEye = "eye"
  }else{
    this.passwordEye = "eye-off"
  }
}
viewStars(password){
  console.log(password);
  
  let result = "";
  for(let i=0 ;i<password.length;i++){
    result += "*";

  }
  return result;
}

editAgency(){
  this.navCtrl.setRoot(EditAgencyPage , {item:this.agencyDetail , agency:this.item}); 
}
hoursDetails(sub){
  this.navCtrl.setRoot(DaysDetailsPage, {from:"AgencyDetailsPage" , agency: this.item, agencyId: this.agencyDetail.id , captainId:sub.id });
}

}
