import { Component, Input } from '@angular/core';
import Testimonial from '../interfaces/Testimonial';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
})
export class TestimonialCardComponent {
  @Input() testimonial: Testimonial = {
    name: '',
    image: {
      uri: '',
      alt: '',
    },
    rating: 0,
    reviewDescription: '',
  };
}
