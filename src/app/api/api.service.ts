import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  createHeaders(token?: string) {
    const data = {
      'Content-Type': 'application/json',
      Authorization: ''
    };

    if (token) {
      data.Authorization = `Bearer ${token}`;
    }

    const httpOptions = {
      headers: new HttpHeaders(data)
    };

    return httpOptions;
  }
}
