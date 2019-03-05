import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaptainsMapPage } from './captains-map';
import { CaptainService } from '../../providers/auth/captain.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CaptainsMapPage,
  ],
  imports: [
    IonicPageModule.forChild(CaptainsMapPage),
    TranslateModule.forChild()
  ],
  entryComponents:[
    CaptainsMapPage
  ],exports:[
    CaptainsMapPage
  ],
  providers :[
    CaptainService
  ]
})
export class CaptainsMapPageModule {}
