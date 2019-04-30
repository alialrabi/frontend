import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Api, Settings, User } from '../providers/providers';
import { MyApp } from './app.component';
import { LoginService } from '../providers/login/login.service';
import { Principal } from '../providers/auth/principal.service';
import { AccountService } from '../providers/auth/account.service';
import { AuthServerProvider } from '../providers/auth/auth-jwt.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { AuthInterceptor } from '../providers/auth/auth-interceptor';
import { EntityPageModule } from '../pages/entities/entity.module';
import { LandingPageModule } from '../pages/landing/landing.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { AddAddressPageModule } from '../pages/add-address/add-address.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ImagePicker } from '@ionic-native/image-picker';
import { AddCaptainPageModule } from '../pages/add-captain/add-captain.module';
import { HomePageModule } from '../pages/home/home.module';
import { CaptainsPage } from '../pages/captains/captains';
import { CaptainsPageModule } from '../pages/captains/captains.module';
import { CaptainsMapPageModule } from '../pages/captains-map/captains-map.module';
import { Keyboard } from '@ionic-native/keyboard';
import { AddOrderPage } from '../pages/add-order/add-order';
import { AddOrderPageModule } from '../pages/add-order/add-order.module';
import { OrdersPageModule } from '../pages/orders/orders.module';
import { AssignOrderPageModule } from '../pages/assign-order/assign-order.module';
import { CaptainOrdersPage } from '../pages/captain-orders/captain-orders';
import { CaptainOrdersPageModule } from '../pages/captain-orders/captain-orders.module';
import { CaptainEvaluationPageModule } from '../pages/captain-evaluation/captain-evaluation.module';
import { AddAgencyPageModule } from '../pages/add-agency/add-agency.module';
import { AgenciesPageModule } from '../pages/agencies/agencies.module';
import { AssignCaptainsPageModule } from '../pages/assign-captains/assign-captains.module';
import { AgencyCaptainsPageModule } from '../pages/agency-captains/agency-captains.module';
import { LoginPageModule } from '../pages/login/login.module';
//import { settings } from 'cluster';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { CaptainService } from '../providers/auth/captain.service';
import { BackgroundMode } from '@ionic-native/background-mode';
import { AdminDashboardPageModule } from '../pages/admin-dashboard/admin-dashboard.module';
import { UserOrdersPage } from '../pages/user-orders/user-orders';
import { UserOrdersPageModule } from '../pages/user-orders/user-orders.module';
import { ChooseAddressPageModule } from '../pages/choose-address/choose-address.module';
import { AddressService } from '../providers/auth/address.service';
import { OrdersMapPageModule } from '../pages/orders-map/orders-map.module';

import { Facebook } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { EditAssignCaptainPageModule } from '../pages/edit-assign-captain/edit-assign-captain.module';
import { Device } from '@ionic-native/device';

import { DatePickerModule } from 'ionic-calendar-date-picker';

import { DatePicker } from '@ionic-native/date-picker';

import { AdMobFree } from '@ionic-native/admob-free'; 

import { LocationAccuracy } from '@ionic-native/location-accuracy'
import { CaptainAssignDetailsPage } from '../pages/captain-assign-details/captain-assign-details';
import { CaptainAssignDetailsPageModule } from '../pages/captain-assign-details/captain-assign-details.module';
import { SubAssignDetailsPageModule } from '../pages/sub-assign-details/sub-assign-details.module';
import { AgencyDetailsPageModule } from '../pages/agency-details/agency-details.module';
import { CaptainDetailsPageModule } from '../pages/captain-details/captain-details.module';
import { EditAgencyPage } from '../pages/edit-agency/edit-agency';
import { EditAgencyPageModule } from '../pages/edit-agency/edit-agency.module';
import { EditCaptainPageModule } from '../pages/edit-captain/edit-captain.module';
import { AddOrderPopoverComponent } from '../components/add-order-popover/add-order-popover';
//import { Printer} from '@ionic-native/printer';

