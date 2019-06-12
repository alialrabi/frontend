import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, App } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { TranslateService } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';
import { CaptainsPage } from '../captains/captains';
import { EditCaptainPage } from '../edit-captain/edit-captain';
import { Principal } from '../../providers/auth/principal.service';
import { FirstRunPage } from '../pages';
import { DaysDetailsPage } from '../days-details/days-details';
import { AgencyCaptainsPage } from '../agency-captains/agency-captains';
import { UserOrdersPage } from '../user-orders/user-orders';
import { UserOrderDetailPage } from '../user-order-detail/user-order-detail';

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
  passwordEye = "eye-off"



  language = MyApp.language
  direction = MyApp.direction


  public pleaseWait;
  item;
  user;
  userType="agency";

  isCordova = false;

  from = ''
  agency = null;
  myVar = ''
  order = null
  userType1 = ''

  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App , public principal:Principal , public platform: Platform,
    private loading: LoadingController, public translateService: TranslateService, public captainService: CaptainService) {

    this.item = navParams.get("item");
    this.from = navParams.get("from");
    this.agency = navParams.get("agency");
    this.myVar = navParams.get("myVar");
    this.order = navParams.get("order");
    this.userType1 = navParams.get("userType");

    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.isCordova = true;
    }

    this.translateService.get(['PLEASE_WAIT']).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
    })

    this.platform.registerBackButtonAction(() => {
      if(this.from == "AgencyCaptainsPage"){
        this.navCtrl.setRoot(AgencyCaptainsPage , {item:this.agency});
      }else if (this.from == "UserOrdersPage"){
        this.navCtrl.setRoot(UserOrdersPage , {myVar:this.myVar});
      }else if (this.from == "UserOrderDetailPage"){
        this.navCtrl.setRoot(UserOrderDetailPage , {item:this.order , userType:this.userType1 , myVar:this.myVar});
      }
      else{
      this.navCtrl.setRoot(CaptainsPage);
      }
    });

    //this.getCaptain();
  }

  ngOnInit() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.principal.identity().then((account) => {
 //     load.dismiss();

      if (account === null) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
        load.dismiss()
      } else if (account.authorities[0] == 'ROLE_AGENCY') {
        this.user = account;
        this.userType = 'agency'
        this.getCaptain(this.user.id , load);

      }else if (account.authorities[0] == 'ROLE_USER' && account.authorities.length == 1) {
        
        this.user = account;
        this.userType = 'user'
        this.getCaptain(this.user.id , load);

      }
      else{
        this.user = account;
        this.userType = 'admin'
        this.getCaptain(0 , load)
      }
    }).catch((err) => {
      console.log(err, 'err')
      load.dismiss();
    });
  }


  ionViewDidLoad() {
  }


  getCaptain(agencyId , load) {
    // let load = this.loading.create({
    //   content: this.pleaseWait
    // })
    // load.present()

    this.captainService.getCaptainDetails(this.item.id , agencyId).subscribe(res => {
      this.captain = res
      if(this.from == 'UserOrdersPage' || this.from == 'UserOrderDetailPage'){
        this.captain.agencies = []
      }
      load.dismiss();
    }, err => {
      console.log(err);
      load.dismiss();
    })
  }

  back() {
    if(this.from == "AgencyCaptainsPage"){
      this.navCtrl.setRoot(AgencyCaptainsPage , {item:this.agency});
    }else if (this.from == "UserOrdersPage"){
      this.navCtrl.setRoot(UserOrdersPage , {myVar:this.myVar});
    }else if (this.from == "UserOrderDetailPage"){
      this.navCtrl.setRoot(UserOrderDetailPage , {item:this.order , userType:this.userType1 , myVar:this.myVar});
    }
    else{
    this.navCtrl.setRoot(CaptainsPage);
    }
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
      this.passwordEye =  "eye-off"
    } else {
      this.passwordEye = "eye"
    }
  }
  viewStars(password) {

    let result = "";
    for (let i = 0; i < password.length; i++) {
      result += "*";

    }
    return result;
  }

  editCaptain() {
    this.navCtrl.setRoot(EditCaptainPage, { item: this.captain, captain: this.item , agency:this.agency , frommain:this.from });
  }
  hoursDetails(sub){
    this.navCtrl.setRoot(DaysDetailsPage, {from:"CaptainDetailsPage" , captain: this.item, agencyId: sub.id , captainId:this.captain.id , agency:this.agency , frommain:this.from });
  }

}
