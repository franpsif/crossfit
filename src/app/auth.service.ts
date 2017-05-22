import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLogged = false;

  constructor() { }

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }
}
