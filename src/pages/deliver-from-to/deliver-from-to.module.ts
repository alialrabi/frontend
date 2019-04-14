import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliverFromToPage } from './deliver-from-to';
import { TranslateModule } from '@ngx-translate/core';
import { User } from '../../providers/user/user';
import { UserOrderService } from '../../providers/auth/userOrders.service';

@NgModule({
  declarations: [
    DeliverFromToPage,
  ],
  imports: [
    IonicPageModule.forChild(DeliverFromToPage),
    TranslateModule.forChild()
  ],
  exports:[
    DeliverFromToPage
  ],
  entryComponents:[
    DeliverFromToPage
  ],
  providers:[
  
    User , UserOrderService
    
  ]
})
export class DeliverFromToPageModule {}
