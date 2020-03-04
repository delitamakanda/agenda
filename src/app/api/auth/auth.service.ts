import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private cookieService: CookieService,
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
    this.cookieService.delete('token')
  }
}
