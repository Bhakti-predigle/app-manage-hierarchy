import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent,SelectDropdownComponent,BadgeComponent,ProductSwitcherComponent,ProfileCardComponent,TabComponent,NavIconComponent,InputBoxComponent,TypographyComponent,GenerateButtonComponent,
} from '@predigle/micro/component-ui';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { KeycloakProfile } from 'keycloak-js';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SelectOption } from '@predigle/micro/component-ui';
import { from } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule,
    TopNavbarComponent,
    SelectDropdownComponent,
    BadgeComponent,
    ProductSwitcherComponent,
    ProfileCardComponent,
    TabComponent,
    NavIconComponent,
    InputBoxComponent,
    TypographyComponent,
    GenerateButtonComponent, ReactiveFormsModule]
})
export class HeaderComponent implements OnInit {
user: KeycloakProfile | null = null;
  tenantForm!: FormGroup;
  constructor(
    public authService: AuthService,
    // private precogSnackbar: PrecogSnackBar,
    private route: ActivatedRoute
  ) {}
  @Input() tenants: any[] = [];
  @Input() selectedTenant: any;
  @Output() tenantChange = new EventEmitter<any>();
  @Input() simplifiedData: SelectOption[] = [];
  @Input() isAdmin!: boolean;
  // iconUrl = ICON_URLS.arrowDown;
  
  ngOnInit(): void {
    this.getUser(); 
    this.createForm();

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedTenant'] && !changes['selectedTenant'].firstChange) {
      this.createForm();
    }
  }

  getUser() {
    from(this.authService.loadProfile()).subscribe({
      next: (userProfile) => {
        this.user = userProfile;
      },
      error: (_error) => {
        // this.precogSnackbar.open('Unable to fetch user informations', 'error');
      },
    });
  }

  createForm() {
    this.tenantForm = new FormGroup({
      tenant: new FormControl(this.simplifiedData.find(i => i.id === this.selectedTenant.attributes.tenant_id[0])),
    });
    this.tenantForm.get('tenant')?.valueChanges.subscribe(value =>
      this.onSelectChange(value)
    )
  }

  logout() {
    this.authService.logout();
  }

  getUserInitials(): string {
    const firstName = this.user?.firstName || '';
    const lastName = this.user?.lastName || '';
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }

  onSelectChange(event: any) {
    this.tenantChange.emit(event);
  }
  

}

