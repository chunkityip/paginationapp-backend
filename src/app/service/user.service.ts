import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/api-response';
import { Page } from '../interface/page';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly serverUrl: string = 'http://localhost:8085';

  constructor(private http: HttpClient) { }

  //Call the backend API to retrieve page
  //Two ways of doing this:

  // getUser(name: string = '', page: number = 0, size: number = 10): Observable<ApiResponse<Page>>> {
  //   return this.http.get<any>(`${this.serverUrl}/users?name=${name}&page=${page}&size=${size}`)
  // }

  users$ = (name: string = '', page: number = 0, size: number = 10): Observable<ApiResponse<Page>> =>
    this.http.get<any>(`${this.serverUrl}/users?name=${name}&page=${page}&size=${size}`);
  }


