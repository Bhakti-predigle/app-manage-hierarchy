import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Manage_hierarchyComponent } from './manage_hierarchy/manage_hierarchy.component';
// import { SharedModule } from './shared.module';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { ManageHierarchyModule } from './manage_hierarchy/manage_hierarchy.module';

@NgModule({
  declarations: [
    AppComponent,
    // Manage_hierarchyComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    // ManageHierarchyModule,
    // SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
