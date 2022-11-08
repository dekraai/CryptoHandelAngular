import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoCoin } from '../DTO/crypto-coin';

@Injectable({
  providedIn: 'root'
})
export class KoersService {

  constructor(private httpClient: HttpClient) { }

  getAllKoersen(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/koersen/all');
  }

  getKoersenFromOneCoin(crypto: string): Observable<any> {
    return this.httpClient.get('http://localhost:8080/koersen/coin/all/'+ crypto);
  }
}
