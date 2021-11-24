import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageComponents } from './components/vmessage/vmessage.components';
import { HeaderComponent } from './components/headers/header.component';

const COMPONENTS = [VMessageComponents, HeaderComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