import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { DaysDetailsPageModule } from '../pages/days-details/days-details.module';
import { UserAddressesPage } from '../pages/user-addresses/user-addresses';
import { UserAddressesPageModule } from '../pages/user-addresses/user-addresses.module';
import { PhoneVerificationPageModule } from '../pages/phone-verification/phone-verification.module';
import { OrderKindPageModule } from '../pages/order-kind/order-kind.module';
import { EditAddressPageModule } from '../pages/edit-address/edit-address.module';
import { AddressesSelectorComponent } from '../components/addresses-selector/addresses-selector';
import { NewAddressComponent } from '../components/new-address/new-address';
import { BuyFromMarketPageModule } from '../pages/buy-from-market/buy-from-market.module';
import { DeliverFromToPage } from '../pages/deliver-from-to/deliver-from-to';
import { DeliverFromToPageModule } from '../pages/deliver-from-to/deliver-from-to.module';

import { FCM } from '@ionic-native/fcm';

import { DeviceTockenService } from '../providers/auth/deviceToken.service';
import { HttpModule } from '@angular/http';
import { UserOrderDetailPageModule } from '../pages/user-order-detail/user-order-detail.module';
import { EditRatingPageModule } from '../pages/edit-rating/edit-rating.module';
import { ChangePasswordPageModule } from '../pages/change-password/change-password.module';
import { ForgetPasswordPageModule } from '../pages/forget-password/forget-password.module';

import { ManUpModule, TRANSLATE_SERVICE, ManUpService } from 'ionic-manup';
import { AddCheckOrderPageModule } from '../pages/add-check-order/add-check-order.module';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppVersion } from '@ionic-native/app-version';
import { AddUserPhonePageModule } from '../pages/add-user-phone/add-user-phone.module';

import { Ng2ImgMaxModule } from 'ng2-img-max'; 

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("340338943258185")
  }
]);

@NgModule({
  declarations: [
    MyApp ,
    AddOrderPopoverComponent,
    AddressesSelectorComponent,
    NewAddressComponent
  ],
  imports: [
    SocialLoginModule.initialize(config),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    DatePickerModule,
    Ng2ImgMaxModule ,
    ManUpModule.forRoot({
      url: 'https://d3rgr96gwzty3y.cloudfront.net/tlabatac/api/getPlatformData',
      externalTranslations: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp,{
      scrollPadding: false,
      scrollAssist: true, 
      autoFocusAssist: false
  }),
    IonicStorageModule.forRoot(),
    EntityPageModule , 
    LandingPageModule ,
    SignupPageModule ,
    AddAddressPageModule ,
    AddCaptainPageModule ,
    HomePageModule ,
    CaptainsPageModule , 
    CaptainsMapPageModule , 
    AddOrderPageModule,
    OrdersPageModule,
    AssignOrderPageModule ,
    CaptainOrdersPageModule ,
    CaptainEvaluationPageModule ,
    AddAgencyPageModule ,
    AgenciesPageModule ,
    AssignCaptainsPageModule ,
    AgencyCaptainsPageModule ,
    SettingsPageModule ,
    AdminDashboardPageModule,
    UserOrdersPageModule,
    ChooseAddressPageModule,
    OrdersMapPageModule,
    EditAssignCaptainPageModule,
    CaptainAssignDetailsPageModule,
    SubAssignDetailsPageModule,
    AgencyDetailsPageModule,
    CaptainDetailsPageModule,
    EditAgencyPageModule,
    EditCaptainPageModule,
    DaysDetailsPageModule,
    UserAddressesPageModule,
    PhoneVerificationPageModule,
    OrderKindPageModule,
    EditAddressPageModule,
    BuyFromMarketPageModule,
    DeliverFromToPageModule,
    UserOrderDetailPageModule,
    EditRatingPageModule,
    ChangePasswordPageModule,
    ForgetPasswordPageModule,
    AddCheckOrderPageModule,
    AddUserPhonePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp ,
    AddOrderPopoverComponent,
   AddressesSelectorComponent,
   NewAddressComponent
    ],
  providers: [
    Api,
    User,
    LoginService,
    CaptainService,
    Principal,
    AccountService,
    AuthServerProvider,
    LocalStorageService,
    SessionStorageService,
    Camera,
    SplashScreen,
    StatusBar,
    AdMobFree,
    BackgroundMode,
    ImagePicker,
    Keyboard,
    Facebook,
    FCM,
    TwitterConnect,
    LocationAccuracy ,
    Geolocation,
    //Printer,
    DeviceTockenService,
    Device,
    DatePicker,
    InAppBrowser,
    AppVersion,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: TRANSLATE_SERVICE, useClass: TranslateService },
        ManUpService,
  ]
})
export class AppModule { }
