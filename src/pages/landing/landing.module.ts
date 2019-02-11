import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandingPage } from './landing';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    LandingPage
  ],
  imports: [
    IonicPageModule.forChild(LandingPage),
    TranslateModule.forChild()
  ],
  exports: [
    LandingPage
  ],
  entryComponents: [
    LandingPage
  ]
})
export class LandingPageModule {}
