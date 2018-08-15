import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:5000/api/v1';
  constructor(private httpClient: HttpClient) { }

  registerUser(user) {
    const url = this.baseUrl + '/users';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post(url, user, httpOptions).pipe();
  }
}
