import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderKindPage } from './order-kind';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OrderKindPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderKindPage),
    TranslateModule.forChild()
  ],
  exports:[
    OrderKindPage
  ],
  entryComponents:[
    OrderKindPage
  ],
  providers:[    
  ]
})
export class OrderKindPageModule {}
