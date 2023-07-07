import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MenuItemsListComponent } from './menu-items-list/menu-items-list.component';
import { HomeComponent } from './home/home.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { MenusComponent } from './menus/menus.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EventModule } from './event/event.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemsListComponent,
    HomeComponent,
    GiftCardsComponent,
    MenusComponent,
    DetailsComponent,
    AboutComponent,
    RestaurantComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, EventModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
