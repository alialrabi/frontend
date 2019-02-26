import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaptainEvaluationPage } from './captain-evaluation';
import { TranslateModule } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';

@NgModule({
  declarations: [
    CaptainEvaluationPage,
  ],
  imports: [
    IonicPageModule.forChild(CaptainEvaluationPage),
    TranslateModule.forChild()
  ],
  exports:[
    CaptainEvaluationPage
  ],
  entryComponents:[
    CaptainEvaluationPage
  ],
  providers:[
  
    CaptainService
    
  ]
})
export class CaptainEvaluationPageModule {}
