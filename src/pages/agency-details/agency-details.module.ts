import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgencyDetailsPage } from './agency-details';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AgencyDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AgencyDetailsPage),
    TranslateModule.forChild()
  ],
  exports:[
    AgencyDetailsPage
  ],
  entryComponents:[
    AgencyDetailsPage
  ],
  providers:[
 
  ]
})
export class AgencyDetailsPageModule {}
