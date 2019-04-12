import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneVerificationPage } from './phone-verification';
import { TranslateModule } from '@ngx-translate/core';
import { OrderService } from '../../providers/auth/order.service';

@NgModule({
  declarations: [
    PhoneVerificationPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneVerificationPage),
    TranslateModule.forChild()
  ],
  exports:[
    PhoneVerificationPage
  ],
  entryComponents:[
    PhoneVerificationPage
  ],
  providers:[
  
   OrderService
    
  ]
})
export class PhoneVerificationPageModule {}
