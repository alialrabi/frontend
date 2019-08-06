import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditDeliverFromToPage } from './edit-deliver-from-to';
import { TranslateModule } from '@ngx-translate/core';
import { User } from '../../providers/user/user';
import { UserOrderService } from '../../providers/auth/userOrders.service';

@NgModule({
  declarations: [
    EditDeliverFromToPage,
  ],
  imports: [
    IonicPageModule.forChild(EditDeliverFromToPage),
    TranslateModule.forChild()
  ],
  exports:[
    EditDeliverFromToPage
  ],
  entryComponents:[
    EditDeliverFromToPage
  ],
  providers:[
  
    User , UserOrderService
    
  ]
})
export class EditDeliverFromToPageModule {}
