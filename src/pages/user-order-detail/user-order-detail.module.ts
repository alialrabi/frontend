import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserOrderDetailPage } from './user-order-detail';
import { TranslateModule } from '@ngx-translate/core';
import { OrderService } from '../../providers/auth/order.service';
import { UserOrderService } from '../../providers/auth/userOrders.service';

@NgModule({
  declarations: [
    UserOrderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(UserOrderDetailPage),
    TranslateModule.forChild()
  ],
  entryComponents:[
    UserOrderDetailPage
  ],exports:[
    UserOrderDetailPage
  ],
  providers :[
    UserOrderService
  ]
})
export class UserOrderDetailPageModule {}
