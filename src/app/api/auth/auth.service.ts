import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { baseUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  nextUrl: string;

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  performLogout(msg?: string) {
    localStorage.removeItem('token');
    this.router.navigate(['signin']);
  }

  getNextUrl() {
    this.route.queryParams.subscribe(params => {
      if (params['next']) {
        this.nextUrl = params['next'];
        switch (this.nextUrl) {
          case '/dummy-url':
            this.nextUrl = null;
            break;

          default:
            break;
        }
      }
    })
    return this.nextUrl
  }

  performLogin(token, expires?: Date, msg?: string) {
    let expiryDate = null
    if (expires) {
      expiryDate = expires
    }

    localStorage.setItem('token', token);
    const nextUrl = this.getNextUrl()
    if (nextUrl) {
      this.router.navigate([nextUrl])
    } else {
      this.router.navigate(['/'])
    }
  }

  login(username: string, password: string): Observable<any> {
    let httpOptions = this.apiService.createHeaders();
    let apiLoginEndpoint = `${baseUrl}auth/login/`;
    const data = {
      username: username,
      password: password
    }
    return this.http.post(apiLoginEndpoint, data, httpOptions);
  }
  register(data: any): Observable<any> {
    let httpOptions = this.apiService.createHeaders()
    let apiRegisterEndpoint = `${baseUrl}auth/register/`;
    const items = {
      username: data.username,
      email: data.email,
      password: data.password,
      password2: data.password2
    }
    return this.http.post(apiRegisterEndpoint, items, httpOptions);
  }
}
