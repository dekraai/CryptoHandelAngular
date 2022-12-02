import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CryptoCoin } from 'src/app/DTO/crypto-coin';
import { CryptoTrigger } from 'src/app/DTO/crypto-trigger';
import { Newtrigger } from 'src/app/DTO/newtrigger';
import { CryptoCoinService } from 'src/app/Service/crypto-coin.service';
import { CryptoTriggerService } from 'src/app/Service/crypto-trigger.service';

@Component({
  selector: 'app-my-crypto-triggers',
  templateUrl: './my-crypto-triggers.component.html',
  styleUrls: ['./my-crypto-triggers.component.scss']
})
export class MyCryptoTriggersComponent implements OnInit {

  newTriggerForm = new FormGroup({
    cryptoCoin: new FormControl(0, Validators.required),
    verkoopWaarde: new FormControl(0, Validators.required ),
    verkoopHoeveelheid: new FormControl(0, Validators.required),
  });
  cryptoTrigger: Newtrigger = new Newtrigger;
  triggers: CryptoTrigger[] = [];
  editCryptoCoins: CryptoCoin[] = [];
  showAdd: boolean = false;
  allCryptos: CryptoCoin[] = [];
  constructor(
    private cryptoTriggerService: CryptoTriggerService,
    private cryptoService: CryptoCoinService) {
    this.getMyTriggers();
    this.getAllCryptos();
  }
  ngOnInit(): void {
    
  }

  getMyTriggers() {
    this.cryptoTriggerService.getOneCrypto().subscribe((cryptoTriggers: CryptoTrigger[] ) => {
      this.triggers = cryptoTriggers;
    });    
  }

  changeVisibilityAdd() {
    if (this.showAdd) {
      this.showAdd = false;
    }
    else {
      this.showAdd = true;
    }
  }

  onSubmit() {
    let crypto = this.newTriggerForm.value;
    this.cryptoTrigger.verkoopHoeveelheid = crypto.verkoopHoeveelheid!;
    this.cryptoTrigger.cryptoCoin = crypto.cryptoCoin!;
    this.cryptoTrigger.verkoopWaarde = crypto.verkoopWaarde!;
    this.cryptoTriggerService.setCryptoTrigger(this.cryptoTrigger).subscribe((trig: CryptoTrigger ) => {
      if (trig.triggerValue == this.cryptoTrigger.verkoopWaarde) {
        this.getMyTriggers();
      }
    }) 
    
  }

  getAllCryptos() {
    this.cryptoService.getAllCoins().subscribe((cryptoCoins: CryptoCoin[]) => {
      this.allCryptos = cryptoCoins;
    })
  }

  getCoin(id: number):CryptoCoin {
    let cc = new CryptoCoin;
    if (this.allCryptos != undefined) {
      cc = this.allCryptos.find(myObj => myObj.coinId == id)!;
    }
     return cc;
  }

  goToTrigger(trigger: CryptoTrigger) {
    this.showAdd = true;
    
    this.cryptoService.getOneCrypto(trigger.cryptoId!.toString()).subscribe((cryp: CryptoCoin) => {
      
      this.editCryptoCoins.push(cryp);
      this.allCryptos = this.editCryptoCoins;
    })
    this.newTriggerForm.value.verkoopHoeveelheid = trigger.amountInEur;
    this.newTriggerForm.value.verkoopWaarde = trigger.triggerValue;
  }
}
