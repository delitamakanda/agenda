import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  nextUrl: string;
  baseUrl: string = 'https://agenconf-api.herokuapp.com/api/';

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  checkToken(){
    return this.cookieService.check("token")
  }

  getToken(){
    return this.cookieService.get("token")
  }

  performLogout(msg?:string){
    this.cookieService.delete('token', '/')
    this.router.navigate(['signin'])
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

  performLogin(token, expires?:Date, msg?:string){
    let expiryDate = null 
    if (expires){
       expiryDate = expires
    }
    this.cookieService.set('token', token, expiryDate, '/');
    const nextUrl = this.getNextUrl()
    if (nextUrl){
      this.router.navigate([nextUrl])
    } else {
      this.router.navigate(['/'])
    }
  }
  
  login(username: string, password: string): Observable<any>{
    let httpOptions = this.apiService.createHeaders();
    let apiLoginEndpoint = `${this.baseUrl}auth/login/`;
    const data =  {
      username: username, 
      password: password
    }
    return this.http.post(apiLoginEndpoint, data, httpOptions);
}
register(username: string, email: string, password: string, password2: string): Observable<any>{
    let httpOptions = this.apiService.createHeaders()
    let apiRegisterEndpoint = `${this.baseUrl}auth/register`;
    const data = {
      username: username, 
      email: email,
      password: password,
      password2: password2
    }
    return this.http.post(apiRegisterEndpoint, data, httpOptions);
}
}
