import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoCoin } from 'src/app/DTO/crypto-coin';
import { Koers } from 'src/app/DTO/koers';
import { CryptoCoinService } from 'src/app/Service/crypto-coin.service';
import { KoersService } from 'src/app/Service/koers.service';

@Component({
  selector: 'app-crypto-coin',
  templateUrl: './crypto-coin.component.html',
  styleUrls: ['./crypto-coin.component.scss']
})
export class CryptoCoinComponent implements OnInit {

  allCoins: CryptoCoin[] = [];
  koersArrayString: string = "";

  constructor(
    private cryptoService: CryptoCoinService,
    private koersService: KoersService,
    private router: Router) { 
    this.getAllCoins();
  }

  ngOnInit(): void {
  }

  getAllCoins() {
    this.cryptoService.getAllCoins().subscribe((cryptoCoins: CryptoCoin[]) => {
      this.allCoins = cryptoCoins;
    });
  }

  goToCoin(coin: CryptoCoin) {
    
    this.koersService.getKoersenFromOneCoin(coin.coinId!.toString()).subscribe((koersarray: Koers[]) =>
      
      this.setSessionStorage(JSON.stringify(koersarray), coin)
    )    
  }

  RefreshCoins(){
    
  }

  setSessionStorage(string: string, coin: CryptoCoin) {
    console.log("koersarray: "+ string)
    sessionStorage.setItem("koersArray", string);
    this.router.navigate(['cryptokoers', coin.coinId])
  }
  
}
