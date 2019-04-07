import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAssignCaptainPage } from './edit-assign-captain';
import { TranslateModule } from '@ngx-translate/core';
import { CaptainService } from '../../providers/auth/captain.service';
import { DatePickerModule } from 'ionic-calendar-date-picker';


@NgModule({
  declarations: [
    EditAssignCaptainPage,
  ],
  imports: [
    DatePickerModule ,
    IonicPageModule.forChild(EditAssignCaptainPage),
    TranslateModule.forChild()
  ],
  exports:[
    EditAssignCaptainPage
  ],
  entryComponents:[
    EditAssignCaptainPage
  ],
  providers:[
  
    CaptainService
    
  ]
})
export class EditAssignCaptainPageModule {}
