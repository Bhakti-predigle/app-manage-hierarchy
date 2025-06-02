import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '@predigle/micro';
import { HeaderComponent } from '../top-nav-bar/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BreadcrumbComponent, SelectDropdownComponent,InputsComponent,SelectOption, TextAreaComponent} from "@predigle/micro/component-ui";


@Component({
  standalone:true,
  selector: 'app-manage_hierarchy',
  templateUrl: './manage_hierarchy.component.html',
  styleUrls: ['./manage_hierarchy.component.scss'],
  imports : [CommonModule,ButtonComponent,
    HeaderComponent,
    MatIconModule,MatFormFieldModule,MatInputModule,MatSelectModule,FormsModule,ReactiveFormsModule,BreadcrumbComponent,SelectDropdownComponent,InputsComponent,TextAreaComponent ],
})
export class Manage_hierarchyComponent implements OnInit {
  selectedTab: string = 'manageNode';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nodeName: ['', Validators.required],
      description: [''],
      parent: ['Node', Validators.required]
    });
  }

  // constructor() { }

  ngOnInit() {
  }
  
  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  websites: SelectOption[] = [
  { id: '1', primaryContent: 'Google' },
  { id: '2', primaryContent: 'Youtube' },
  { id: '3', primaryContent: 'Spotify' }
];
}
