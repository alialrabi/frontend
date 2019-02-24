import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddOrderPage } from './add-order';
import { User } from '../../providers/user/user';
import { TranslateModule } from '@ngx-translate/core';
import { OrderService } from '../../providers/auth/order.service';

@NgModule({
  declarations: [
    AddOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(AddOrderPage),
    TranslateModule.forChild()
  ],
  exports:[
    AddOrderPage
  ],
  entryComponents:[
    AddOrderPage
  ],
  providers:[
  
    User , OrderService
    
  ]
})
export class AddOrderPageModule {}
