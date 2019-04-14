import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyFromMarketPage } from './buy-from-market';
//import { UserOrderService } from '../../providers/auth/userOrders.service';
import { User } from '../../providers/user/user'
import { TranslateModule } from '@ngx-translate/core';
import { UserOrderService } from '../../providers/auth/userOrders.service';

@NgModule({
  declarations: [
    BuyFromMarketPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyFromMarketPage),
    TranslateModule.forChild()
  ],
  exports:[
    BuyFromMarketPage
  ],
  entryComponents:[
    BuyFromMarketPage
  ],
  providers:[
  
    User , UserOrderService
    
  ]
})
export class BuyFromMarketPageModule {}
