import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAgencyPage } from './add-agency';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AccountService } from '../../providers/auth/account.service';

@NgModule({
  declarations: [
    AddAgencyPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAgencyPage),
    FormsModule,
    TranslateModule.forChild()
  ],
  exports: [
    AddAgencyPage
  ],
  entryComponents: [
    AddAgencyPage
  ],providers:[
    AccountService
  ]
})
export class AddAgencyPageModule {}
