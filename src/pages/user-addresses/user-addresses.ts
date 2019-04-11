import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../../providers/auth/account.service';
import { AddAddressPage } from '../add-address/add-address';
import { FirstRunPage } from '../pages';
import { Principal } from '../../providers/auth/principal.service';
import { AddressService } from '../../providers/auth/address.service';

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

  
  public addresses = [];

  public pleaseWait;
  pageNum = 1;
  moreData = 'Loading more data...'
  user;


  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App, public principal:Principal,public addressesService:AddressService,
     private loading: LoadingController, public translateService: TranslateService, public accountService: AccountService) {


    this.translateService.get(['PLEASE_WAIT', 'MORE_DATA']).subscribe((values) => {

      this.pleaseWait = values.PLEASE_WAIT
      this.moreData = values.MORE_DATA
    })
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
      } else if (account.authorities[0] == 'ROLE_USER') {

        this.user = account;
        this.getAllAddresses(0);


      } else {
        this.app.getRootNavs()[0].setRoot(FirstRunPage);
      }
    }).catch((err) => {
      load.dismiss();
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAddressesPage');
  }
  getAllAddresses(pageNum) {
    let load;
    if (pageNum == 0) {
      load = this.loading.create({
        content: this.pleaseWait


      })
      load.present()
      this.addresses = [];
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
    }, err => {
      console.log(err);
      if (pageNum == 0) {
        load.dismiss();
      }

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
}
