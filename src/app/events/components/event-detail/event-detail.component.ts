import { Component, Input } from '@angular/core';
import Event from 'src/app/interfaces/events/Event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent {
  @Input() event: Event | null = null;
}
