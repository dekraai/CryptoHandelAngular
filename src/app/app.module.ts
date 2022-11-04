import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Content/login/login.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginUser } from './DTO/login-user';
import { Router } from '@angular/router';
import { Token } from './DTO/token';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
