import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, Platform, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Principal } from '../../providers/auth/principal.service';
import { FirstRunPage } from '../pages';
import { OrderService } from '../../providers/auth/order.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CaptainService } from '../../providers/auth/captain.service';
import { MyApp } from '../../app/app.component';

/**
 * Generated class for the AdminDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-dashboard',
  templateUrl: 'admin-dashboard.html',
})
export class AdminDashboardPage {

  seachFlag = false;
  account;
  statistic;
  pleaseWait;
  myForm: FormGroup;
  captainList = [];

  seaarchFilter = {
    captainId: null,
    startDate: null,
    endDate: null
  }
  public maxDate;
  language = MyApp.language
  direction = MyApp.direction

  okText = ''
  cancelText = ''
  doneText = ""
  counter = 0;
  exitMessage = ''

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public platform: Platform, public captainService: CaptainService, private builder: FormBuilder, private orderServic: OrderService, public app: App, private loading: LoadingController, public translateService: TranslateService, public principal: Principal) {
    this.translateService.get(['EXIT_MESSAGE', 'PLEASE_WAIT', "SELECTION_CANCEL", "SELECTION_OK", 'SELECTION_DONE']).subscribe((values) => {
      this.pleaseWait = values.PLEASE_WAIT
      this.okText = values.SELECTION_OK
      this.cancelText = values.SELECTION_CANCEL
      this.doneText = values.SELECTION_DONE
      this.exitMessage = values.EXIT_MESSAGE
    })

    var CurrentYear = new Date().getFullYear()
    this.maxDate = CurrentYear + 2;

    this.myForm = builder.group({
      //'userId':['', [Validators.required ]],
      'captainId': ['', []],
      'startDate': ['', []],
      'endDate': ['', []],

    });

    if (this.platform.is('cordova') && this.platform.is("android")) {
      this.platform.registerBackButtonAction(() => {

        if (this.counter == 0) {
          this.counter++;

          let toast = this.toastCtrl.create({
            message: this.exitMessage,
            duration: 3000,
            position: "bottom",
          });
          toast.present();

          setTimeout(() => { this.counter = 0 }, 3000)
        } else {
          // console.log("exitapp");
          this.platform.exitApp();
        }

      });
    }
    this.getAdminStatistcs();
    this.getAllCaptains();

  }

  ngOnInit() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.principal.identity().then((account) => {
      console.log(account);
      load.dismiss();
      if (account === null) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {

        this.account = account;

      }
    }).catch((err) => {
      load.dismiss();
    });
  }

  toggleSearch() {
    this.seachFlag = !this.seachFlag;
  }

  getAllCaptains() {
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.captainService.captainsPickList().subscribe(
      res => {

        console.log(res, "res");
        this.captainList = res;
        load.dismiss();

      }, err => {

        console.log(err, "err");
        load.dismiss();


      }
    )

  }


  getAdminStatistcs() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    if (this.seaarchFilter.endDate == '' || this.seaarchFilter.endDate == undefined) {
      this.seaarchFilter.endDate = null;
    }
    if (this.seaarchFilter.startDate == '' || this.seaarchFilter.startDate == undefined) {
      this.seaarchFilter.startDate = null;
    }

    let captainId = this.myForm.get("captainId").value;
    if (captainId != null && captainId != undefined && captainId != '') {
      this.seaarchFilter.captainId = captainId;
    } else {
      this.seaarchFilter.captainId = null;
    }
    console.log(this.seaarchFilter, 'filter');


    this.orderServic.getAdminStatistics(this.seaarchFilter).subscribe(
      res => {
        console.log(res, 'res');

        this.statistic = res;
        load.dismiss();
      }, err => {
        console.log(err, 'err');
        load.dismiss();


      }
    )

  }

  clear() {
    this.myForm.get("captainId").setValue("");
    this.myForm.get("startDate").setValue("");
    this.myForm.get("endDate").setValue("");
    this.seaarchFilter = {
      captainId: null,
      startDate: null,
      endDate: null
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminDashboardPage');
  }

}
