import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubAssignDetailsPage } from './sub-assign-details';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SubAssignDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SubAssignDetailsPage),
    TranslateModule.forChild()
  ],
  exports:[
    SubAssignDetailsPage
  ],
  entryComponents:[
    SubAssignDetailsPage
  ],
  providers:[  
    SubAssignDetailsPage 
  ]
})
export class SubAssignDetailsPageModule {}
