import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersViewComponent } from './users-view/users-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UsersService } from './users.service';
import { RouterModule } from '@angular/router';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { UpdateUserFormComponent } from './update-user-form/update-user-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UpdateUserViewComponent } from './update-user-view/update-user-view.component';
import { CreateUserViewComponent } from './create-user-view/create-user-view.component';

@NgModule({
  declarations: [
    UsersViewComponent,
    UserViewComponent,
    CreateUserFormComponent,
    UpdateUserFormComponent,
    UserDetailComponent,
    UpdateUserViewComponent,
    CreateUserViewComponent,
  ],
  imports: [CommonModule, RouterModule],
  providers: [UsersService],
})
export class UsersModule {}
