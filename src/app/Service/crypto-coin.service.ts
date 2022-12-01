import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoCoinService {

  constructor(private httpClient: HttpClient) { }

  getAllCoins(): Observable<any> {
    return this.httpClient.get(environment.server + '/public/cryptocoins');
  }

  getOneCrypto(id: string): Observable<any> {
    return this.httpClient.get(environment.server + '/cryptocoins/one/'+ id);
  }
}
