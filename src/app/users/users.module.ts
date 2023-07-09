import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';
import { RouterModule } from '@angular/router';
import { UsersViewComponent } from './views/users-view/users-view.component';
import { UserViewComponent } from './views/user-view/user-view.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { UpdateUserFormComponent } from './components/update-user-form/update-user-form.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UpdateUserViewComponent } from './views/update-user-view/update-user-view.component';
import { CreateUserViewComponent } from './views/create-user-view/create-user-view.component';
import { ReactiveFormsModule } from '@angular/forms';

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
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  providers: [UsersService],
})
export class UsersModule {}
