import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoCoinService {

  constructor(private httpClient: HttpClient) { }

  getAllCoins(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/cryptocoins');
  }

  getOneCrypto(id: string): Observable<any> {
    return this.httpClient.get('http://localhost:8080/cryptocoins/one/'+ id);
  }
}
