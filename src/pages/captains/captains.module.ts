import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaptainsPage } from './captains';
import { TranslateModule } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';

@NgModule({
  declarations: [
    CaptainsPage,
  ],
  imports: [
    IonicPageModule.forChild(CaptainsPage),
    TranslateModule.forChild()
  ],
  exports:[
    CaptainsPage
  ],
  entryComponents:[
    CaptainsPage
  ],
  providers:[
  
    CaptainService
    
  ]
})
export class CaptainsPageModule {}
