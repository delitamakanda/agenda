import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './api.service';

import { TokenInterceptor } from './interceptors/token.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        ApiService,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
      ],
    }
  }
}
