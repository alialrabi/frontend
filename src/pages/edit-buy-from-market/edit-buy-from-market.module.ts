import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditBuyFromMarketPage } from './edit-buy-from-market';
import { User } from '../../providers/user/user';
import { UserOrderService } from '../../providers/auth/userOrders.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    EditBuyFromMarketPage,
  ],
  imports: [
    IonicPageModule.forChild(EditBuyFromMarketPage),
    TranslateModule.forChild()
  ],
  exports:[
    EditBuyFromMarketPage
  ],
  entryComponents:[
    EditBuyFromMarketPage
  ],
  providers:[
  
    User , UserOrderService
    
  ]
})
export class EditBuyFromMarketPageModule {}
