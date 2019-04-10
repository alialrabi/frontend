import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, App, AlertController, ToastController, LoadingController, Platform } from 'ionic-angular';

import { Settings } from '../../providers/providers';
import { Principal } from '../../providers/auth/principal.service';
import { FirstRunPage } from '../pages';
import { AccountService } from '../../providers/auth/account.service';
import { CaptainService } from '../../providers/auth/captain.service';
import { MyApp } from '../../app/app.component';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  myForm: FormGroup;

  // Our local settings object
  options: any;

  settingsReady = false;

  form: FormGroup;

  public account;

  public confirmAutoAssignMessage;
  public confirmAutoAssignTitle;
  public changeAutoAssignSuccessString;
  public changeAutoAssignError;

  public confirmChaneLanguage;
  public confirmChaneLanguageTitle;
  public changeChaneLanguageSuccessString;
  public changeChaneLanguageError;

  public confirmWorkingMessage;
  public confirmWorkingTitle;
  public changeWorkingSuccessString;
  public changeWorkingError;


  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SettingsPage;

  userType = '';
  public pleaseWait = '';
  langKey = MyApp.language;

  doneMessage = '';
  cancelMessage = '';

  changeAtMaketMessage;
  changeAtMarketTitle;
  changeAtMarketSuccess;
  changeAtMarketError;

  public captain;

  constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public principal: Principal,
    public app: App,
    private platform: Platform,
    private captainService: CaptainService,
    private loading: LoadingController,
    public toastCtrl: ToastController,
    public accountService: AccountService,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    public translate: TranslateService) {

    this.translate.get(['AUTO_ASSIGN_ERROR', 'AUTO_ASSIGN_SUCCESS',
      'AUTO_ASSIGN_CONFIRM_MESSAGE', 'AUTO_ASSIGN_CONFIRM_TITLE', 'WORKING_ERROR', 'WORKING_SUCCESS',
      'WORKING_CONFIRM_MESSAGE', 'WORKING_CONFIRM_TITLE', 'CHANGE_LANGUAGE_ERROR', 'CHANGE_LANGUAGE_SUCCESS',
      'CHANGE_LANGUAGE_MESSAGE', 'CHANGE_LANGUAGE_CONFIRM_TITLE' , 'DONE' , 'CANCEL' , 'PLEASE_WAIT' , 'CHANGE_AT_MARKET_TITLE' , 'CHANGE_AT_MARKET_SUCCESS' , 'CHANGE_AT_MARKET_MESSAGE' , 'CHANGE_AT_MARKET_ERROR' ]).subscribe((values) => {
        this.changeAutoAssignError = values.AUTO_ASSIGN_ERROR
        this.changeAutoAssignSuccessString = values.AUTO_ASSIGN_SUCCESS
        this.confirmAutoAssignMessage = values.AUTO_ASSIGN_CONFIRM_MESSAGE
        this.confirmAutoAssignTitle = values.AUTO_ASSIGN_CONFIRM_TITLE

        this.changeWorkingError = values.WORKING_ERROR
        this.changeWorkingSuccessString = values.WORKING_SUCCESS
        this.confirmWorkingMessage = values.WORKING_CONFIRM_MESSAGE
        this.confirmWorkingTitle = values.WORKING_CONFIRM_TITLE

        this.changeChaneLanguageError = values.CHANGE_LANGUAGE_ERROR
        this.changeChaneLanguageSuccessString = values.CHANGE_LANGUAGE_SUCCESS
        this.confirmChaneLanguage = values.CHANGE_LANGUAGE_MESSAGE
        this.confirmChaneLanguageTitle = values.CHANGE_LANGUAGE_CONFIRM_TITLE

        this.pleaseWait = values.PLEASE_WAIT

        this.doneMessage = values.DONE
        this.cancelMessage = values.CANCEL

        this.changeAtMaketMessage = values.CHANGE_AT_MARKET_MESSAGE
        this.changeAtMarketTitle = values.CHANGE_AT_MARKET_TITLE
        this.changeAtMarketSuccess = values.CHANGE_AT_MARKET_SUCCESS
        this.changeAtMarketError = values.CHANGE_AT_MARKET_ERROR

        
      })


    this.myForm = formBuilder.group({
      'autoAssign': ['', []],
      'working': ['', []],
      'atMarket':['' , []],
      'langKey': [this.langKey, []]
    });



  }
  ngOnInit() {
    this.validateUser(true);

  }
  validateUser(flag) {
    console.log("++++++ 99999 -------");

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()


    this.principal.identity().then((account) => {
      console.log(account);
      load.dismiss();
      if (account === null) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);

      } else if (account.authorities[0] == 'ROLE_AGENCY') {
        console.log("555555555 ************** 555555555555555");

        this.account = account;
        if (flag) {
          this.myForm.get("autoAssign").setValue(this.account.autoAssign)
        }
        this.userType = 'Agency'

      }
      else if (account.authorities[0] == 'ROLE_CAPTAIN') {

        this.account = account;

        this.userType = 'Captain'

        this.getCaptain(this.account.id);

      }else if (account.authorities[0] == 'ROLE_USER' && account.authorities.length == 1) {

        this.account = account;

        this.userType = 'User'
      }else{

        this.account = account;

        this.userType = 'Admin'

      }
    }).catch((err) => {
      load.dismiss();
    });
  }

  getCaptain(captainId) {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.captainService.getByUserId(captainId).subscribe(
      data => {
        this.captain = data;


        load.dismiss();

        this.myForm.get("working").setValue(!this.captain.working)
        this.myForm.get("atMarket").setValue(this.captain.atMarket)



      }, err => {
        console.log(err, 'errror');
        load.dismiss();

      }
    )

  }

  changeAssign() {
    console.log("**************");

    console.log(this.myForm.get('autoAssign').value);


    let alert = this.alertCtrl.create({
      title: this.confirmAutoAssignTitle,
      message: this.confirmAutoAssignMessage,
      buttons: [{
        text: this.doneMessage,
        handler: () => {

          console.log("----------------------");


          this.updateAutoAssign();

        }
      }, {


        text: this.cancelMessage,
        handler: () => {

          //nothing
        }


      }]
    });
    alert.present();

  }

  changeAtMarket(){

    let alert = this.alertCtrl.create({
      title: this.changeAtMarketTitle,
      message: this.changeAtMaketMessage,
      buttons: [{
        text: this.doneMessage,
        handler: () => {

          console.log("----------------------");


          this.updateAtMarket();

        }
      }, {


        text: this.cancelMessage,
        handler: () => {

          //nothing
        }


      }]
    });
    alert.present();



  }

  updateAtMarket(){

    
    let obj = {
      captainId: this.captain.id,
      atMarket: this.myForm.get('atMarket').value
    }

    this.captainService.updateAtMarket(obj).subscribe((res) => {
      console.log(res);
      // var id = res;
      console.log("00000000000000000000000000");
      this.captain.atMarket = obj.atMarket;
      // this.validateUser(false);
      let toast = this.toastCtrl.create({
        message: this.changeAtMarketSuccess,
        duration: 3000,
        position: 'top'
      });
      toast.present();

    }, (err) => {
      // Unable to sign up
      let displayError = this.changeAtMarketError;
      let toast = this.toastCtrl.create({
        message: displayError,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });



  }
  changeWorking() {

    let alert = this.alertCtrl.create({
      title: this.confirmWorkingTitle,
      message: this.confirmWorkingMessage,
      buttons: [{
        text: this.doneMessage,
        handler: () => {

          console.log("----------------------");


          this.updateWorking();

        }
      }, {


        text: this.cancelMessage,
        handler: () => {

          //nothing
        }


      }]
    });
    alert.present();


  }
  updateWorking() {

    let obj = {
      captainId: this.captain.id,
      working: !this.myForm.get('working').value
    }

    this.captainService.updateWorking(obj).subscribe((res) => {
      console.log(res);
      // var id = res;
      console.log("00000000000000000000000000");
      this.captain.working = obj.working;
      // this.validateUser(false);
      let toast = this.toastCtrl.create({
        message: this.changeWorkingSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();

    }, (err) => {
      // Unable to sign up
      let displayError = this.changeWorkingError;
      let toast = this.toastCtrl.create({
        message: displayError,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });


  }

  updateAutoAssign() {
    console.log("****************          ssssssssssssssssss");

    let obj = {
      userId: this.account.id,
      autoAssign: this.myForm.get('autoAssign').value
    }

    this.accountService.updateAutoAssign(obj).subscribe((res) => {
      console.log(res);
      // var id = res;
      console.log("00000000000000000000000000");
      this.account.autoAssign = obj.autoAssign;
      // this.validateUser(false);
      let toast = this.toastCtrl.create({
        message: this.changeAutoAssignSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();

    }, (err) => {
      // Unable to sign up
      let displayError = this.changeAutoAssignError;
      let toast = this.toastCtrl.create({
        message: displayError,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });


  }

  changeLanguage() {
    if (this.langKey != MyApp.language) {

    let alert = this.alertCtrl.create({
      title: this.confirmChaneLanguageTitle,
      message: this.confirmChaneLanguage,
      buttons: [{
        text: this.doneMessage,
        handler: () => {

          console.log("----------------------");


          this.updateLanguage();

        }
      }, {


        text: this.cancelMessage,
        handler: () => {

          //nothing
        }


      }]
    });
    alert.present();
  }

  }

  updateLanguage() {
    console.log(this.myForm.get('langKey').value, this.langKey);

    if (this.langKey != MyApp.language) {

      let obj = {
        id: this.account.id,
        language: this.langKey
      }

      this.accountService.updateLanguage(obj).subscribe((res) => {
        console.log(res);
        // var id = res;
        console.log("00000000000000000000000000");
        let toast = this.toastCtrl.create({
          message: this.changeChaneLanguageSuccessString,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        this.app.getRootNavs()[0].setRoot(SettingsPage);
        window.location.reload();

        // this.validateUser(false);
        

      }, (err) => {
        // Unable to sign up
        let displayError = this.changeChaneLanguageError;
        let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });


    }

  }





  // _buildForm() {
  //   let group: any = {
  //     option1: [this.options.option1],
  //     option2: [this.options.option2],
  //     option3: [this.options.option3]
  //   };

  //   switch (this.page) {
  //     case 'main':
  //       break;
  //     case 'profile':
  //       group = {
  //         option4: [this.options.option4]
  //       };
  //       break;
  //   }
  //   this.form = this.formBuilder.group(group);

  //   // Watch the form for changes, and
  //   this.form.valueChanges.subscribe((v) => {
  //     this.settings.merge(this.form.value);
  //   });
  // }

  // ionViewDidLoad() {
  //   // Build an empty form for the template to render
  //   this.form = this.formBuilder.group({});
  // }

  // ionViewWillEnter() {
  //   // Build an empty form for the template to render
  //   this.form = this.formBuilder.group({});

  //   this.page = this.navParams.get('page') || this.page;
  //   this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

  //   this.translate.get(this.pageTitleKey).subscribe((res) => {
  //     this.pageTitle = res;
  //   })

  //   this.settings.load().then(() => {
  //     this.settingsReady = true;
  //     this.options = this.settings.allSettings;

  //     this._buildForm();
  //   });
  // }

  // ngOnChanges() {
  //   console.log('Ng All Changes');
  // }


}
