import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAddressPage } from './add-address';
import { TranslateModule } from '@ngx-translate/core';
import { AddressService } from '../../providers/auth/address.service';


@NgModule({
  declarations: [
    AddAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAddressPage),
    TranslateModule.forChild()
  ],
  exports:[
    AddAddressPage
  ],
  entryComponents:[
    AddAddressPage
  ],
  providers:[
    AddressService
  ]
})
export class AddAddressPageModule {}
