import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '@predigle/micro';


@Component({
  standalone:true,
  selector: 'app-manage_hierarchy',
  templateUrl: './manage_hierarchy.component.html',
  styleUrls: ['./manage_hierarchy.component.scss'],
  imports : [CommonModule,ButtonComponent],
})
export class Manage_hierarchyComponent implements OnInit {
  selectedTab: string = 'manageNode';

  constructor() { }

  ngOnInit() {
  }
  
  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

}
