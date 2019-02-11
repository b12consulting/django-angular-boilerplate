import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ROUTES} from '../config/config';
import { ILoginResult, LoginResult } from './login/login-result';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loginData: LoginResult;

  constructor(
    private http: HttpClient
  ) {
    this.loginData = LoginResult.load();
  }

  login(username, password): Promise<LoginResult> {
    const clientSecret = 'to be specified';
    const clientId = 'to be specified';

    return this.http.post<ILoginResult>(API_ROUTES.login,
      `grant_type=password&client_secret=${clientSecret}&client_id=${clientId}&username=${username}&password=${password}`,
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        },
      ).toPromise()
        .then((res) => {
          console.log('login successful');
          const loginResult = new LoginResult(res);
          loginResult.save();
          this.loginData = loginResult;
          return loginResult;
        });
  }
}
