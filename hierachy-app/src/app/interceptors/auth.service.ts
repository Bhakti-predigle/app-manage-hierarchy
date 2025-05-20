import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
// import { PrecogSnackBar } from '../services/snack-bar';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,    
    public authService: AuthService,
    // private snackbar: PrecogSnackBar,
    private keycloakservice : KeycloakService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Unauthorized response, redirect to login page
          this.authService.logout()
        }

        // Show snackbar with error message
        // this.snackbar.open('Something went wrong', 'error');
         
        return throwError(() => new Error(error.message));
      })
    );
  
  }
}
