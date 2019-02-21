import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SignupPage } from './signup';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
    FormsModule,
    TranslateModule.forChild()
  ],
  exports: [
    SignupPage
  ],
  entryComponents: [
    SignupPage
  ]
})
export class SignupPageModule { }
