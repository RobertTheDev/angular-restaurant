import { Component, Input } from '@angular/core';
import EventCard from 'src/app/interfaces/events/EventCard';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent {
  @Input() event: EventCard = {
    slug: '',
    title: '',
    subtitle: '',
    image: {
      uri: '',
      alt: '',
    },
  };
}
