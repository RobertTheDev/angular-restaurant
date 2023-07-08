import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsViewComponent } from './views/events-view/events-view.component';
import { EventViewComponent } from './views/event-view/event-view.component';
import { RouterModule } from '@angular/router';
import { PurchaseTicketFormComponent } from './components/purchase-ticket-form/purchase-ticket-form.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventImagesComponent } from './components/event-images/event-images.component';
import { EventDescriptionComponent } from './components/event-description/event-description.component';

@NgModule({
  declarations: [
    EventsViewComponent,
    EventViewComponent,
    PurchaseTicketFormComponent,
    EventCardComponent,
    EventImagesComponent,
    EventDescriptionComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class EventsModule {}
