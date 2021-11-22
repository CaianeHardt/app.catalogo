import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/components/vmessage/vmessage.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignRoutingModule } from './sign-routing.module';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignRoutingModule,
    ReactiveFormsModule,
    VMessageModule,
  ]
})
export class SignModule { }
