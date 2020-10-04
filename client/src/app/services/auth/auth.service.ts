import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ApiResponse } from '../../models/api';
import { ClientUser, LoginUser, Roles } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = `/api/auth`;

  private currUserSubject: BehaviorSubject<ClientUser>;
  public currentUser: Observable<ClientUser>;

  constructor(private http: HttpClient, private router: Router) {
    this.currUserSubject = new BehaviorSubject<ClientUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currUserSubject.asObservable();
  }

  /**
   * Gets the current user value from the user subject.
   */
  public get currUserValue(): ClientUser {
    return this.currUserSubject.value;
  }

  /* Authorization */

  /**
   * Logs a user in given the provided credentials.
   * 
   * @param credentials A user's login credentials
   */
  public login(credentials: LoginUser): Observable<ClientUser> {
    return this.http.post<ApiResponse<ClientUser>>(`${this.url}/login`, credentials, { withCredentials: true, observe: 'response' })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user.body.data));
        this.currUserSubject.next(user.body.data);
        this.router.navigate(['/home']).then(() => {
          location.reload();
        });
        return user.body.data;
      }), catchError(err => {
        return throwError(err);
      }));
  }
}
