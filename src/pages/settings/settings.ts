import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, App, AlertController, ToastController } from 'ionic-angular';

import { Settings } from '../../providers/providers';
import { Principal } from '../../providers/auth/principal.service';
import { FirstRunPage } from '../pages';
import { AccountService } from '../../providers/auth/account.service';

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
  
  public account ;

  public confirmAutoAssignMessage;
  public confirmAutoAssignTitle;
  public changeAutoAssignSuccessString;
  public changeAutoAssignError;


  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SettingsPage;

  constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public principal:Principal,
    public app:App,
    public toastCtrl:ToastController,
    public accountService:AccountService,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    public translate: TranslateService) {

      this.translate.get(['AUTO_ASSIGN_ERROR', 'AUTO_ASSIGN_SUCCESS',
      'AUTO_ASSIGN_CONFIRM_MESSAGE' , 'AUTO_ASSIGN_CONFIRM_TITLE']).subscribe((values) => {
        this.changeAutoAssignError = values.AUTO_ASSIGN_ERROR
        this.changeAutoAssignSuccessString = values.AUTO_ASSIGN_SUCCESS
        this.confirmAutoAssignMessage = values.AUTO_ASSIGN_CONFIRM_MESSAGE
        this.confirmAutoAssignTitle = values.AUTO_ASSIGN_CONFIRM_TITLE
      })


      this.myForm = formBuilder.group({
        'autoAssign':['', [ ]],
        
      });



  }
  ngOnInit() {
    this.validateUser(true);
    
  }
  validateUser(flag){
    console.log("++++++ 99999 -------");
    
    this.principal.identity().then((account) => {
      console.log(account);
      
      if (account === null || account.authorities[0] != 'ROLE_AGENCY') {
         this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {
        console.log("555555555 ************** 555555555555555");
        

        this.account = account;
        if(flag){
        this.myForm.get("autoAssign").setValue(this.account.autoAssign)
        }
        
      }
    });
  }

  changeAssign(){
    console.log("**************");
    
    console.log(this.myForm.get('autoAssign').value);


    let alert = this.alertCtrl.create({
      title: this.confirmAutoAssignTitle,
      message:  this.confirmAutoAssignMessage,
      buttons: [{
        text: ' Done',
        handler: () => {

          console.log("----------------------");
          

        this.updateAutoAssign();
         
        }
      } , {


        text: ' Cancel',
        handler: () => {

          //nothing
        }


      }]
    });
    alert.present();
    
  }

  updateAutoAssign(){
    console.log("****************          ssssssssssssssssss");
    
    let obj = {
      userId:this.account.id,
      autoAssign:this.myForm.get('autoAssign').value
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
