import {Injectable} from '@angular/core';

type GotAuth = {
  name: string
}

@Injectable()
export class AuthService {

  loginStorageKey = 'owt-auth';

  constructor() {
  }

  login(name: string): GotAuth {
    localStorage.setItem(this.loginStorageKey, JSON.stringify({name}));
    return {name};
  }

  logout(): void {
    localStorage.removeItem(this.loginStorageKey);
  }

  isLogged(): boolean {
    const auth = this._retrieveLogin();
    return !!auth?.name;
  }

  _retrieveLogin(): GotAuth {
    const auth = localStorage.getItem(this.loginStorageKey);
    if (auth == null) {
      return null;
    }
    return JSON.parse(auth);
  }

}
