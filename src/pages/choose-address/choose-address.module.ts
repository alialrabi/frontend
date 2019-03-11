import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseAddressPage } from './choose-address';
import { TranslateModule } from '@ngx-translate/core';
import { AddressService } from '../../providers/auth/address.service';

@NgModule({
  declarations: [
    ChooseAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseAddressPage),
    TranslateModule.forChild()
  ],
  exports:[
    ChooseAddressPage
  ],
  entryComponents:[
    ChooseAddressPage
  ],
  providers:[
  
    AddressService
    
  ]
})
export class ChooseAddressPageModule {}
