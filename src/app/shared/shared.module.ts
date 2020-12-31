import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { PrintErrorComponent } from './print-error/print-error.component';
import { ModalFlexEndComponent } from './modal/modal-flex-end/modal-flex-end.component';
import { CustomContentComponent } from './custom-content/custom-content.component';
import { CustomBackHeaderComponent } from './custom-back-header/custom-back-header.component';

@NgModule({
  declarations: [
    CustomHeaderComponent,
    CustomBackHeaderComponent,
    CustomContentComponent,
    PrintErrorComponent,
    ModalFlexEndComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CustomHeaderComponent,
    CustomBackHeaderComponent,
    CustomContentComponent,
    PrintErrorComponent,
    ModalFlexEndComponent
  ]
})
export class SharedModule { }
