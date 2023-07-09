import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MenusComponent } from './features/menus/menus.component';
import { DetailsComponent } from './features/details/details.component';
import { GiftCardsComponent } from './features/gift-cards/gift-cards.component';
import { AboutComponent } from './features/about/about.component';
import { RestaurantComponent } from './features/restaurant/restaurant.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { EventsViewComponent } from './events/views/events-view/events-view.component';
import { EventViewComponent } from './events/views/event-view/event-view.component';
import { UsersViewComponent } from './users/views/users-view/users-view.component';
import { UserViewComponent } from './users/views/user-view/user-view.component';

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
        component: EventsViewComponent,
      },
      {
        path: ':slug',
        component: EventViewComponent,
      },
    ],
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UsersViewComponent,
      },
      {
        path: ':id',
        component: UserViewComponent,
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
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
