import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAddressPage } from './edit-address';
import { TranslateModule } from '@ngx-translate/core';
import { AddressService } from '../../providers/auth/address.service';

@NgModule({
  declarations: [
    EditAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(EditAddressPage),
    TranslateModule.forChild()
  ],
  exports:[
    EditAddressPage
  ]
  ,
  entryComponents:[
    EditAddressPage
  ],
  providers:[
    AddressService
  ]
})
export class EditAddressPageModule {}
