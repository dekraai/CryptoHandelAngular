import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newtrigger } from '../DTO/newtrigger';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoTriggerService {

  constructor(private httpClient: HttpClient) { }

  getOneCrypto(): Observable<any> {
    return this.httpClient.get(environment.server + '/cryptotrigger/');
  }

  setCryptoTrigger(newTrigger: Newtrigger): Observable<any> {
    return this.httpClient.post(environment.server + '/cryptotrigger/', newTrigger)
  }
}
