import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersViewComponent } from './users-view/users-view.component';
import { UserViewComponent } from './user-view/user-view.component';

@NgModule({
  declarations: [UsersViewComponent, UserViewComponent],
  imports: [CommonModule],
})
export class UsersModule {}
