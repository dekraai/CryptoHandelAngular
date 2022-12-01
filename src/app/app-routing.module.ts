import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CryptoCoinComponent } from './Content/crypto-coin/crypto-coin.component';
import { CryptoKoersComponent } from './Content/crypto-koers/crypto-koers.component';
import { LoginComponent } from './Content/login/login.component';
import { MyCryptoTriggersComponent } from './Content/my-crypto-triggers/my-crypto-triggers.component';
import { MyCryptosComponent } from './Content/my-cryptos/my-cryptos.component';

const routes: Routes = [
  {path: '', component: CryptoCoinComponent},
  {path: 'login', component: LoginComponent},
  {path: 'crypto', component: CryptoCoinComponent},
  {path: 'cryptokoers/:id', component: CryptoKoersComponent},
  {path: 'mycryptos', component: MyCryptosComponent},
  {path: 'mytriggers', component: MyCryptoTriggersComponent},
  {path: '*', component: AppComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
