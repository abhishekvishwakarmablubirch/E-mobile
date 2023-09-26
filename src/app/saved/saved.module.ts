import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedPageRoutingModule } from './saved-routing.module';

import { SavedPage } from './saved.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedPageRoutingModule,
    RouterModule.forChild([{ path: '', component: SavedPage }])
  ],
  declarations: [SavedPage]
})
export class SavedPageModule {}
