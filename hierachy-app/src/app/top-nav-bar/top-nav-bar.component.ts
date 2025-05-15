import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss'],
  imports: [CommonModule]
})
export class TopNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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

