import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { KEYCLOAK_SIGNOUT_EVENT_KEY } from '../utils';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private readonly keycloakService: KeycloakService,
    private readonly router: Router,
    private _http: HttpClient
  ) {}

  async isLoggedIn(): Promise<boolean> {
    return this.keycloakService.isLoggedIn();
  }

  async getUserId(): Promise<string | undefined> {
    return (await this.keycloakService.loadUserProfile()).id;
  }

  isAdminUser(): boolean {
    const keycloak = this.keycloakService.getKeycloakInstance();
    const tokenParsed = keycloak.tokenParsed;

    // Realm roles
    const realmRoles = tokenParsed?.realm_access?.roles || [];
  
    return realmRoles.includes('predigle-super-admin');
  }
  

  logout(): void {
    localStorage.removeItem('tenant_id');
    this.keycloakService.logout(window.location.origin + this.router.url);
    /**
     * Setting up 'KEYCLOAK_SIGNOUT_EVENT_KEY' to 'true', so that 'storage' event, ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event
     * can be used to run 'logout' method from other tabs too.
     *
     * A temporary solution, since 'Keycloak-js' does not support multi tab log out currently.
     * Ref: https://github.com/mauriciovigolo/keycloak-angular/issues/320
     *
     * Why is not called inside `.then` callback of `.logout`?
     * It is not because, keycloak is redirecting to keycloak URL just after logging out, so the code inside
     * '.then' callback is not executing properly.
     */
    window.localStorage.setItem(KEYCLOAK_SIGNOUT_EVENT_KEY, 'true');
  }

  async loadProfile(): Promise<KeycloakProfile | null> {
    try {
      const data = await this.keycloakService.loadUserProfile();
      return data;
    } catch (_error) {
      return null;
    }
  }

  redirectToLoginPage(): void {
    this.keycloakService.login({
      redirectUri: window.location.origin + this.router.url,
    });
  }

  getKeycloakInstance() {
    const keycloakData = this.keycloakService.getKeycloakInstance();
    return of(keycloakData.tokenParsed?.resource_access);
  }

  getTenants() {
    let params = new HttpParams().set('max', 100);

    return this._http.get(
      `${environment.keycloak.authority}/admin/realms/${environment.keycloak.realm}/groups/${environment.keycloak.group_id}/children/`,
      { params }
    );
  }
}



