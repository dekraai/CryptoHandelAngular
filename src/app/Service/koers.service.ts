import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KoersService {

  constructor(private httpClient: HttpClient) { }

  getAllKoersen(): Observable<any> {
    return this.httpClient.get(environment.server + '/koersen/all');
  }

  getKoersenFromOneCoin(crypto: string): Observable<any> {
    return this.httpClient.get(environment.server + '/koersen/coin/all/'+ crypto);
  }
}
