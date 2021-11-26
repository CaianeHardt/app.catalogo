import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageComponents } from './components/vmessage/vmessage.components';
import { HeaderComponent } from './components/headers/header.component';
import { RouterModule } from '@angular/router';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';

const COMPONENTS = [VMessageComponents, HeaderComponent, BreadCrumbComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ...COMPONENTS
  ],
})
export class SharedModule {}
