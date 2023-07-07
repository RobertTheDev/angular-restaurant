import { Component } from '@angular/core';

const headerLinks = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/restaurant',
    name: 'The Restaurant',
  },
  {
    href: '/menus',
    name: 'Menus',
  },
  {
    href: '/about',
    name: 'About',
  },
  {
    href: '/details',
    name: 'Need To Know',
  },
  {
    href: '/events',
    name: 'Ticketed Events',
  },
  {
    href: '/gift-cards',
    name: 'Gift Cards',
  },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerLinks = headerLinks;

  constructor() {}
}
