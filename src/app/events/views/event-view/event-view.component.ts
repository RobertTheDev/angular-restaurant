import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import eventsData from 'src/app/lib/data/events';
import Event from 'src/app/interfaces/events/Event';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss'],
})
export class EventViewComponent implements OnInit {
  slug: string | null = null;
  event: Event | undefined = undefined;

  constructor(
    private location: Location,
    public activatedRoute: ActivatedRoute,
  ) {}

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.slug = params.get('slug');
      this.event = eventsData.find((event) => event.slug === this.slug);
    });
  }
}
