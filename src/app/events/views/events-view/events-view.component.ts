import { Component } from '@angular/core';
import eventsData from 'src/app/lib/data/events';

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.scss'],
})
export class EventsViewComponent {
  events = eventsData;
}
