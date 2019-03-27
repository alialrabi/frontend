import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App, LoadingController, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';
import { AgenciesPage } from '../agencies/agencies';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { UserOrdersPage } from '../user-orders/user-orders';
import { AgencyCaptainsPage } from '../agency-captains/agency-captains';
import { MyApp } from '../../app/app.component';

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
  public pleaseWait;


  public agency = null;
  public user = null;

  language = MyApp.language
  direction = MyApp.direction

  public maxDate;
  public minDate;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform:Platform , private principal: Principal, private app: App, private loading: LoadingController, private builder: FormBuilder, public captainService: CaptainService, public toastCtrl: ToastController, public translateService: TranslateService) {

    this.agency = this.navParams.get("item");

    var CurrentYear = new Date().getFullYear()
    this.maxDate = CurrentYear + 1 ;
    this.minDate = CurrentYear;

    this.translateService.get(['ASSIGN_CAPTAIN_ERROR', 'ASSIGN_CAPTAIN_SUCCESS', 'PLEASE_WAIT']).subscribe((values) => {
      this.assignOrderError = values.ASSIGN_CAPTAIN_ERROR;
      this.assingOrderSuccess = values.ASSIGN_CAPTAIN_SUCCESS;
      this.pleaseWait = values.PLEASE_WAIT
    })


    this.myForm = builder.group({
      //'userId':['', [Validators.required ]],
      'captainIds': ['', [Validators.required]],
      'startDate': ['', [Validators.required]],
      'endDate': ['', [Validators.required]],
      'startTime': ['', [Validators.required]],
      'endTime': ['', [Validators.required]],      

    });

    this.platform.registerBackButtonAction(() => {
      if (this.agency == null || this.agency == undefined) {
        this.navCtrl.setRoot(AgencyCaptainsPage);
      }else{
        this.navCtrl.setRoot(AgenciesPage);
      }
    });

    this.getAllCaptains();

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


    this.captainService.getNotAssigned().subscribe(
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

    let assignCaptains = {
      agencyId: 0,
      captainsIds: ids,
      adminAssign:false,
      endDate:this.myForm.get("endDate").value,
      startDate:this.myForm.get("startDate").value,
      startTime:this.myForm.get("startTime").value,
      endTime:this.myForm.get("endTime").value
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
  back(){
    if (this.agency == null || this.agency == undefined) {
      this.navCtrl.setRoot(AgencyCaptainsPage);
    }else{
      this.navCtrl.setRoot(AgenciesPage);
    }
    
  }
}
