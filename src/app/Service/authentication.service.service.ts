import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { LoginUser } from '../DTO/login-user';
import { Token } from '../DTO/token';

const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = environment.server;
  authenticationState = new BehaviorSubject(false);
  loggedInUser = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }

  register(user: LoginUser) {
    const url = this.url + '/auth/register';
    return this.http.post(url, user).pipe(
      map(
        (response: any) => {
          if (response) {
            return true;
          }
          else {
            return false;
          }
        }
      )
    );
  }
  logout() {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem('currentUser', "");
    this.authenticationState.next(false);
  }

  login(user: LoginUser): Observable<Token> {
    return this.http.post<Token>(this.url + '/login', user);
  }
}
