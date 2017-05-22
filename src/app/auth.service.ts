import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isLogged = false;

  constructor(private router: Router) { }

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
    this.router.navigateByUrl('/login');
  }
}
