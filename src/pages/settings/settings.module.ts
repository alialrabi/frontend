import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SettingsPage } from './settings';
import { CaptainService } from '../../providers/auth/captain.service';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsPage),
    TranslateModule.forChild()
  ],
  exports: [
    SettingsPage
  ],entryComponents :[
    SettingsPage
  ],providers:[
    CaptainService
  ]
})
export class SettingsPageModule { }
