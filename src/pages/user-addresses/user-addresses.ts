import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, AlertController, ToastController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../../providers/auth/account.service';
import { AddAddressPage } from '../add-address/add-address';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { AddressService } from '../../providers/auth/address.service';
import { MyApp } from '../../app/app.component';
import { EditAddressPage } from '../edit-address/edit-address';
import { UserOrdersPage } from '../user-orders/user-orders';

/**
 * Generated class for the UserAddressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-addresses',
  templateUrl: 'user-addresses.html',
})
export class UserAddressesPage {

  isLoading = false;

  
  public addresses = [];

  public pleaseWait;
  pageNum = 1;
  moreData = 'Loading more data...'
  user;

  deleteMessage = '';
  deleteTitle = '';
  yes = '';
  cancel = ''

  deleteSuccess = '';
  deleteError = ''

  language = MyApp.language
  direction = MyApp.direction


  constructor(public navCtrl: NavController, public toastCtrl: ToastController , public platform:Platform , public navParams: NavParams,public app:App, public principal:Principal,public addressesService:AddressService,
     private loading: LoadingController, public _alert: AlertController , public translateService: TranslateService, public accountService: AccountService) {


    this.translateService.get(['PLEASE_WAIT', 'MORE_DATA' , 'DELETE_ADDRESS_TITLE' , 'DELETE_ADDRESS_MESSAGE' , 'DONE' , 'CANCEL' , 'DELETE_ADDRESS_SUCCESS' , 'DELETE_ADDRESS_ERROR' ]).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
      this.moreData = values.MORE_DATA
      this.deleteMessage = values.DELETE_ADDRESS_MESSAGE
      this.deleteTitle = values.DELETE_ADDRESS_TITLE
      this.yes = values.DONE
      this.cancel = values.CANCEL
      this.deleteSuccess = values.DELETE_ADDRESS_SUCCESS
      this.deleteError = values.DELETE_ADDRESS_ERROR
    })

    if (this.platform.is('cordova') && this.platform.is("android")) {
      this.platform.registerBackButtonAction(() => {
        this.navCtrl.setRoot(UserOrdersPage);

      });
    }
  }
  ngOnInit() {

    // let load = this.loading.create({
    //   content: this.pleaseWait


    // })
    // load.present()

    this.principal.identity().then((account) => {
      console.log(account);
//      load.dismiss();

      if (account === null) {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else if (account.authorities[0] == 'ROLE_USER') {

        this.user = account;
        this.getAllAddresses(0);


      } else {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      }
    }).catch((err) => {
 //     load.dismiss();
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAddressesPage');
  }
  getAllAddresses(pageNum) {
    if (!this.isLoading) {
      this.isLoading = true;

    let load;
    if (pageNum == 0) {
      load = this.loading.create({
        content: this.pleaseWait


      })
      load.present()
      this.addresses = [];
      this.pageNum = 1;
    }
    //this.agenciesList = [];
    this.addressesService.getUserAddressesWithPagination(this.user.id ,pageNum).subscribe(res => {
      console.log(res);

      if (pageNum == 0) {
        this.addresses = res;

        load.dismiss();
      }else{
        if(res.length > 0){
          this.pageNum++;
        }
        res.forEach(element => {
          this.addresses.push(element);
        });
      }
      this.isLoading = false;
    }, err => {
      console.log(err);
      if (pageNum == 0) {
        load.dismiss();
      }

    })
  }
  }
  getAllAddressesAfterDelete(pageNum , load) {
    
      this.addresses = [];
      this.pageNum = 1;
    
    //this.agenciesList = [];
    this.addressesService.getUserAddressesWithPagination(this.user.id ,pageNum).subscribe(res => {
      console.log(res);

        this.addresses = res;

        load.dismiss();
      
    }, err => {
      console.log(err);
        load.dismiss();

    })
  
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {

      this.getAllAddresses(this.pageNum);

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }


  add() {
    this.navCtrl.setRoot(AddAddressPage , {address:"UserAddressesPage"});

  }
  DeleteAddress(address){

    
    let alert = this._alert.create({
      title: this.deleteTitle,
      message: this.deleteMessage,
      buttons: [
        {
          text: this.yes,
          handler: () => {
            this.delete(address)
          }
        },
        {
          text: this.cancel,
          handler: () => {
            
          }
        }
      ]
    });
    alert.present();




  }
  delete(address){

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()
    this.addressesService.delete(address.id).subscribe(
      res =>{
//        load.dismiss();
        this.getAllAddressesAfterDelete(0 , load);

        let toast = this.toastCtrl.create({
          message: this.deleteSuccess,
          duration: 3000,
          position: 'top'
        });
        toast.present();

      }, err =>{
        load.dismiss();
        console.log(err , 'errr');
        let toast = this.toastCtrl.create({
          message: this.deleteError,
          duration: 3000,
          position: 'middle'
        });
        toast.present();
        

      }
    )

  }
  EditAddress(address){

    this.navCtrl.setRoot(EditAddressPage , {item:address});

  }
}
