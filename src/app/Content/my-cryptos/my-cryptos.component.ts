import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CryptoCoin } from 'src/app/DTO/crypto-coin';
import { MyCrypto } from 'src/app/DTO/my-crypto';
import { NewMyCrypto } from 'src/app/DTO/new-my-crypto';
import { CryptoCoinService } from 'src/app/Service/crypto-coin.service';
import { MyCryptoService } from 'src/app/Service/my-crypto.service';

@Component({
  selector: 'app-my-cryptos',
  templateUrl: './my-cryptos.component.html',
  styleUrls: ['./my-cryptos.component.scss']
})
export class MyCryptosComponent implements OnInit {

  
  newMyCryptoForm = new FormGroup({
    cryptoId: new FormControl(0,Validators.required),
    cryptoKoersBought: new FormControl(0, Validators.required),
    boughtInEuro: new FormControl(0, Validators.required),
  });

  allCryptoCoins: CryptoCoin[] = [];
  newMyCrypto: NewMyCrypto = new NewMyCrypto;
  allMyCryptos: MyCrypto[] = [];
  showAdd: boolean = false;
  aankoopKoers: number = 0;
  aankoopHoeveelheid: number = 0;
  selectedCrypto: CryptoCoin = new CryptoCoin;

  constructor(private myCryptoService: MyCryptoService,
    private cryptocoinService: CryptoCoinService) {
    this.getMyCryptos();
    this.getAllCoins();
   }

  ngOnInit(): void {
  }

  getMyCryptos() {
    this.myCryptoService.getMyCryptos().subscribe((allMyCryptos: MyCrypto[]) => {
      this.allMyCryptos = allMyCryptos;
    });    
  }
  getAllCoins() {
    this.cryptocoinService.getAllCoins().subscribe((allc: CryptoCoin[]) =>{
      this.allCryptoCoins = allc;
    })
  }
  
  changeVisibilityAdd() {
    if (this.showAdd) {
      this.showAdd = false;
    }
    else {
      this.showAdd = true;
    }
  }

  getCoin(id: number):CryptoCoin {
    let cc = new CryptoCoin;
    if (this.allCryptoCoins != undefined) {
      cc = this.allCryptoCoins.find(myObj => myObj.coinId == id)!;
    }
     return cc;
  }

  onSubmit() {
    let cryptoForm = this.newMyCryptoForm.value;
    this.newMyCrypto.cryptoId = cryptoForm.cryptoId!
    this.newMyCrypto.boughtInEuro = cryptoForm.boughtInEuro!
    this.newMyCrypto.cryptoKoersBought = cryptoForm.cryptoKoersBought!

    this.myCryptoService.saveMyCrypto(this.newMyCrypto).subscribe((myCrypto: MyCrypto) => {
      if (myCrypto.cryptoId == this.newMyCrypto.cryptoId) {
this.newMyCryptoForm.reset();
        this.getMyCryptos();
      }
    })
  }

}
