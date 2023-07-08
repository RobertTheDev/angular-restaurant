import { Component } from '@angular/core';
import testimonialsData from 'src/app/lib/data/testimonials';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  testimonials = testimonialsData;
}
