import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, App, MenuController, ToastController, AlertController, LoadingController } from 'ionic-angular';
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
import 'rxjs/add/observable/interval';
import { BackgroundMode } from '@ionic-native/background-mode';
import { AdminDashboardPage } from '../pages/admin-dashboard/admin-dashboard';
import { UserOrdersPage } from '../pages/user-orders/user-orders';
import { AgencyCaptainsPage } from '../pages/agency-captains/agency-captains';
import { Device } from '@ionic-native/device';
import { AddCaptainPage } from '../pages/add-captain/add-captain';
import { LocationAccuracy } from '@ionic-native/location-accuracy';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

import { FCM } from '@ionic-native/fcm';
import { DeviceTockenService } from '../providers/auth/deviceToken.service';
import { ManUpService } from 'ionic-manup/lib/main';

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

  public static language = "ar";
  public static direction = "rtl";
  menuSide = "right";

  appMenuItems: Array<MenuItem>;

  public isLogOut = false;

  @ViewChild(Nav) nav: Nav;

  public account = null;
  public userType = '';

  public static getCaptainImage = false;

  userSettingToggleFlag = false;

  public captain;
  public userTypeText = '';
  public pleaseWait = ''
  // public userAdmin = 'Admin';
  // public userCaptain = 'Captain';
  // public userAgency = 'Agency';
  // public userUser = 'User';

  // public ordersText = 'Orders';
  // public captainsText = 'Captains';
  // public agenciesText = 'Agencies';
  // public settingText = 'Setting';
  // public userOrdersText = 'User Orders';
  // public yourCaptainsText = 'Your Captains';
  // public dashbardText = 'Dashboard';

  public internal = null;
  public autoAssignInternal = null;


  constructor(private translate: TranslateService, private loading: LoadingController, private manup: ManUpService, private fcm: FCM, public _alert: AlertController, private deviceTokenService: DeviceTockenService, private device: Device, public admobFree: AdMobFree, private backgroundMode: BackgroundMode, public menu: MenuController, public platform: Platform, settings: Settings, private config: Config,
    private statusBar: StatusBar, public locationAccuracy: LocationAccuracy, public toastCtrl: ToastController, private loginService: LoginService, private captainService: CaptainService, private app: App, private principal: Principal, private splashScreen: SplashScreen, private keyboard: Keyboard) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.platform.is('android')) {
        this.statusBar.styleLightContent();
      } else {
        this.statusBar.styleDefault();
      }
      this.keyboard.disableScroll(false);
      if (this.platform.is("android") && this.platform.is("cordova")) {


        this.showBannerAd();
        fcm.subscribeToTopic('all');
        fcm.onNotification().subscribe(data => {

          if (data.wasTapped) {

          } else {

            let alert = this._alert.create({
              title: data.title,
              message: data.body,
              buttons: [
                {
                  text: 'حسنا',
                  handler: () => {

                  }
                }
              ]
            });
            alert.present();


          };
        })
        fcm.onTokenRefresh().subscribe(token => {

          if (this.account != null) {
            let deviceToken = {
              token: token,
              userType: this.userType,
              userId: this.account.id,
              deviceType: 'cordova'
            }
            this.deviceTokenService.save(deviceToken).subscribe(
              res => {

              }, err => {
                console.log("error in add token in refresh", err);

              }
            )
          }
        });
        manup.validate().then((data) => {
          // // app initialisation
          // // manup.metadata().then((data2) =>{

          //  let platformData = {
          //   "latest": "1.1.7",
          //   "minimum": "1.1.7",
          //   "url": "https://play.google.com/store/apps/details?id=com.tlabatac.ionic",
          //   "enabled": true
          //  }
          //  this.manup.loadTranslations();
          //  manup.presentOptionalUpdate(platformData);

          // // } )

        });

      }
      this.splashScreen.hide();


    });
    this.initTranslate();
    this.translateMenu();
    this.platform.setDir("rtl", true);

    //backgroundGeolocation = new BackgroundGeolocation();
    //this.startTracking()
    // this.appMenuItems = [
    //   // {title: 'Home', component: HomePage, icon: 'home'},
    //   // {title: 'Local Weather', component: EntityPage, icon: 'person'}
    // ];


  }

  showBannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
      // isTesting: true, // Remove in production
      autoShow: true,
      id: "ca-app-pub-3499153975001140/3738705665"
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare().then(() => {

    }).catch(e => console.log("baner erroooor", e));
  }

  ngOnInit() {

    this.checkAccess();
  }

  checkAccess() {

    this.principal.identity().then((account) => {


      if (account == null) {

        this.account = account;
        this.userType = '';

        this.app.getRootNavs()[0].setRoot(FirstRunPage);

      } else if (account.id == null && account.firstName == null && account.login == null && account.authorities.length == 0) {
        this.account = null;
        this.userType = '';

        this.app.getRootNavs()[0].setRoot(FirstRunPage);

        this.captainLogOut();
      }

      else if (account.authorities[0] == 'ROLE_AGENCY') {

        MyApp.language = account.langKey;
        this.translate.use(MyApp.language);

        if (account.langKey == 'en') {
          this.menuSide = 'left';
          this.platform.setDir("ltr", true);
          MyApp.direction = 'ltr';
        } else {
          this.menuSide = 'right';
          this.platform.setDir("rtl", true);
          MyApp.direction = 'rtl';
        }


        this.isLogOut = false;
        this.userType = 'Agency'
        this.translateMenu();
        this.account = account;
        // this.appMenuItems = [
        //   { title: this.ordersText, component: OrdersPage, icon: 'basket' },
        //   { title: this.captainsText, component: CaptainsPage, icon: 'bicycle' },
        //   { title: this.settingText, component: SettingsPage, icon: 'construct' }
        // ];
        this.nav.setRoot("OrdersPage")

      } else if (account.authorities[0] == 'ROLE_USER' && account.authorities.length == 1) {

        MyApp.language = account.langKey;
        this.translate.use(MyApp.language);

        if (account.langKey == 'en') {
          this.menuSide = 'left';
          this.platform.setDir("ltr", true);
          MyApp.direction = 'ltr';
        } else {
          this.menuSide = 'right';
          this.platform.setDir("rtl", true);
          MyApp.direction = 'rtl';
        }

        this.isLogOut = false;
        this.userType = 'User'
        this.translateMenu();
        this.account = account;
        let mail = this.account.email
        // this.appMenuItems = [
        //   { title: this.userOrdersText, component: UserOrdersPage, icon: 'basket' }
        // ];
        if (account.phone == null || account.phone == '') {
          this.nav.setRoot("AddUserPhonePage")
        } else {
          this.nav.setRoot("UserOrdersPage")
        }

      } else if (account.authorities[0] == 'ROLE_CAPTAIN') {

        MyApp.language = account.langKey;
        this.translate.use(MyApp.language);

        if (account.langKey == 'en') {
          this.menuSide = 'left';
          this.platform.setDir("ltr", true);
          MyApp.direction = 'ltr';
        } else {
          this.menuSide = 'right';
          this.platform.setDir("rtl", true);
          MyApp.direction = 'rtl';
        }

        this.isLogOut = false;
        this.userType = 'Captain'
        this.translateMenu();
        this.account = account;
        // this.appMenuItems = [
        //   { title: this.ordersText, component: CaptainOrdersPage, icon: 'basket' },
        //   { title: this.userOrdersText, component: UserOrdersPage, icon: 'basket' },
        //   { title: this.settingText, component: SettingsPage, icon: 'construct' }
        // ];
        this.nav.setRoot("CaptainOrdersPage")
        this.getCaptain(account.id);

      } else {

        MyApp.language = account.langKey;
        this.translate.use(MyApp.language);

        if (account.langKey == 'en') {
          this.menuSide = 'left';
          this.platform.setDir("ltr", true);
          MyApp.direction = 'ltr';
        } else {
          this.menuSide = 'right';
          this.platform.setDir("rtl", true);
          MyApp.direction = 'rtl';
        }

        this.isLogOut = false;
        this.userType = 'Admin'
        this.autoUnAssign();
        this.autoAssignRedunduncy();
        this.translateMenu();
        this.account = account;

        // this.appMenuItems = [
        //   { title: this.dashbardText, component: AdminDashboardPage, icon: 'stats' },
        //   { title: this.agenciesText, component: AgenciesPage, icon: 'home' },
        //   { title: this.captainsText, component: CaptainsPage, icon: 'bicycle' },
        //   { title: this.yourCaptainsText, component: AgencyCaptainsPage, icon: 'bicycle' },
        //   { title: this.ordersText, component: OrdersPage, icon: 'basket' },
        //   { title: this.userOrdersText, component: UserOrdersPage, icon: 'basket' }

        // ];

        this.nav.setRoot("AdminDashboardPage")
      }

    });

  }
  checkAccessToSignUp() {
    this.principal.identity().then((account) => {



      if (account == null) {

        this.account = account;
        this.userType = '';

        this.app.getRootNavs()[0].setRoot(FirstRunPage);

      } else if (account.authorities[0] == 'ROLE_AGENCY') {

        MyApp.language = account.langKey;
        this.translate.use(MyApp.language);

        if (account.langKey == 'en') {
          this.menuSide = 'left';
          this.platform.setDir("ltr", true);
          MyApp.direction = 'ltr';
        } else {
          this.menuSide = 'right';
          this.platform.setDir("rtl", true);
          MyApp.direction = 'rtl';
        }

        this.isLogOut = false;
        this.userType = 'Agency'
        this.translateMenu();
        this.account = account;
        // this.appMenuItems = [
        //   { title: this.ordersText, component: OrdersPage, icon: 'basket' },
        //   { title: this.captainsText, component: CaptainsPage, icon: 'bicycle' },
        //   { title: this.settingText, component: SettingsPage, icon: 'construct' }
        // ];
        this.nav.setRoot("OrdersPage")

      } else if (account.authorities[0] == 'ROLE_USER' && account.authorities.length == 1) {

        MyApp.language = account.langKey;
        this.translate.use(MyApp.language);

        if (account.langKey == 'en') {
          this.menuSide = 'left';
          this.platform.setDir("ltr", true);
          MyApp.direction = 'ltr';
        } else {
          this.menuSide = 'right';
          this.platform.setDir("rtl", true);
          MyApp.direction = 'rtl';
        }

        this.isLogOut = false;
        this.userType = 'User'
        this.translateMenu();
        this.account = account;
        // this.appMenuItems = [
        //   { title: this.userOrdersText, component: UserOrdersPage, icon: 'basket' }
        // ];
        // this.nav.setRoot("UserOrdersPage")

      } else if (account.authorities[0] == 'ROLE_CAPTAIN') {

        MyApp.language = account.langKey;
        this.translate.use(MyApp.language);

        if (account.langKey == 'en') {
          this.menuSide = 'left';
          this.platform.setDir("ltr", true);
          MyApp.direction = 'ltr';
        } else {
          this.menuSide = 'right';
          this.platform.setDir("rtl", true);
          MyApp.direction = 'rtl';
        }

        this.isLogOut = false;
        this.userType = 'Captain'
        this.translateMenu();
        this.account = account;
        // this.appMenuItems = [
        //   { title: this.ordersText, component: CaptainOrdersPage, icon: 'basket' },
        //   { title: this.userOrdersText, component: UserOrdersPage, icon: 'basket' },
        //   { title: this.settingText, component: SettingsPage, icon: 'construct' }

        // ];
        this.nav.setRoot("CaptainOrdersPage")
        this.getCaptain(account.id);

      } else {

        MyApp.language = account.langKey;
        this.translate.use(MyApp.language);

        if (account.langKey == 'en') {
          this.menuSide = 'left';
          this.platform.setDir("ltr", true);
          MyApp.direction = 'ltr';
        } else {
          this.menuSide = 'right';
          this.platform.setDir("rtl", true);
          MyApp.direction = 'rtl';
        }

        this.isLogOut = false;
        this.userType = 'Admin'
        this.translateMenu();
        this.account = account;

        // this.appMenuItems = [
        //   { title: this.dashbardText, component: AdminDashboardPage, icon: 'stats' },
        //   { title: this.agenciesText, component: AgenciesPage, icon: 'home' },
        //   { title: this.captainsText, component: CaptainsPage, icon: 'bicycle' },
        //   { title: this.yourCaptainsText, component: AgencyCaptainsPage, icon: 'bicycle' },
        //   { title: this.ordersText, component: OrdersPage, icon: 'basket' },
        //   { title: this.userOrdersText, component: UserOrdersPage, icon: 'basket' }

        // ];


        this.nav.setRoot("AdminDashboardPage")
      }

    });
  }

  autoUnAssign() {
    this.captainService.autoUnAssign().subscribe(res => {

    }, err => {

    }
    )
  }

  getCaptain(captainId) {

    this.captainService.getByUserId(captainId).subscribe(
      data => {
        this.captain = data;

        if(this.captain != null){

        this.updateLocation(this);

        this.updateLocationTimer(this);

        this.updateAssign(this)
        }

      }, err => {

      }
    )

  }


  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang(MyApp.language);

    // if (this.translate.getBrowserLang() !== undefined) {
    //   this.translate.use(this.translate.getBrowserLang());
    // } else {
    this.translate.use(MyApp.language); // Set your language here
    //}

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {

    this.app.getRootNavs()[0].setRoot(page);
    //this.menu.close("authenticated");
  }
  logout() {

    let load = this.loading.create({
      content: this.pleaseWait


    })
    load.present()

    this.userSettingToggleFlag = false;
    if (this.platform.is("cordova")) {
      this.fcm.getToken().then(token => {
        this.deviceTokenService.deleteToken(token, this.account.id).subscribe(
          res1 => {

            this.menu.close().then(
              res => {
                if (this.internal != null) {

                  this.internal.unsubscribe();
                  this.backgroundMode.disable();

                  this.internal = null;

                }
                if (this.autoAssignInternal != null) {
                  this.autoAssignInternal.unsubscribe();
                  this.autoAssignInternal = null;
                }

                this.loginService.logout();

                //this.userType = '';
                //this.account = null;


                this.checkAccess();
                this.isLogOut = true;
                load.dismiss();
                // this.app.getRootNavs()[0].setRoot(FirstRunPage);

              }
            );

          }, err => {

            this.menu.close().then(
              res => {
                if (this.internal != null) {

                  this.internal.unsubscribe();

                  this.backgroundMode.disable();
                  this.internal = null;
                }
                if (this.autoAssignInternal != null) {
                  this.autoAssignInternal.unsubscribe();
                  this.autoAssignInternal = null;
                }

                this.loginService.logout();
                //this.userType = '';
                //this.account = null;


                this.checkAccess();
                this.isLogOut = true;
                load.dismiss();
                // this.app.getRootNavs()[0].setRoot(FirstRunPage);

              }
            );

          }
        )
      })
    } else {
      this.menu.close().then(
        res => {
          if (this.internal != null) {

            this.internal.unsubscribe();
            this.backgroundMode.disable();

            this.internal = null;
          }
          if (this.autoAssignInternal != null) {
            this.autoAssignInternal.unsubscribe();
            this.autoAssignInternal = null;
          }
          this.loginService.logout();
          //this.userType = '';
          //this.account = null;


          this.checkAccess();
          this.isLogOut = true;
          load.dismiss();
          // this.app.getRootNavs()[0].setRoot(FirstRunPage);

        }
      );
    }

  }

  captainLogOut() {
    if (this.internal != null) {

      this.internal.unsubscribe();
      this.backgroundMode.disable();

      this.internal = null;
    }
    if (this.autoAssignInternal != null) {
      this.autoAssignInternal.unsubscribe();
      this.autoAssignInternal = null;
    }
    this.loginService.logout();
    
    this.isLogOut = true;
  }

  openMenu() {
    this.menu.open();
  }


  updateLocation(classIn) {


    if (this.platform.is("cordova") && (this.platform.is("android") || this.platform.is("ios"))) {

      // this.locationAccuracy.canRequest().then((canRequest: any) => {



      // if(canRequest == 0) {
      // the accuracy option will be ignored by iOS
      this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
        () => {

          this.getLocation(classIn)
        }
        ,
        error => console.log('Error requesting location permissions', error)
      );
      //   }else{
      //     this.getLocation(classIn) 
      //   }

      // }).catch(
      //   err =>{

      //   }
      // );
    } else {
      this.getLocation(classIn);
    }









  }
  getLocation(classIn) {
    navigator.geolocation.getCurrentPosition(function (position) {

      let location = {
        lat: position.coords.latitude + '',
        lng: position.coords.longitude + '',
        captainId: classIn.captain.id
      }



      classIn.captainService.updateLocation(location).subscribe(
        res => {

        }, err => {

        }
      )


    }, err => {

    })
  }

  updateAssign(classIn) {


    classIn.captainService.updateAssign(classIn.captain.id).subscribe(
      res => {

      }, err => {
        console.log(err, 'errrrrrpr');

      }
    )


  }

  updateLocationTimer(classIn) {

    if (this.platform.is('android') && this.platform.is('cordova')) {

      if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {

        this.backgroundMode.enable();
      }
    } else {

      this.backgroundMode.enable();
    }
    this.internal = Observable.interval(1000 * 60 * 5).subscribe(x => {

      classIn.updateLocation(classIn);
      classIn.updateAssign(classIn);

    });

  }

  autoAssignRedunduncy() {
    this.autoAssignInternal = Observable.interval(1000 * 60 * 60).subscribe(x => {
      this.autoUnAssign();

    });
  }
  translateMenu() {



    this.translate.get(['AGENCY', 'ADMIN', 'USER', 'CAPTAIN', 'PLEASE_WAIT']).subscribe((values) => {

      if (this.userType == 'Admin') {
        this.userTypeText = values.ADMIN;
      } else if (this.userType == 'Agency') {
        this.userTypeText = values.AGENCY;
      } else if (this.userType == 'User') {
        this.userTypeText = values.USER;
      } else if (this.userType == 'Captain') {
        this.userTypeText = values.CAPTAIN;
      }
      this.pleaseWait = values.PLEASE_WAIT

    })

  }

  userSettingToggle() {
    this.userSettingToggleFlag = !this.userSettingToggleFlag;

  }
  getSettingIcon() {
    if (this.userSettingToggleFlag) {
      return 'arrow-dropdown'
    } else {
      if (MyApp.language == 'en') {
        return 'arrow-dropright'
      } else {
        return 'arrow-dropleft'
      }
    }
  }

}
