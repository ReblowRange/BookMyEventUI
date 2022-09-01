import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbSelectModule,
  NbThemeModule,
} from '@nebular/theme';



@NgModule({
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
    
  ],
  exports: [
    NbInputModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbThemeModule,
    NbLayoutModule,
    NbSelectModule,
    NbListModule,
    NbCardModule,
    NbInputModule,
  ],
})
export class NebularLibsModule { }
