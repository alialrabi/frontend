import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCaptainPage } from './edit-captain';
import { TranslateModule } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';
import { AccountService } from '../../providers/auth/account.service';

@NgModule({
  declarations: [
    EditCaptainPage,
  ],
  imports: [
    IonicPageModule.forChild(EditCaptainPage),
    TranslateModule.forChild()
  ],
  exports:[
    EditCaptainPage
  ],
  entryComponents:[
    EditCaptainPage
  ],
  providers:[
  
    CaptainService , AccountService
    
  ]
})
export class EditCaptainPageModule {}
