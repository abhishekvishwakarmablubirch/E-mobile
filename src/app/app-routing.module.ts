import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      
      {
        path: '',
        component: HeaderComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
          },
          {
            path: 'account',
            loadChildren: () => import('./account/account.module').then((m) => m.AccountPageModule),
          },
          {
            path: 'booking',
            loadChildren: () => import('./booking/booking.module').then((m) => m.BookingPageModule),
          },
          {
            path: 'search',
            loadChildren: () => import('./search/search.module').then((m) => m.SearchPageModule),
          },
          {
            path: 'saved',
            loadChildren: () => import('./saved/saved.module').then((m) => m.SavedPageModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
  
}