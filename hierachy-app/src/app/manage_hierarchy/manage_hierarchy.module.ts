import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Manage_hierarchyComponent } from './manage_hierarchy.component';
import { ButtonComponent } from '@predigle/micro/component-ui';


@NgModule({
  declarations: [Manage_hierarchyComponent],
  imports: [
    CommonModule,
   ButtonComponent
  ],
  exports: [Manage_hierarchyComponent]
})
export class ManageHierarchyModule {}
