import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private cookieServie: CookieService,
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const jwttoken = this.cookieServie.get('token');
        if (jwttoken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${jwttoken}`
                }
            });
        }

        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) { }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 403 || err.status === 401) {
                        const currentUrl = this.router.url;
                        if (currentUrl != '/signin') {
                            this.cookieServie.delete('token')
                            this.router.navigate(['/signin'], { queryParams: { next: currentUrl }})
                        }
                    }
                }
            })
        )
    }
}