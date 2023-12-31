import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { MenuItemsListComponent } from './menu-items-list/menu-items-list.component';
import { HomeComponent } from './features/home/home.component';
import { GiftCardsComponent } from './features/gift-cards/gift-cards.component';
import { MenusComponent } from './features/menus/menus.component';
import { DetailsComponent } from './features/details/details.component';
import { AboutComponent } from './features/about/about.component';
import { RestaurantComponent } from './features/restaurant/restaurant.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { EventsModule } from './events/events.module';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    TestimonialCardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    LayoutModule,
    EventsModule,
    HttpClientModule,
    UsersModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
