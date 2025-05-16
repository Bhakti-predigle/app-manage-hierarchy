import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent,SelectDropdownComponent,BadgeComponent,ProductSwitcherComponent,ProfileCardComponent,TabComponent,NavIconComponent,InputBoxComponent,TypographyComponent,GenerateButtonComponent,
} from '@predigle/micro/component-ui';

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
    GenerateButtonComponent, ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tabOptions = [
    { label: 'My Details', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
    { label: 'Option 3', route: '/option-3' },
  ];

  subTabOptions = [
    { label: 'Sub Details', route: '/contact' },
    { label: 'Sub Option 1', route: '/option-1' },
    { label: 'Sub Option 2', route: '/about' },
    { label: 'Sub Option 3', route: '/home' },
  ];

  workspaces = [
        {
          id: '1',
          primaryContent: 'Workspace 1',
          secondaryContent: 'AL',
          assetSrc: 'profile-picture.png',
        },
        {
          id: '2',
          primaryContent: 'Workspace 2',
          secondaryContent: 'AK',
        },
        {
          id: '3',
          primaryContent: 'Workspace 3',
          secondaryContent: 'AM',
          assetSrc: 'profile-picture.png',
        },
        {
          id: '4',
          primaryContent: 'Workspace 4',
          secondaryContent: 'AZ',
          assetSrc: 'profile-picture.png',
        },
      ];

}


// import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, CommonModule } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { PrecogSnackBar } from 'src/app/shared/services/snack-bar';
// import { from } from 'rxjs';
// import { KeycloakProfile } from 'keycloak-js';
// import { MatSelectChange } from '@angular/material/select';
// import { SelectOption } from '@predigle/micro/component-ui';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { ICON_URLS } from 'src/assets/assets';


// @Component({
//  standalone: true,
//   selector: 'app-top-nav-bar',
//   templateUrl: './top-nav-bar.component.html',
//   styleUrls: ['./top-nav-bar.component.scss'],
//   imports: [CommonModule]
// })
// export class TopNavBarComponent implements OnInit {
//   user: KeycloakProfile | null = null;
//   tenantForm!: FormGroup;
//   constructor(
//     public authService: AuthService,
//     private precogSnackbar: PrecogSnackBar,
//     private route: ActivatedRoute
//   ) {}
//   @Input() tenants: any[] = [];
//   @Input() selectedTenant: any;
//   @Output() tenantChange = new EventEmitter<any>();
//   @Input() simplifiedData: SelectOption[] = [];
//   @Input() isAdmin!: boolean;
//   showHeader: boolean = true;
//   iconUrl = ICON_URLS.arrowDown;
  
//   ngOnInit(): void {
//     this.getUser(); 
//     this.createForm();

//     this.route.data.subscribe(data => {
//       if (data['showHeader'] === false) {
//         this.showHeader = false;
//       }
//     });
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['selectedTenant'] && !changes['selectedTenant'].firstChange) {
//       this.createForm();
//     }
//   }

//   getUser() {
//     from(this.authService.loadProfile()).subscribe({
//       next: (userProfile) => {
//         this.user = userProfile;
//       },
//       error: (_error) => {
//         this.precogSnackbar.open('Unable to fetch user informations', 'error');
//       },
//     });
//   }

//   createForm() {
//     this.tenantForm = new FormGroup({
//       tenant: new FormControl(this.simplifiedData.find(i => i.id === this.selectedTenant.attributes.tenant_id[0])),
//     });
//     this.tenantForm.get('tenant')?.valueChanges.subscribe(value =>
//       this.onSelectChange(value)
//     )
//   }

//   logout() {
//     this.authService.logout();
//   }

//   getUserInitials(): string {
//     const firstName = this.user?.firstName || '';
//     const lastName = this.user?.lastName || '';
//     return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
//   }

//   onSelectChange(event: any) {
//     this.tenantChange.emit(event);
//   }
  
  
 
// }

