import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, App, Platform } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../../providers/auth/account.service';
import { UserOrdersPage } from '../user-orders/user-orders';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { JobService } from '../../providers/auth/job.service';

/**
 * Generated class for the AddJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-job',
  templateUrl: 'add-job.html',
})
export class AddJobPage {

  job = {
    name: '',
    age: '',
    phone: '',
    government: '',
    educationDegree: '',
    userId: 0,
    carType: ''
  };

  // Our translated text strings
  private jobErrorString: string;
  private jobSuccessString: string;

  public pleaseWait;

  language = MyApp.language
  direction = MyApp.direction


  myForm: FormGroup;

  isCordova = false;

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  account = null;

  okText = ''
  cancelText = ''
  carFlag = false;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private loading: LoadingController,
    public app: App,
    public platform: Platform,
    private principal: Principal,
    private jobService: JobService,
    private builder: FormBuilder) {

    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.isCordova = true;
    }

    this.translateService.get(['JOB_ERROR', 'JOB_SUCCESS', 'PLEASE_WAIT',"SELECTION_CANCEL", "SELECTION_OK"]).subscribe((values) => {
      this.jobErrorString = values.JOB_ERROR;
      this.jobSuccessString = values.JOB_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT;

      this.okText = values.SELECTION_OK
      this.cancelText = values.SELECTION_CANCEL
    })

    this.myForm = builder.group({
      'name': ['', [Validators.required, Validators.maxLength(100)]],
      'age': ['', [Validators.required]],
      'phone': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
      'government': ['', [Validators.required, Validators.maxLength(100)]],
      'educationDegree': ['', [Validators.required, Validators.maxLength(250)]],
      //'carType': ['' , [Validators.required]]
    });

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(UserOrdersPage);

    });

  }
  ngOnInit() {


    this.myForm.valueChanges
      .map((value) => {
        if (value.name != null) {
          // Here you can manipulate your value
          value.name = value.name.trim();
          this.job.name = value.name
          value.government = value.government.trim();
          this.job.government = value.government
          value.educationDegree = value.educationDegree.trim();
          this.job.educationDegree = value.educationDegree
        }

        return value;
      }).filter((value) => this.myForm.valid)
      .subscribe((value) => {
      });

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.principal.identity().then((account) => {
      load.dismiss();
      if (account === null || (account.id == null && account.firstName == null && account.login == null && account.authorities.length == 0)) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {
        this.account = account

      }
    }).catch((err) => {
      load.dismiss();
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddJobPage');
  }

  carClick(){
    this.carFlag = true;
  }
  addJob() {

    if ( this.job.carType != '' && this.job.carType != null && this.job.carType != undefined && !this.hasError('phone', 'pattern') && !this.checkSpaces() && !this.checkAge()) {
      let load = this.loading.create({
        content: this.pleaseWait


      })
      load.present()

      this.job.userId = this.account.id
      // Attempt to login in through our User service
      this.jobService.save(this.job).subscribe((res) => {
        // var id = res;

        let toast = this.toastCtrl.create({
          message: this.jobSuccessString,
          duration: 3000,
          position: 'top'
        });
        toast.present();

        this.job.name = ''
        this.job.age = ''
        this.job.government = ''
        this.job.phone = ''
        this.job.userId = 0
        this.job.educationDegree = ''
        this.job.carType = ''

        this.myForm.reset();

        this.myForm = this.builder.group({
          'name': ['', [Validators.required, Validators.maxLength(100)]],
          'age': ['', [Validators.required]],
          'phone': ['', [Validators.required, Validators.pattern("(01)[0-9]{9}")]],
          'government': ['', [Validators.required, Validators.maxLength(100)]],
          'educationDegree': ['', [Validators.required, Validators.maxLength(250)]],
         // 'carType': ['' , [Validators.required]]
        });
       // this.job.carType = ''
       this.carFlag = false;

        this.myForm.valueChanges
          .map((value) => {
            if (value.name != null) {
              // Here you can manipulate your value
              value.name = value.name.trim();
              this.job.name = value.name
              value.government = value.government.trim();
              this.job.government = value.government
              value.educationDegree = value.educationDegree.trim();
              this.job.educationDegree = value.educationDegree
            }

            return value;
          }).filter((value) => this.myForm.valid)
          .subscribe((value) => {
          });

        load.dismiss();

      }, (err) => {
        // Unable to sign up
        console.log(err);


        //const error = JSON.parse(err.error);
        let displayError = this.jobErrorString;

        let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'top'
        });
        toast.present();

        load.dismiss();
      });
    }
  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }

  checkSpaces() {
    if (this.job.name == '' || this.job.government == '' || this.job.educationDegree == '') {
      return true;
    } else {
      return false;
    }
  }
  checkSpaceTofields(string, field) {
    const ctrl = this.myForm.get(field);
    return ctrl.dirty && string == '';

  }

  checkAge() {
    const ctrl = this.myForm.get('age');
    return ctrl.dirty && (ctrl.value <= 5 || ctrl.value > 100);
  }


}
