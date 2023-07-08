import { Component, Input } from '@angular/core';
import Event from 'src/app/interfaces/events/Event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent {
  @Input() event: Event = {
    slug: '',
    title: '',
    subtitle: '',
    description: '',
    images: [],
  };
}
