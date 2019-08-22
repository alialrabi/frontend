import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddJobPage } from './add-job';
import { TranslateModule } from '@ngx-translate/core';
import { JobService } from '../../providers/auth/job.service';

@NgModule({
  declarations: [
    AddJobPage,
  ],
  imports: [
    IonicPageModule.forChild(AddJobPage),
    TranslateModule.forChild()
  ],
  exports:[
    AddJobPage
  ],
  entryComponents:[
    AddJobPage
  ],
  providers:[
  
    JobService
    
  ]
})
export class AddJobPageModule {}
