import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoCoin } from 'src/app/DTO/crypto-coin';
import { Koers } from 'src/app/DTO/koers';
import { CryptoCoinService } from 'src/app/Service/crypto-coin.service';
import { KoersService } from 'src/app/Service/koers.service';

@Component({
  selector: 'app-crypto-koers',
  templateUrl: './crypto-koers.component.html',
  styleUrls: ['./crypto-koers.component.scss']
})
export class CryptoKoersComponent implements OnInit {

  cryptoCoin: CryptoCoin = new CryptoCoin();
  koersen: Koers[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private koersService: KoersService,
    private cryptoService: CryptoCoinService) {
    let coin = this.route.snapshot.paramMap.get('coin');
    this.getOneCoin(coin!);
    this.getKoersenFromCoin(this.cryptoCoin);    
   }

  ngOnInit(): void {
  }

  getOneCoin(coin: string) {
    this.cryptoService.getOneCrypto(coin).subscribe((crypt: CryptoCoin) =>
    this.cryptoCoin = crypt)
  };

  getKoersenFromCoin(cryptoC: CryptoCoin) {
    this.koersService.getKoersenFromOneCoin(this.cryptoCoin).subscribe((koersarray: Koers[]) =>
    this.koersen = koersarray
    )};

}
