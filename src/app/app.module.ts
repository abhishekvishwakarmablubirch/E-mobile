import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
// import { ExampleComponent } from './example.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { DataService } from './search/data.service';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, FormsModule, AppRoutingModule, IonicModule.forRoot(),
    ReactiveFormsModule],
  providers: [DataService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}