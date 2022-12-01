import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../DTO/user';
import { environment } from '../../environments/environment'
import { NewUser } from '../DTO/new-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  changeUser(user: User):Observable<any> {
    return this.httpClient.put(environment.server + "/users", user);
  }

  createUser(newUser: NewUser):Observable<any> {
    return this.httpClient.post(environment.server + "/users/register", newUser);
  }

  changePassword(password: string):Observable<any> {
    return this.httpClient.put(environment.server + "/users/password", password )
  }
}
