import { Component, OnInit } from '@angular/core';
import { CryptoCoin } from 'src/app/DTO/crypto-coin';
import { CryptoCoinService } from 'src/app/Service/crypto-coin.service';

@Component({
  selector: 'app-crypto-coin',
  templateUrl: './crypto-coin.component.html',
  styleUrls: ['./crypto-coin.component.scss']
})
export class CryptoCoinComponent implements OnInit {

  allCoins: CryptoCoin[] = [];
  

  constructor(private cryptoService: CryptoCoinService) { 
    this.getAllCoins();
  }

  ngOnInit(): void {
  }

  getAllCoins() {
    this.cryptoService.getAllCoins().subscribe((cryptoCoins: CryptoCoin[]) => {
      this.allCoins = cryptoCoins;
    });
  }
}
