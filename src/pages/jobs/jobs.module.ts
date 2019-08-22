import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobsPage } from './jobs';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    JobsPage,
  ],
  imports: [
    IonicPageModule.forChild(JobsPage),
    TranslateModule.forChild()
  ],
  exports:[
    JobsPage
  ],
  entryComponents:[
    JobsPage
  ],
  providers:[
 
  ]
})
export class JobsPageModule {}
