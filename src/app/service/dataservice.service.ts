import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})



export class DataserviceService {
  private url = `https://bybitserver.azurewebsites.net/market`;

  constructor(private http: HttpClient) {
  }

  /**
   * get all symbols and candles from the period
   * @returns respose object from request header
   */
  get_all(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const errorMessage = `Error occurred while retrieving data: ${error.message}`;
          return throwError(() => errorMessage);
        })
      );
  }
}
