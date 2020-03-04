import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenuePageRoutingModule } from './venue-routing.module';

import { VenuePage } from './venue.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenuePageRoutingModule,
    SharedModule
  ],
  declarations: [VenuePage]
})
export class VenuePageModule {}
