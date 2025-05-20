import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	Router,
	RouterStateSnapshot
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

// Ref: https://github.com/mauriciovigolo/keycloak-angular?tab=readme-ov-file#authguard
@Injectable({
	providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
	constructor(
		protected override readonly router: Router,
		protected readonly keycloak: KeycloakService
	) {
		super(router, keycloak);
	}

	public async isAccessAllowed(
		_route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	) {
		if (!this.authenticated) {
			await this.keycloak.login({
				redirectUri: window.location.origin + state.url
			});
		}

		return true;
	}
}