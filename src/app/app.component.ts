import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, App, MenuController, ToastController } from 'ionic-angular';
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
import { SettingsPage } from '../pages/settings/settings';
import { CaptainOrdersPage } from '../pages/captain-orders/captain-orders';
import { CaptainService } from '../providers/auth/captain.service';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/observable/interval';
import { BackgroundMode } from '@ionic-native/background-mode';
import { AdminDashboardPage } from '../pages/admin-dashboard/admin-dashboard';

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}
//declare var backgroundGeolocation;
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
  public captain;

  public internal = null;


  constructor(private translate: TranslateService, private backgroundMode: BackgroundMode , public menu: MenuController, platform: Platform, settings: Settings, private config: Config,
    private statusBar: StatusBar,  public toastCtrl: ToastController , private loginService: LoginService  ,private captainService:CaptainService ,private app: App, private principal: Principal, private splashScreen: SplashScreen, private keyboard: Keyboard) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.keyboard.disableScroll(true);
      
    });
    this.initTranslate();
    console.log("pppppppppppppppppppppp");
    //backgroundGeolocation = new BackgroundGeolocation();
    //this.startTracking()
    // this.appMenuItems = [
    //   // {title: 'Home', component: HomePage, icon: 'home'},
    //   // {title: 'Local Weather', component: EntityPage, icon: 'person'}
    // ];

    

  }

  ngOnInit() {
    this.checkAccess();
  }

  checkAccess() {
    this.principal.identity().then((account) => {
      console.log(account, 'app');

      if (account == null) {
        console.log('***************');

        this.account = account;
        this.userType = '';

        this.app.getRootNavs()[0].setRoot(FirstRunPage);

      } else if (account.authorities[0] == 'ROLE_AGENCY') {
        this.isLogOut = false;
        this.userType = 'Agency'
        this.account = account;
        this.appMenuItems = [
          { title: 'Orders', component: OrdersPage, icon: 'basket' },
          { title: 'Captains', component: CaptainsPage, icon: 'bicycle' },
          { title: 'Setting', component: SettingsPage, icon: 'construct' }
        ];
        this.nav.setRoot("OrdersPage")
      } else if (account.authorities[0] == 'ROLE_CAPTAIN') {
        this.isLogOut = false;
        this.userType = 'Captain'
        this.account = account;
        this.appMenuItems = [
          { title: 'Orders', component: CaptainOrdersPage, icon: 'basket' },
          { title: 'Setting', component: SettingsPage, icon: 'construct' }
        ];
        this.nav.setRoot("CaptainOrdersPage")
        this.getCaptain(account.id);

      } else {
        this.isLogOut = false;
        this.userType = 'Admin'
        this.account = account;
        this.appMenuItems = [
          { title: 'Dashboard', component: AdminDashboardPage, icon: 'stats' },
          { title: 'Agencies', component: AgenciesPage, icon: 'home' },
          { title: 'Captains', component: CaptainsPage, icon: 'bicycle' },
          { title: 'Orders', component: OrdersPage, icon: 'basket' }
          
        ];
        this.nav.setRoot("AdminDashboardPage")
      }
      console.log(this.userType, 'user');

    });
  }

  getCaptain(captainId){

    this.captainService.getByUserId(captainId).subscribe(
      data => {
        this.captain = data;    
        
        this.updateLocationTimer(this);
        

      }, err => {
        console.log(err, 'errror');

      }
    )

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

  openPage(page) {
    console.log(page);

    this.app.getRootNavs()[0].setRoot(page.component);
    //this.menu.close("authenticated");
  }
  logout() {
    this.menu.close().then(
      res => {
        if(this.internal != null){
          console.log("unsubscribe");
          
          this.internal.unsubscribe();
          this.backgroundMode.disable();
          this.internal = null;
        }
        
        this.loginService.logout();
        //this.userType = '';
        //this.account = null;


        this.checkAccess();
        this.isLogOut = true;
        // this.app.getRootNavs()[0].setRoot(FirstRunPage);

      }
    );


  }

  openMenu() {
    this.menu.open();
  }


  updateLocation(classIn) {
    
    navigator.geolocation.getCurrentPosition(function (position) {

      let location = {
        lat: position.coords.latitude+'',
        lng: position.coords.longitude+'',
        captainId: classIn.captain.id
      }
      console.log(location);
      
      console.log("******************");
      

      classIn.captainService.updateLocation(location).subscribe(
        res => {
          console.log(res, 'sssssssssss');

        }, err => {
          console.log(err, 'errrrrrpr');

        }
      )


    }, err => {
      console.log(err, 'error sssssssssssss');

    })


  }



  updateLocationTimer(classIn){
    this.backgroundMode.enable();
    this.internal = Observable.interval(1000 * 60).subscribe( x => {
      console.log(x , 'eeeeeeeeeeeeeeee');
      classIn.updateLocation(classIn);
      
    });

   }
  

}
