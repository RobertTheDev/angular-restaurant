import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';
import { DetailsComponent } from './details/details.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/components/events/event.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'events',
    children: [
      {
        path: '',
        component: EventsComponent,
      },
      {
        path: ':id',
        component: EventComponent,
      },
    ],
  },
  {
    path: 'gift-cards',
    component: GiftCardsComponent,
  },
  {
    path: 'menus',
    component: MenusComponent,
  },

  {
    path: 'restaurant',
    component: RestaurantComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
