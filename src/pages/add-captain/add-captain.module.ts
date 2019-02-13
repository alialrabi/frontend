import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCaptainPage } from './add-captain';
import { TranslateModule } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';

@NgModule({
  declarations: [
    AddCaptainPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCaptainPage),
  TranslateModule.forChild()
],
exports:[
  AddCaptainPage
],
entryComponents:[
  AddCaptainPage
],
providers:[

  CaptainService
  
]
})
export class AddCaptainPageModule {}
