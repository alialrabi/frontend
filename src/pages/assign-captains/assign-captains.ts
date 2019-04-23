import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App, LoadingController, Platform, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';
import { AgenciesPage } from '../agencies/agencies';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { UserOrdersPage } from '../user-orders/user-orders';
import { AgencyCaptainsPage } from '../agency-captains/agency-captains';
import { MyApp } from '../../app/app.component';
import { DatePicker } from '@ionic-native/date-picker';

/**
 * Generated class for the AssignCaptainsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assign-captains',
  templateUrl: 'assign-captains.html',
})
export class AssignCaptainsPage {


  public captainList = [];
  myForm: FormGroup;

  assingOrderSuccess = null;
  assignOrderError = null;
  notFreeMessage = null;
  public pleaseWait;


  public agency = null;
  public user = null;

  language = MyApp.language
  direction = MyApp.direction

  public maxDate;
  public minDate;
  yesterday;
  today;
  lastSelectedDate;

  dates = [];
  selectedDate = new Date();

  startDate = '';
  endDate = '';

  startTime = '00:00'
  endTime = '00:00'
  timeValue = '2002-09-23T00:00:00.000';

  isCordova = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public datePicker: DatePicker, public platform: Platform, private principal: Principal, private app: App, private loading: LoadingController, private builder: FormBuilder, public captainService: CaptainService, public toastCtrl: ToastController, public translateService: TranslateService) {

    this.isCordova = this.platform.is("cordova");
    console.log(this.isCordova);


    this.agency = this.navParams.get("item");

    this.today = new Date();
    this.yesterday = new Date(this.today);
    this.yesterday.setDate(this.today.getDate() - 1);
    console.log(this.yesterday, 'yesterDay date');

    var CurrentYear = new Date().getFullYear()
    this.maxDate = CurrentYear + 1;
    this.minDate = CurrentYear;

    this.translateService.get(['ASSIGN_CAPTAIN_ERROR', 'NOT_FREE_ON_TIME', 'ASSIGN_CAPTAIN_SUCCESS', 'PLEASE_WAIT']).subscribe((values) => {
      this.assignOrderError = values.ASSIGN_CAPTAIN_ERROR;
      this.assingOrderSuccess = values.ASSIGN_CAPTAIN_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
      this.notFreeMessage = values.NOT_FREE_ON_TIME
    })


    this.myForm = builder.group({
      //'userId':['', [Validators.required ]],
      'captainIds': ['', [Validators.required]],
      // 'startDate': ['', [Validators.required]],
      // 'endDate': ['', [Validators.required]],
      'startTime': ['', []],
      'endTime': ['', []],

    });

    this.platform.registerBackButtonAction(() => {
      if (this.agency == null || this.agency == undefined) {
        this.navCtrl.setRoot(AgencyCaptainsPage);
      } else {
        this.navCtrl.setRoot(AgenciesPage);
      }
    });

    this.getAllCaptains();

  }
  formatDate(date) {
    let strDate = "";
    strDate += date.getFullYear();
    strDate += "-";
    if ((date.getMonth() + 1) < 10) {
      strDate += "0"
    }
    let month = date.getMonth() + 1;
    strDate += month;
    strDate += "-";
    if (date.getDate() < 10) {
      strDate += "0"
    }
    strDate += date.getDate();

    console.log(strDate, "strDate");


    return strDate;
  }

  add() {

    let date = {
      date: this.formatDate(this.selectedDate),
      startTime: this.myForm.get("startTime").value,
      endTime: this.myForm.get("endTime").value
    }
    this.dates.push(date)
    console.log(this.dates, 'dates');

    this.myForm.get("startTime").setValue("00:00");
    this.myForm.get("endTime").setValue("00:00");
    this.startTime = '00:00'
    this.endTime = '00:00'
    this.timeValue = '2002-09-23T00:00:00.000';
    console.log(this.dates, 'dartes');

  }

  dateSelected(event) {
    // console.log(event , "date");
    // console.log(this.selectedDate , '');

    // //console.log(this.myForm.get("startDate").value);


    // if(this.myForm.get("startTime").value != '' && this.myForm.get("endTime").value != '' ){

    //   let date = {
    //     date : this.lastSelectedDate,
    //     startTime:this.myForm.get("startTime").value,
    //     endTime:this.myForm.get("endTime").value
    //   }
    //   this.dates.push(date)
    //   this.myForm.get("startTime").setValue('');
    //   this.myForm.get("endTime").setValue("");

    //   console.log(this.dates , 'dartes');
    //   this.lastSelectedDate = event


    // }else if(this.myForm.get("startTime").value == '' && this.myForm.get("endTime").value == '' ){
    //   this.lastSelectedDate = event

    // }else{

    //   this.selectedDate = this.lastSelectedDate;

    //   let toast = this.toastCtrl.create({
    //     message: "ssssssssssssssss",
    //     duration: 3000,
    //     position: 'middle'
    //   });
    //   toast.present();


    // }

    console.log(event);

    this.selectedDate = event;

    //this.selectedDate.setDate(event.getDate());
    console.log(this.selectedDate);

  }

  ngOnInit() {
    this.principal.identity().then((account) => {
      console.log(account);

      if (account === null) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {
        this.user = account;

      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignCaptainsPage');
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
        load.dismiss()

      }, err => {

        console.log(err, "err");
        load.dismiss();


      }
    )

  }


  assignCaptain() {
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()


    let ids = this.myForm.get("captainIds").value;
    console.log(ids, 'ids');

    if (this.myForm.get("startTime").value != null && this.myForm.get("startTime").value != '') {
      let date = {
        date: this.formatDate(this.selectedDate),
        startTime: this.myForm.get("startTime").value,
        endTime: this.myForm.get("endTime").value
      }
      this.dates.push(date)
    }


    let assignCaptains = {
      agencyId: 0,
      captainsIds: ids,
      adminAssign: false,
      // endDate:this.myForm.get("endDate").value,
      // startDate:this.myForm.get("startDate").value,
      // startTime: this.myForm.get("startTime").value,
      // endTime: this.myForm.get("endTime").value
      subAssignModels: this.dates
    }
    if (this.agency == null || this.agency == undefined) {
      assignCaptains.agencyId = this.user.id
      assignCaptains.adminAssign = true;
    } else {
      assignCaptains.agencyId = this.agency.id;
    }

    this.captainService.assignCaptains(assignCaptains).subscribe(
      res => {
        let toast = this.toastCtrl.create({
          message: this.assingOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        load.dismiss()
        //this.navCtrl.push(AgenciesPage);
        if (this.agency == null || this.agency == undefined) {
          this.app.getRootNavs()[0].setRoot(AgencyCaptainsPage);
        } else {
          this.app.getRootNavs()[0].setRoot(AgenciesPage);
        }



      }, err => {

        console.log('errrrrrrrrrrror', err);

        if (err.error == 'captain is not free in this time') {

          this.myForm.get("startTime").setValue("00:00");
          this.myForm.get("endTime").setValue("00:00");
          this.startTime = '00:00'
          this.endTime = '00:00'
          this.timeValue = '2002-09-23T00:00:00.000';

          this.dates = [];

          let toast = this.toastCtrl.create({
            message: this.notFreeMessage,
            duration: 3000,
            position: 'top'
          });
          toast.present();
          load.dismiss()
        } else {


          let displayError = this.assignOrderError;

          let toast = this.toastCtrl.create({
            message: displayError,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          load.dismiss()
        }

      }
    )


  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
  back() {
    if (this.agency == null || this.agency == undefined) {
      this.navCtrl.setRoot(AgencyCaptainsPage);
    } else {
      this.navCtrl.setRoot(AgenciesPage);
    }

  }

  validateTimes() {
    if ((this.myForm.get("startTime").value != '' && this.myForm.get("endTime").value != '') || ((this.myForm.get("startTime").value == '' && this.myForm.get("endTime").value == '') && this.dates.length != 0)) {
      return false;
    } else {
      return true;
    }
  }

  showDateTimePicker(event) {
    this.datePicker.show({
      date: new Date(),
      mode: 'time',
      is24Hour: false,
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        console.log(date);
        this.startDate = '';
        this.startDate += date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
        this.startDate += ":";
        this.startDate += date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()
        console.log(this.startDate);


        //event.target.value = date 

      },
      err => console.log('Error occurred while getting date: ' + err)
    )
  }
  showDateTimePickerEnd(event) {
    this.datePicker.show({
      date: new Date(),
      mode: 'time',
      is24Hour: false,
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        console.log(date);
        this.endDate = '';
        this.endDate += date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
        this.endDate += ":";
        this.endDate += date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()
        console.log(this.endDate);


        //event.target.value = date 

      },
      err => console.log('Error occurred while getting date: ' + err)
    )
  }


}
