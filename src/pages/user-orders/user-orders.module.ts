import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserOrdersPage } from './user-orders';
import { TranslateModule } from '@ngx-translate/core';
import { OrderService } from '../../providers/auth/order.service';
import { UserOrderService } from '../../providers/auth/userOrders.service';

@NgModule({
  declarations: [
    UserOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(UserOrdersPage),
    TranslateModule.forChild()
  ],
  exports:[
    UserOrdersPage
  ],
  entryComponents:[
    UserOrdersPage
  ],
  providers:[
  
    UserOrderService
    
  ]
})
export class UserOrdersPageModule {}
