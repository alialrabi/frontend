import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaptainDetailsPage } from './captain-details';
import { TranslateModule } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';

@NgModule({
  declarations: [
    CaptainDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CaptainDetailsPage),
    TranslateModule.forChild()
  ],
  exports:[
    CaptainDetailsPage
  ],
  entryComponents:[
    CaptainDetailsPage
  ],
  providers:[
  
    CaptainService
    
  ]
})
export class CaptainDetailsPageModule {}
