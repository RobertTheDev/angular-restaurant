import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'http://localhost:4200/api/users/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.url + id);
  }
}
