import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController, ToastController, Platform } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { CaptainService } from '../../providers/auth/captain.service';
import { TranslateService } from '@ngx-translate/core';
import { AgencyCaptainsPage } from '../agency-captains/agency-captains';
import { SubAssignDetailsPage } from '../sub-assign-details/sub-assign-details';
import { DatePicker } from '@ionic-native/date-picker';

/**
 * Generated class for the EditAssignCaptainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-assign-captain',
  templateUrl: 'edit-assign-captain.html',
})
export class EditAssignCaptainPage {

  myForm: FormGroup;

  assingOrderSuccess = null;
  assignOrderError = null;
  public pleaseWait;


  public assign = {
    date: "",
    startTime: "",
    endTime: "",
    id: "",

  };
  public user = null;

  language = MyApp.language
  direction = MyApp.direction

  public maxDate;
  public minDate;

  fromToday = "today";

  agency = null;
  captain = null;
  from = null;
  suberAssign = null;

  endDateValue = '';
  endTimeValue = '';
  startTimeValue = '';

  date;

  yesterday;
  today;
  selectedDate;
  formatedDate;
  isCordova = false;
  cancelText = ''
  doneText = ""

  constructor(public navCtrl: NavController, public navParams: NavParams,private principal: Principal, private app: App, private loading: LoadingController, private builder: FormBuilder, public captainService: CaptainService, public toastCtrl: ToastController,public datePicker:DatePicker , public platform: Platform, public translateService: TranslateService) {

    this.isCordova = this.platform.is("cordova");

    this.assign = this.navParams.get("subAssign");
    //this.lastAssign = this.navParams.get("item");
    let dateString = this.assign.date+"T00:00:00";
    this.date = new Date(dateString);
    console.log(this.date);
    
    this.endDateValue = this.assign.date;

    this.endTimeValue = this.assign.endTime;
    this.startTimeValue = this.assign.startTime;
    this.selectedDate = this.assign.date;
    this.formatedDate = this.assign.date;

    this.today = new Date();
    this.yesterday = new Date(this.today);
    this.yesterday.setDate(this.today.getDate() - 1);


    this.agency = this.navParams.get("agency");
    this.captain = this.navParams.get("captain");
    this.from = this.navParams.get("from");
    this.suberAssign = this.navParams.get("suberAssign");

    console.log('edit agency ', this.agency);


    // var CurrentYear = new Date().getFullYear()
    // this.maxDate = CurrentYear + 1;
    // this.minDate = CurrentYear;

    this.translateService.get(['SELECTION_DONE' ,"SELECTION_CANCEL" , 'EDIT_ASSIGN_ORDER_ERROR', 'EDIT_ASSIGN_ORDER_SUCCESS', 'PLEASE_WAIT']).subscribe((values) => {
      this.assignOrderError = values.EDIT_ASSIGN_ORDER_ERROR;
      this.assingOrderSuccess = values.EDIT_ASSIGN_ORDER_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
      this.cancelText = values.SELECTION_CANCEL
      this.doneText = values.SELECTION_DONE
    })



    this.myForm = builder.group({
      //'endDate': ['', [Validators.required]],
      'startTime': ['', [Validators.required]],
      'endTime': ['', [Validators.required]],
      //'fromToday': ['', [Validators.required]]

    });

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(SubAssignDetailsPage, { item: this.suberAssign , captain: this.captain , from: this.from , agency:this.agency });

    });

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

    console.log(strDate , "strDate");
    

    return strDate;
  }

  dateSelected(event) {
    this.selectedDate = event;
    this.formatedDate = this.formatDate(this.selectedDate);
    console.log(this.formatedDate);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAssignCaptainPage');
  }
  editAssignCaptain() {
    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()



    let assignCaptains = {
      id: this.assign.id,
      date: null,
      startTime: this.myForm.get("startTime").value,
      endTime: this.myForm.get("endTime").value,
    }
    if(this.selectedDate == this.assign.date){
      assignCaptains.date = this.assign.date
    }else{
      assignCaptains.date = this.formatDate(this.selectedDate);
    }
    
    this.captainService.editAssignCaptains(assignCaptains).subscribe(
      res => {
        let toast = this.toastCtrl.create({
          message: this.assingOrderSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        load.dismiss()
        //this.navCtrl.push(AgenciesPage);
        this.app.getRootNavs()[0].setRoot(AgencyCaptainsPage, { item: this.agency });
      }, err => {

        let displayError = this.assignOrderError;

        let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'middle'
        });
        toast.present();
        load.dismiss()

      }
    )


  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
  back() {
    this.navCtrl.setRoot(SubAssignDetailsPage, { item: this.suberAssign , captain: this.captain , from: this.from , agency:this.agency });
  }
  validateChange() {

    if (this.endTimeValue == this.assign.endTime && this.startTimeValue == this.assign.startTime && this.endDateValue == this.formatedDate) {
      return true;
    } else {
      return false;
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
          this.assign.startTime = '';
          this.assign.startTime += date.getHours() > 9 ? date.getHours() : '0'+date.getHours()
          this.assign.startTime += ":";
          this.assign.startTime += date.getMinutes() > 9 ? date.getMinutes() : '0'+date.getMinutes()
          console.log( this.assign.startTime);
          
          
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
          this.assign.endTime = '';
            this.assign.endTime += date.getHours() > 9 ? date.getHours() : '0'+date.getHours()
            this.assign.endTime += ":";
            this.assign.endTime += date.getMinutes() > 9 ? date.getMinutes() : '0'+date.getMinutes()
          console.log(this.assign.endTime);
          
          
           //event.target.value = date 
  
          },
        err => console.log('Error occurred while getting date: ' + err)
    )
  }
  
}
