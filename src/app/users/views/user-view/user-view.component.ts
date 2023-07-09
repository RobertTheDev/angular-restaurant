import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import User from 'src/app/interfaces/User';
import { catchError, of, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {
  user: User | null = null;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const userId = params.get('id');
          if (userId) {
            return this.usersService.getUserById(userId);
          } else {
            return of(null);
          }
        }),
        catchError(() => of(null)),
      )
      .subscribe((data) => {
        this.user = data;
      });
  }
}
