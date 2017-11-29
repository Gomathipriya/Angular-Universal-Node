import { BrowserModule,BrowserTransferStateModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CookieInterceptor } from './cookie.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal-demo' }),
    HttpClientModule,
    BrowserTransferStateModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CookieInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
