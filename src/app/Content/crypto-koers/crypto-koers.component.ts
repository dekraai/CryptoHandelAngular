import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { CryptoCoin } from 'src/app/DTO/crypto-coin';
import { Koers } from 'src/app/DTO/koers';
import { CryptoCoinService } from 'src/app/Service/crypto-coin.service';
import { KoersService } from 'src/app/Service/koers.service';
import { ChartType, Row } from 'angular-google-charts';

@Component({
  selector: 'app-crypto-koers',
  templateUrl: './crypto-koers.component.html',
  styleUrls: ['./crypto-koers.component.scss']
})
export class CryptoKoersComponent implements OnInit {
  title = 'Koers';
  type = ChartType.Line;
  data: Row[] = [
    [2, 20.000],
    [3, 19.500],
    [4, 19.000],
    [5, 20.000]
  ];
  columnNames = ['Waarde', 'Datum'];
  width = 550;
  height = 400;

  cryptoCoin: CryptoCoin = new CryptoCoin();
  koersen: Koers[] = [];
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private koersService: KoersService,
    private cryptoService: CryptoCoinService) {
    let coin = this.route.snapshot.paramMap.get('id');
    this.getOneCoin(coin!);
    
   }

  ngOnInit(): void {
    this.getChartData();
  }

  getOneCoin(coin: string) {
    this.cryptoService.getOneCrypto(coin).subscribe((crypt: CryptoCoin) =>
    this.cryptoCoin = crypt)
    this.getKoersenFromCoin(coin);    
  };

  getKoersenFromCoin(cryptoC: string) {
    this.koersService.getKoersenFromOneCoin(cryptoC).subscribe((koersarray: Koers[]) =>
      this.koersen = koersarray)
      //this.getChartData();
  };

    getChartData(){
      let coin = this.route.snapshot.paramMap.get('id');
      let newData: Row[] =[];
      console.log("in getChartData.")
      this.koersService.getKoersenFromOneCoin(coin!).subscribe((koersarray: Koers[]) =>
        koersarray.forEach(koers => 
          {
            console.log("We hebben een rij te pakken");
            console.log("er zitten al: " + this.data.length + " in");
            this.data.push([koers.waarde ,koers.volgNummer]);        
          }
        )
      );
      //this.data = newData;
      console.log("in this.data zitten er: " + this.data.length);
    };
      
    
    
  
}
