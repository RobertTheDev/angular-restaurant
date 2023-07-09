import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { catchError, of } from 'rxjs';
import User from 'src/app/interfaces/User';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService
      .getUsers()
      .pipe(catchError(() => of([])))
      .subscribe((data) => {
        this.users = data;
      });
  }
}
