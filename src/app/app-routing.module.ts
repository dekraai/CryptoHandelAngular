import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CryptoCoinComponent } from './Content/crypto-coin/crypto-coin.component';
import { CryptoKoersComponent } from './Content/crypto-koers/crypto-koers.component';
import { LoginComponent } from './Content/login/login.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'crypto', component: CryptoCoinComponent},
  {path: 'cryptokoers', component: CryptoKoersComponent},
  {path: '*', component: AppComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
