import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER , Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { TenantInterceptor } from './interceptors/tenant.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.service';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './top-nav-bar/header.component';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak
      .init({
        config: {
          url: environment.keycloak.authority,
          realm: environment.keycloak.realm,
          clientId: environment.keycloak.clientId,
        },
        loadUserProfileAtStartUp: true,
        initOptions: {
          onLoad: 'login-required',
          // silentCheckSsoRedirectUri:
          //   window.location.origin + '/assets/silent-check-sso.html',
          checkLoginIframe: false,
          redirectUri: environment.keycloak.redirectUri,
          flow: 'standard',
        },
        // Enables Bearer interceptor
        enableBearerInterceptor: true,
        // Prefix for the Bearer token
        bearerPrefix: 'Bearer',
        // URLs excluded from Bearer token addition (empty by default)
        // bearerExcludedUrls: []
      })
      .catch((error) => {
        console.error('Keycloak initialization failed:', error);
        // Redirect to "Under Maintenance" message or component
        document.body.innerHTML =
          '<div class="under-maintenance"><h1>Under Maintenance</h1><p>Please try again later.</p></div>';
        return of(false); // Return a resolved Observable to prevent further errors
      });
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HeaderComponent,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
  ],
   providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TenantInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    KeycloakService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
