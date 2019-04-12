import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaysDetailsPage } from './days-details';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DaysDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DaysDetailsPage),
    TranslateModule.forChild()
  ],
  exports:[
    DaysDetailsPage
  ],
  entryComponents:[
    DaysDetailsPage
  ],
  providers:[  
    DaysDetailsPage 
  ]
})
export class DaysDetailsPageModule {}
