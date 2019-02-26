import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgencyCaptainsPage } from './agency-captains';
import { TranslateModule } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';

@NgModule({
  declarations: [
    AgencyCaptainsPage,
  ],
  imports: [
    IonicPageModule.forChild(AgencyCaptainsPage),
    TranslateModule.forChild()
  ],
  exports:[
    AgencyCaptainsPage
  ],
  entryComponents:[
    AgencyCaptainsPage
  ],
  providers:[

    CaptainService
 
  ]
})
export class AgencyCaptainsPageModule {}
