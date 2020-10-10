import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ApiResponse } from '../../models/api';
import { NewsDocument, NewspostForm } from '../../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private url = `/api/contrib/news`;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  /**
   * Creates and saves a new newspost to the database.
   * 
   * @param form A newspost's info
   */
  public createNewspost(form: NewspostForm) {
    return this.http.post<ApiResponse<null>>(`${this.url}/create-newspost`, form, {observe: 'response', withCredentials: true})
      .pipe(map(res => {
        this.snackBar.open(res.body.message);
        return;
      }), catchError(err => {
        this.snackBar.open(err.error.message);
        return throwError(err);
      }));
  }

  /**
   * Submits edits on a newspost to the database.
   * 
   * @param form A newspost's info
   */
  public editNewspost(form: NewspostForm) {
    return this.http.patch<ApiResponse<null>>(`${this.url}/edit-newspost`, form, {observe: 'response', withCredentials: true})
      .pipe(map(res => {
        this.snackBar.open(res.body.message);
        return;
      }), catchError(err => {
        this.snackBar.open(err.error.message);
        return throwError(err);
      }));
  }

  /**
   * Fetches all newsposts
   */
  public fetchAll() {
    return this.http.get<ApiResponse<NewsDocument>>(`${this.url}/fetch-all`, {observe: 'response', withCredentials: true})
      .pipe(map(res => {
        return res.body.data;
      }), catchError(err => {
        this.snackBar.open(err.error.message);
        return throwError(err);
      }));
  }
}
