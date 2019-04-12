import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAddressesPage } from './user-addresses';
import { TranslateModule } from '@ngx-translate/core';
import { AddressService } from '../../providers/auth/address.service';

@NgModule({
  declarations: [
    UserAddressesPage,
  ],
  imports: [
    IonicPageModule.forChild(UserAddressesPage),
    TranslateModule.forChild()
  ],
  exports:[
    UserAddressesPage
  ],
  entryComponents:[
    UserAddressesPage
  ],
  providers:[
    AddressService
  ]
})
export class UserAddressesPageModule {}
