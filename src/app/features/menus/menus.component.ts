import { Component } from '@angular/core';
import { Router } from '@angular/router';
import menuCategories from 'src/app/lib/data/menuCategories';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export class MenusComponent {
  menuCategories = menuCategories;

  category: string | null = null;

  constructor(private router: Router) {}

  navigateToCategory(category: string) {
    this.router.navigate([], { queryParams: { category: category } });
  }
}
