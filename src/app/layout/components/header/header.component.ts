import { Component } from '@angular/core';

const headerLinks = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/',
    name: 'The Restaurant',
  },
  {
    href: '/',
    name: 'Our Menu',
  },
  {
    href: '/',
    name: 'About',
  },
  {
    href: '/',
    name: 'Need To Know',
  },
  {
    href: '/',
    name: 'Ticketed Events',
  },
  {
    href: '/',
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
