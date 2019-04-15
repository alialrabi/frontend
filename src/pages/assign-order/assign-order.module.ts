import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignOrderPage } from './assign-order';
import { TranslateModule } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';
import { OrderService } from '../../providers/auth/order.service';
import { UserOrderService } from '../../providers/auth/userOrders.service';

@NgModule({
  declarations: [
    AssignOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignOrderPage),
    TranslateModule.forChild()
  ],
  exports:[
    AssignOrderPage
  ],
  entryComponents:[
    AssignOrderPage
  ],
  providers:[
  
    CaptainService , OrderService , UserOrderService
    
  ]
})
export class AssignOrderPageModule {}
