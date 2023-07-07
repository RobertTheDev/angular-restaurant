import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful/contentful.service';

@Component({
  selector: 'app-menu-items-list',
  templateUrl: './menu-items-list.component.html',
  styleUrls: ['./menu-items-list.component.scss'],
})
export class MenuItemsListComponent implements OnInit {
  menuItems: any = [];

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.contentfulService
      .getAllEntries()
      .then((menuItems) => (this.menuItems = menuItems));
  }
}
