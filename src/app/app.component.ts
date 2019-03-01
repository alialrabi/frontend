import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, App, MenuController } from 'ionic-angular';
import { Settings } from '../providers/providers';
import { LandingPage } from '../pages/landing/landing';
import { HomePage } from '../pages/home/home';
import { EntityPage } from '../pages/entities/entity';
import { Keyboard } from '@ionic-native/keyboard';
import { Principal } from '../providers/auth/principal.service';
import { FirstRunPage } from '../pages/pages';
import { OrdersPage } from '../pages/orders/orders';
import { CaptainsPage } from '../pages/captains/captains';
import { AgenciesPage } from '../pages/agencies/agencies';
import { LoginService } from '../providers/login/login.service';

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LandingPage;

  appMenuItems: Array<MenuItem>;

  public isLogOut = false;

  @ViewChild(Nav) nav: Nav;

  public account = null;
  public userType = '';


  constructor(private translate: TranslateService, public menu: MenuController ,platform: Platform, settings: Settings, private config: Config,
              private statusBar: StatusBar , private loginService:LoginService , private app: App, private principal: Principal , private splashScreen: SplashScreen , private keyboard: Keyboard ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.keyboard.disableScroll(true);
      
    });
    this.initTranslate();
    // this.appMenuItems = [
    //   // {title: 'Home', component: HomePage, icon: 'home'},
    //   // {title: 'Local Weather', component: EntityPage, icon: 'person'}
    // ];
  }

  ngOnInit() {
   this.checkAccess();
  }

  checkAccess(){
    this.principal.identity().then((account) => {
      console.log(account , 'app');
      
      if (account == null ) {
        console.log('***************');

         this.account = account;
         this.userType = '';
        
         this.app.getRootNavs()[0].setRoot(FirstRunPage);

      } else if(account.authorities[0] == 'ROLE_AGENCY') {
        this.isLogOut = false;
        this.userType = 'agency'
        this.account = account;
        this.appMenuItems = [
           {title: 'Orders', component: OrdersPage, icon: 'basket'},
           {title: 'Captains', component: CaptainsPage, icon: 'bicycle'}
        ];       
      } else if(account.authorities[0] == 'ROLE_CAPTAIN') {
        this.isLogOut = false;
        this.userType = 'captain'
        this.account = account;
      }     else {
        this.isLogOut = false;
        this.userType = 'admin'
        this.account = account;
        this.appMenuItems = [
           {title: 'Agencies', component: AgenciesPage, icon: 'home'},
           {title: 'Captains', component: CaptainsPage, icon: 'bicycle'}
        ]; 
      }
      console.log(this.userType , 'user');
      
    });
  }



  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page){
    console.log(page);
    
    this.app.getRootNavs()[0].setRoot(page.component);
  }
  logout() {
    this.loginService.logout();
    //this.userType = '';
    //this.account = null;
    this.menu.close();
    this.checkAccess();
    this.isLogOut = true;
    // this.app.getRootNavs()[0].setRoot(FirstRunPage);
  }
  
}
