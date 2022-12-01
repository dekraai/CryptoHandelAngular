import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyCrypto } from '../DTO/my-crypto';
import { NewMyCrypto } from '../DTO/new-my-crypto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyCryptoService {

  constructor(private httpClient: HttpClient) { }

  getMyCryptos():Observable<any> {
    return this.httpClient.get(environment.server + "/mycryptos",);
  }

  saveMyCrypto(myCrypto: NewMyCrypto):Observable<any> {
    return this.httpClient.post(environment.server + "/mycryptos", myCrypto);
  }
}
