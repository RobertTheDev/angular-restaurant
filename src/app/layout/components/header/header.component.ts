import { Component } from '@angular/core';

const headerLinks = [
  {
    href: '/',
    name: 'The Bar',
  },
  {
    href: '/',
    name: 'Gallery',
  },
  {
    href: '/',
    name: 'Home',
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
    name: 'Menus',
  },
  {
    href: '/',
    name: 'Ticketed Events',
  },
  {
    href: '/',
    name: 'Private Dining',
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
