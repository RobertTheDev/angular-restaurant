import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss'],
})
export class EventViewComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
