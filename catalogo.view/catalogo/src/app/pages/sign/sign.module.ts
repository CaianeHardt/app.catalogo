import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignRoutingModule } from './sign-routing.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    SignRoutingModule,
    SharedModule
  ],
})
export class SignModule {}
