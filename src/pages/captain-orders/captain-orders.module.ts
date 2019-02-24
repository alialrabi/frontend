import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaptainOrdersPage } from './captain-orders';
import { TranslateModule } from '@ngx-translate/core';
import { OrderService } from '../../providers/auth/order.service';

@NgModule({
  declarations: [
    CaptainOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(CaptainOrdersPage),
    TranslateModule.forChild()
  ],
  exports:[
    CaptainOrdersPage
  ],
  entryComponents:[
    CaptainOrdersPage
  ],
  providers:[
  
    OrderService
    
  ]
})
export class CaptainOrdersPageModule {}
