import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { MenusComponent } from './menus/menus.component';
import { DetailsComponent } from './details/details.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { AboutComponent } from './about/about.component';

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
    path: 'gift-cards',
    component: GiftCardsComponent,
  },
  {
    path: 'menus',
    component: MenusComponent,
  },
  {
    path: 'restaurant',
    component: RestaurantPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
