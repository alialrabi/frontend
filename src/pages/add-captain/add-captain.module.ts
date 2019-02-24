import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCaptainPage } from './add-captain';
import { TranslateModule } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../providers/auth/account.service';

@NgModule({
  declarations: [
    AddCaptainPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCaptainPage),
    FormsModule,
  TranslateModule.forChild()
],
exports:[
  AddCaptainPage
],
entryComponents:[
  AddCaptainPage
],
providers:[

  CaptainService , AccountService
  
]
})
export class AddCaptainPageModule {}
