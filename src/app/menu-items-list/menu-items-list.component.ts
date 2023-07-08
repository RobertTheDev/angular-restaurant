import { Component, Input, OnInit } from '@angular/core';
import menuItems from '../lib/data/menuItems';
import MenuItem from '../interfaces/MenuItem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-items-list',
  templateUrl: './menu-items-list.component.html',
  styleUrls: ['./menu-items-list.component.scss'],
})
export class MenuItemsListComponent implements OnInit {
  menuItems: MenuItem[] = [];

  @Input() category: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.category = params['category'];
      this.menuItems = menuItems.filter(
        (menuItem) => menuItem.category === this.category,
      );
    });
  }
}
