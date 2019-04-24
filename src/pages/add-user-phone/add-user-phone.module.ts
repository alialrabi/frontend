import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddUserPhonePage } from './add-user-phone';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AddUserPhonePage,
  ],
  imports: [
    IonicPageModule.forChild(AddUserPhonePage),
    TranslateModule.forChild()
  ],
  exports:[
    AddUserPhonePage
  ],
  entryComponents:[
    AddUserPhonePage
  ],
  providers:[
      
  ]
})
export class AddUserPhonePageModule {}
