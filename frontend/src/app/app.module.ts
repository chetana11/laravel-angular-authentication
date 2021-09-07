import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
