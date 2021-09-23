import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../_services/token-storage.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const TOKEN_HEADER_KEY = 'Authorization';
const LANGUAGE_PARAM_KEY = 'language';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storageService: TokenStorageService, private authService: AuthService,
    private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;

    const token = this.storageService.getToken();
    const language = localStorage.getItem('language') || 'pt-BR';
    let headers = req.headers;
    let params = req.params.set(LANGUAGE_PARAM_KEY, language);

    const isRequestForAuth = req.url.includes('/security');

    if (token != null && !isRequestForAuth) {
      headers = req.headers.set(TOKEN_HEADER_KEY, token);
    }

    authReq = req.clone({
      headers: headers,
      params: params
    });

    return next.handle(authReq).pipe(
      catchError((err) => {
          switch (err.status) {
          case 0:
              console.log('no connection')
              break;

          case 302:

              console.log('maintenance')
              this.router.navigate(['/']);
              setTimeout(() => {
                  location.reload();
              }, 1000);
              break;

          case 401:
            this.redirectToSignOut();
              break;
          }
          return throwError(err);
      })
    );
  }

  private redirectToSignOut() {
    this.authService.signOut();
    this.router.navigate(['/login']);

  }

}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
