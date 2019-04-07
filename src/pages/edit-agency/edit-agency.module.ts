import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAgencyPage } from './edit-agency';
import { TranslateModule } from '@ngx-translate/core';
import { AddAgencyPage } from '../add-agency/add-agency';
import { AccountService } from '../../providers/auth/account.service';

@NgModule({
  declarations: [
    EditAgencyPage,
  ],
  imports: [
    IonicPageModule.forChild(EditAgencyPage),
    TranslateModule.forChild()
  ],
  exports: [
    EditAgencyPage
  ],
  entryComponents: [
    EditAgencyPage
  ],providers:[
    AccountService
  ]
})
export class EditAgencyPageModule {}
