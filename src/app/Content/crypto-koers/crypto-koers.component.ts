import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { CryptoCoin } from 'src/app/DTO/crypto-coin';
import { Koers } from 'src/app/DTO/koers';
import { CryptoCoinService } from 'src/app/Service/crypto-coin.service';
import { KoersService } from 'src/app/Service/koers.service';
import { ChartType, Row } from 'angular-google-charts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-crypto-koers',
  templateUrl: './crypto-koers.component.html',
  styleUrls: ['./crypto-koers.component.scss']
})
export class CryptoKoersComponent implements OnInit {
  title = 'Koers';
  type = ChartType.Line;
  data: Row[] = [    
    [2, 20.000]
  ];
  columnNames = ['Datum', 'Waarde'];
  width = 1250;
  height = 400;
  options = {
  }

  cryptoCoin: CryptoCoin = new CryptoCoin();
  koersen: Koers[] = [];
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private koersService: KoersService,
    private cryptoService: CryptoCoinService,
    private datePipe: DatePipe) {
    let koersArrayString = sessionStorage.getItem("koersArray");
    console.log("dit zit er in koersenarraystring: " + koersArrayString);
    this.koersen = JSON.parse(koersArrayString!);
    this.getChartData();
    let coin = this.route.snapshot.paramMap.get('id');
    this.getOneCoin(coin!);
    
   }

  ngOnInit(): void {
    
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
      
      console.log("in getChartData.")
      this.data.splice(0,1);
      this.koersen.forEach(koers => {
        let dateTime = this.datePipe.transform(koers.timestamp, 'yyyy-MM-dd hh:mm:ss');
          console.log("er zitten al: " + this.data.length + " in");
          this.data.push([dateTime, koers.waarde]);        
      })
      console.log("in this.data zitten er: " + this.data.length);
    };
      
    
    
  
}
