import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) {
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
        this.snackBar.open(err.error.message);
        return throwError(err);
      }));
  }

  /**
   * Refreshes the current user token with new User info.
   * If refresh fails, 
   */
  public refreshToken(): Observable<string | null> {
    return this.http.get<ApiResponse<ClientUser>>(`${this.url}/refresh-token`, { observe: 'response', withCredentials: true })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user.body));
        this.currUserSubject.next(user.body.data);
        return user.body.data.token;
      }), catchError(err => {
        if (err.status === 403) {
          // A 403 means that the refreshToken has expired, or we didn't send one up at all, which is Super Suspicious          
          localStorage.removeItem('currentUser');
          this.currUserSubject.next(null);    
          this.router.navigate(['/home/latest']);    
          this.snackBar.open(`${err.error.message}. You have been logged out.`);
          return null;          
        }
        this.snackBar.open(err.error.message);
        return throwError(err);
      }));
  }

  /**
   * Logs the user out, sets the user object to null, removes their info from localStorage, and
   * navigates to home.
   */
  public logout(): void {
    // Fire and forget. If this fails, it doesn't matter to the user, 
    // and we don't want to leak that fact anyway.
    this.http.get(`${this.url}/logout`, { withCredentials: true }).subscribe(() => {
      localStorage.removeItem('currentUser');
      this.currUserSubject.next(null);
      this.snackBar.open('See you next time!');
      this.router.navigate(['/']).then(() => {
        location.reload();
      });   
    });
  }
}
