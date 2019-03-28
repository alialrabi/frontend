import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaptainAssignDetailsPage } from './captain-assign-details';
import { TranslateModule } from '@ngx-translate/core';
import { CaptainEvaluationPage } from '../captain-evaluation/captain-evaluation';
import { CaptainService } from '../../providers/auth/captain.service';

@NgModule({
  declarations: [
    CaptainAssignDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CaptainAssignDetailsPage),
    TranslateModule.forChild()
  ],
  exports:[
    CaptainAssignDetailsPage
  ],
  entryComponents:[
    CaptainAssignDetailsPage
  ],
  providers:[
  
    CaptainService
    
  ]
})
export class CaptainAssignDetailsPageModule {}
