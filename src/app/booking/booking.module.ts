import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingPageRoutingModule } from './booking-routing.module';

import { BookingPage } from './booking.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingPageRoutingModule,
    RouterModule.forChild([{ path: '', component: BookingPage }])
  ],
  declarations: [BookingPage]
})
export class BookingPageModule {}
