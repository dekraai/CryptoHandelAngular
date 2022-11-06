import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AutGuardService } from './Service/aut-guard-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Content/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { CryptoCoinComponent } from './Content/crypto-coin/crypto-coin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CryptoCoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true},
      AutGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
