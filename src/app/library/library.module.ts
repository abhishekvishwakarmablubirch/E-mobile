import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { LibraryPageComponent } from './library.page';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: LibraryPageComponent }])],
  declarations: [LibraryPageComponent],
  exports: [LibraryPageComponent],
})
export class LibraryPageModule {}