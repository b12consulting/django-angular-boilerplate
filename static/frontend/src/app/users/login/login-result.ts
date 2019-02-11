export interface ILoginResult {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  refresh_token: string;
}

const ACCESS_TOKEN_KEY = 'accessToken';
const EXPIRATION_DATE_KEY = 'expirationDate';
const TOKEN_TYPE_KEY = 'tokenType';
const SCOPE_KEY = 'scope';
const REFRESH_TOKEN_KEY = 'refreshToken';

export class LoginResult {
  private _accessToken: string;
  private _expirationDate: Date;
  private _tokenType: string;
  private _scope: string;
  private _refreshToken: string;

  static load(): LoginResult {
    return new LoginResult({
      access_token: localStorage.getItem(ACCESS_TOKEN_KEY),
      expires_in: +localStorage.getItem(EXPIRATION_DATE_KEY) - (+new Date()),
      token_type: localStorage.getItem(TOKEN_TYPE_KEY),
      scope: localStorage.getItem(SCOPE_KEY),
      refresh_token: localStorage.getItem(REFRESH_TOKEN_KEY),
    });
  }

  constructor(cons?: ILoginResult) {
    if (cons) {
      this.accessToken = cons.access_token;
      this._expirationDate = new Date(+new Date() + cons.expires_in * 1000);
      this._tokenType = cons.token_type;
      this._scope = cons.scope;
      this._refreshToken = cons.refresh_token;
    }
  }

  get accessToken(): string {
    return this._accessToken;
  }

  set accessToken(value: string) {
    this._accessToken = value;
  }

  get refreshToken(): string {
    return this._refreshToken;
  }

  set refreshToken(value: string) {
    this._refreshToken = value;
  }

  save() {
    localStorage.setItem(ACCESS_TOKEN_KEY, this.accessToken);
    localStorage.setItem(EXPIRATION_DATE_KEY, (+this._expirationDate).toString());
    localStorage.setItem(TOKEN_TYPE_KEY, this._tokenType);
    localStorage.setItem(SCOPE_KEY, this._scope);
    localStorage.setItem(REFRESH_TOKEN_KEY, this.refreshToken);
  }
}
