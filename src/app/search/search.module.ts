import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchPageComponent } from './search.page';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: SearchPageComponent }])],
  declarations: [SearchPageComponent],
  exports: [SearchPageComponent],
})
export class SearchPageModule {}