import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCheckOrderPage } from './add-check-order';
import { TranslateModule } from '@ngx-translate/core';
import { OrderService } from '../../providers/auth/order.service';

@NgModule({
  declarations: [
    AddCheckOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCheckOrderPage),
    TranslateModule.forChild()
  ],
  exports:[
    AddCheckOrderPage
  ],
  entryComponents:[
    AddCheckOrderPage
  ],
  providers:[
  
    OrderService
    
  ]
})
export class AddCheckOrderPageModule {}
