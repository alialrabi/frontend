import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdersPage } from './orders';
import { TranslateModule } from '@ngx-translate/core';
import { OrderService } from '../../providers/auth/order.service';

@NgModule({
  declarations: [
    OrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdersPage),
    TranslateModule.forChild()
  ],
  exports:[
    OrdersPage
  ],
  entryComponents:[
    OrdersPage
  ],
  providers:[
  
    OrderService
    
  ]
})
export class OrdersPageModule {}
