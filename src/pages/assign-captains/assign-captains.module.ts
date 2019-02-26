import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignCaptainsPage } from './assign-captains';
import { TranslateModule } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';

@NgModule({
  declarations: [
    AssignCaptainsPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignCaptainsPage),
    TranslateModule.forChild()
  ],
  exports:[
    AssignCaptainsPage
  ],
  entryComponents:[
    AssignCaptainsPage
  ],
  providers:[
  
    CaptainService
    
  ]
})
export class AssignCaptainsPageModule {}
