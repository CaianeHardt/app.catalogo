import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignRoutingModule } from './sign-routing.module';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    SignRoutingModule,
    SharedModule
  ],
})
export class SignModule {}
