import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { TranslateService } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';
import { CaptainsPage } from '../captains/captains';
import { EditCaptainPage } from '../edit-captain/edit-captain';

/**
 * Generated class for the CaptainDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-captain-details',
  templateUrl: 'captain-details.html',
})
export class CaptainDetailsPage {

  public captain = {
    id: 0,
    name: "",
    code: "",
    phone: "",
    email: "",
    orderCount: '',
    creationDate: '2019-01-01T00:00:00.000Z',
    password: "",
    agencies:[]
  };
  togglePassword = true;
  passwordEye = "eye"



  language = MyApp.language
  direction = MyApp.direction


  public pleaseWait;
  item;


  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
    private loading: LoadingController, public translateService: TranslateService, public captainService: CaptainService) {

    this.item = navParams.get("item");

    this.translateService.get(['PLEASE_WAIT']).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
    })

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(CaptainsPage);
    });

    this.getCaptain();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptainDetailsPage');
  }


  getCaptain() {
    let load = this.loading.create({
      content: this.pleaseWait
    })
    load.present()

    this.captainService.getCaptainDetails(this.item.id).subscribe(res => {
      console.log(res);
      this.captain = res
      load.dismiss();
    }, err => {
      console.log(err);
      load.dismiss();
    })
  }

  back() {
    this.navCtrl.setRoot(CaptainsPage);
  }

  getFormattedDate(dateString) {
    var date = new Date(dateString);
    var str = date.getFullYear() + "-";
    str += (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    str += "-";
    str += date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    str += " "
    str += date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    str += ":";
    str += date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    str += ":";
    str += date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return str;
  }
  togglePasswordMethod() {

    this.togglePassword = !this.togglePassword;
    if (this.togglePassword) {
      this.passwordEye = "eye"
    } else {
      this.passwordEye = "eye-off"
    }
  }
  viewStars(password) {
    console.log(password);

    let result = "";
    for (let i = 0; i < password.length; i++) {
      result += "*";

    }
    return result;
  }

  editCaptain() {
    this.navCtrl.setRoot(EditCaptainPage, { item: this.captain, captain: this.item });
  }

}
