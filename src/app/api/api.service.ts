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
    let data = {
      'Content-Type': 'application/json'
    }

    if (token) {
      data['Authorization'] = `Bearer ${token}`
    }

    let httpOptions = {
      headers: new HttpHeaders(data)
    }
    
    return httpOptions;
  }
}
