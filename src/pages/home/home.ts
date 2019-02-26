import { Component, OnInit } from '@angular/core';
import { App, IonicPage, NavController } from 'ionic-angular';
import { Principal } from '../../providers/auth/principal.service';
import { FirstRunPage } from '../pages';
import { LoginService } from '../../providers/login/login.service';
import { CaptainsPage } from '../captains/captains';
import { CaptainOrdersPage } from '../captain-orders/captain-orders';
import { OrdersPage } from '../orders/orders';
import { AgenciesPage } from '../agencies/agencies';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  account: Account;
  userType = 'admin';

  constructor(public navCtrl: NavController,
              private principal: Principal,
              private app: App,
              private loginService: LoginService) { }

  ngOnInit() {
    this.principal.identity().then((account) => {
      console.log(account);
      
      if (account === null) {
         this.app.getRootNavs()[0].setRoot(FirstRunPage);
      } else {
        this.account = account;

        console.log(this.account , '555555555555');


          if(account.authorities[0] === 'ROLE_CAPTAIN') {
            
            this.app.getRootNavs()[0].setRoot(CaptainOrdersPage);
            
          }else if(account.authorities[0] === 'ROLE_AGENCY') {
            this.userType = 'agency'
          }
        

      }
    });
  }

  isAuthenticated() {
    return this.principal.isAuthenticated();
  }

  logout() {
    this.loginService.logout();
    this.app.getRootNavs()[0].setRoot(FirstRunPage);
  }

  openCaptains() {
    this.navCtrl.push(CaptainsPage);
  }
  openCustomer(){
    this.navCtrl.push(OrdersPage);
  }
  openAgency(){
    this.navCtrl.push(AgenciesPage);
  }

}
