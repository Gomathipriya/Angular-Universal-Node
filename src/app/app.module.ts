import { BrowserModule,BrowserTransferStateModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal-demo' }),
    HttpClientModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
