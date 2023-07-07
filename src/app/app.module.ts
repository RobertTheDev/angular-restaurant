import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MenuItemsListComponent } from './menu-items-list/menu-items-list.component';
import { HomeComponent } from './home/home.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemsListComponent,
    HomeComponent,
    RestaurantPageComponent,
    GiftCardsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
