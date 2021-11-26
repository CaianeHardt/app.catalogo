import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationInterceptor } from './helpers/authentication.interceptor';

const INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  },
];

@NgModule({
  declarations: [
  ],
  imports: [BrowserAnimationsModule, HttpClientModule],
  exports: [BrowserAnimationsModule, HttpClientModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [...INTERCEPTORS],
    };
  }
}
