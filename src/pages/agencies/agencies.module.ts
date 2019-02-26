import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgenciesPage } from './agencies';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AgenciesPage,
  ],
  imports: [
    IonicPageModule.forChild(AgenciesPage),
    TranslateModule.forChild()
  ],
  exports:[
    AgenciesPage
  ],
  entryComponents:[
    AgenciesPage
  ],
  providers:[
 
  ]
})
export class AgenciesPageModule {}
