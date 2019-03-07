import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminDashboardPage } from './admin-dashboard';
import { TranslateModule } from '@ngx-translate/core';
import { OrderService } from '../../providers/auth/order.service';
import { CaptainService } from '../../providers/auth/captain.service';

@NgModule({
  declarations: [
    AdminDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminDashboardPage),
    TranslateModule.forChild()
  ],
  exports:[
    AdminDashboardPage
  ],
  entryComponents:[
    AdminDashboardPage
  ],
  providers:[
  
     OrderService , CaptainService
    
  ]
})
export class AdminDashboardPageModule {}
