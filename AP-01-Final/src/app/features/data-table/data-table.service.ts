import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  findAll(path: string): Observable<object> {
    return this.httpClient.get(path)
      .pipe(catchError(error => this.handleError(error)));
  }

  findById(path: string, id: number): Observable<object> {
    return this.httpClient.get(`${path}/${id}`)
      .pipe(catchError(error => this.handleError(error)));
  }

  create(path: string, object: object): Observable<object> {
    return this.httpClient.post(path, object)
      .pipe(catchError(error => this.handleError(error)));
  }

  update(path: string, object: object, id: number): Observable<object> {
    return this.httpClient.put(`${path}/${id}`, object)
      .pipe(catchError(error => this.handleError(error)));
  }

  delete(path: string, id: number): Observable<object> {
    return this.httpClient.delete(`${path}/${id}`)
      .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(err): Observable<never> {
    const errorMessage = 'Ocurrió un error. intente nuevamente más tarde';
    this.snackBar.open(errorMessage, 'OK', { duration: 10000 });
    return throwError(new Error(`${errorMessage} (${err.status})`));
  }
}
