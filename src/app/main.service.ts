import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppComponent } from './app.component';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  permission_list: any;
  can_view: boolean;

  constructor(public httpClient: HttpClient) { }
  private apiURL = AppComponent.API_URL;

  formdata = new FormData();

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      'token': JSON.parse(localStorage.getItem('auth_app_token')).value
    })
  }


  httpOptions1 = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'token': JSON.parse(localStorage.getItem('auth_app_token')).value
    }),
    body: {}
  }



  //==========================================share data============================================

  getUserInfo(): Observable<any> {
    return this.httpClient.get<any>(this.apiURL + '/tcUser/getuserforDropdown', this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }

  addShareDataInfo(data): Observable<any> {
    return this.httpClient.post<any>(this.apiURL + '/addSharedInformation', data, this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }

  updateShareDataInfo(data): Observable<any> {
    return this.httpClient.post<any>(this.apiURL + '/updateSharedInformation', data, this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }

  getShareDataList(): Observable<any> {
    return this.httpClient.get<any>(this.apiURL + '/getShareDataList', this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }

  activeShareData(data): Observable<any> {
    return this.httpClient.post(this.apiURL + '/activeInActiveUpdate', data, this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }


  //======================================================================================


  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}


