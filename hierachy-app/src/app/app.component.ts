import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './services/auth.service';
import { KEYCLOAK_SIGNOUT_EVENT_KEY } from './utils';
import { ActivatedRoute, NavigationError, Router } from '@angular/router';
import { TenantService } from './services/tenant.service';
import {
  KeycloakService,
  KeycloakEvent,
  KeycloakEventType,
} from 'keycloak-angular';
import { SelectOption } from '@predigle/micro/component-ui';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //   standalone: true,
  // imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  isWait = new BehaviorSubject(false);
  tenants: any[] = [];
  selectedTenant: any;
  isTenantsLoaded = false;
  showHeader: boolean = true;
  simplifiedData: SelectOption[] = [];
  isAdmin: boolean = false;

  constructor(
    private authService: AuthService,
    public router: Router,
    private tenantService: TenantService,
    private KeycloakService: KeycloakService,
    private route: ActivatedRoute,
    private keycloak: KeycloakService
  ) {
    window.localStorage.removeItem(KEYCLOAK_SIGNOUT_EVENT_KEY);

    window.addEventListener('storage', (event) => {
      if (event.key === KEYCLOAK_SIGNOUT_EVENT_KEY) {
        this.logout();
      }
    });
  }

  logout() {
    this.KeycloakService.logout();
  }

  ngOnInit(): void {

   this.checkLogin();

    this.KeycloakService.keycloakEvents$.subscribe((event: KeycloakEvent) => {
      if (event.type === KeycloakEventType.OnTokenExpired) {
        console.log('Token expired. Logging out...');
        this.logout();
      }
    });

    this.checkAdminRoleAndLoad();

  }

  async checkLogin() {
  const loggedIn = await this.keycloak.isLoggedIn();
  console.log('Is logged in? ==============>', loggedIn);
  const roles = this.keycloak.getUserRoles(true); // true = include client roles
console.log('User roles from getUserRoles:================>', roles);
}

checkAdminRoleAndLoad(): void {
  const roles = this.keycloak.getUserRoles(true); // include client roles
  console.log('User roles from Keycloak:', roles);

  const isAdmin = roles.includes('admin') || roles.includes('predigle-super-admin');
  this.isAdmin = isAdmin;

  if (!isAdmin) {
    alert('Access restricted to admin users only.');
    this.logout();
    return;
  }

  // If admin, proceed
  this.getTenants();
}



  getTenants(): void {
    this.authService.getTenants().subscribe({
      next: (data: any) => {
        this.tenants = data;

        const currentTenantId =
          sessionStorage.getItem('current_tenant_id') ||
          this.tenantService.getTenantId();

        this.selectedTenant =
          this.tenants.find(
            (tenant: any) => tenant.attributes.tenant_id[0] === currentTenantId
          ) || this.tenants[0];

        if (this.selectedTenant) {
          const tenantId = this.selectedTenant.attributes.tenant_id[0];

          if (currentTenantId !== tenantId) {
            this.tenantService.setTenantId(tenantId);
            sessionStorage.setItem('current_tenant_id', tenantId);
          }
        }

        this.isTenantsLoaded = true;
        this.simplifiedData = this.tenants.map((tenant) => ({
          id: tenant.attributes.tenant_id[0],
          primaryContent: tenant.name
        }));
      },
      error: (err) => {
        console.error('Failed to fetch tenants', err);
        this.isTenantsLoaded = true;
      },
    });
  }

  onTenantChange(selectedTenant: any): void {
    const tenantId = selectedTenant.id;
    this.tenantService.setTenantId(tenantId);
    sessionStorage.setItem('current_tenant_id', tenantId);

    // Reinitialize state
    this.tenants = [];
    this.selectedTenant = null;
    this.isTenantsLoaded = false;

    this.ngOnInit();
  }
}

