import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MenuItemsListComponent } from './menu-items-list/menu-items-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, MenuItemsListComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
