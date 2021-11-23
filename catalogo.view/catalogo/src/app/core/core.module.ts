import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthenticationInterceptor } from './helpers/authentication.interceptor';
import { HeaderComponent } from './headers/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserAnimationsModule, HttpClientModule],
  exports: [BrowserAnimationsModule, HttpClientModule, HeaderComponent],

})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthenticationInterceptor,
          multi: true,
          
        },
      ],
    };
  }
}
