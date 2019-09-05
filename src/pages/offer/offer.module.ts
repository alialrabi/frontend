import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferPage } from './offer';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OfferPage,
  ],
  imports: [
    IonicPageModule.forChild(OfferPage),
    TranslateModule.forChild()
  ],
  exports:[
    OfferPage
  ],
  entryComponents:[
    OfferPage
  ],
  providers:[
    
  ]
})
export class OfferPageModule {}
