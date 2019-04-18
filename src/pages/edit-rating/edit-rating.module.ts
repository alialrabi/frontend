import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditRatingPage } from './edit-rating';
import { TranslateModule } from '@ngx-translate/core';
import { UserOrderService } from '../../providers/auth/userOrders.service';

@NgModule({
  declarations: [
    EditRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(EditRatingPage),
    TranslateModule.forChild()
  ],
  exports:[
    EditRatingPage
  ],
  entryComponents:[
    EditRatingPage
  ],
  providers:[
  
    UserOrderService
    
  ]
})
export class EditRatingPageModule {}
