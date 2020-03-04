import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { CustomHeaderComponent } from "./custom-header/custom-header.component";


@NgModule({
  declarations: [
    CustomHeaderComponent
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
    CustomHeaderComponent
  ]
})
export class SharedModule { }
