import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdersMapPage } from './orders-map';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OrdersMapPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdersMapPage),
    TranslateModule.forChild()
  ],
  entryComponents:[
    OrdersMapPage
  ],exports:[
    OrdersMapPage
  ],
  providers :[
    
  ]
})
export class OrdersMapPageModule {}
