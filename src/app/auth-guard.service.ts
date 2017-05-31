import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.mgr.getUser().then((user) => {
      if (user && !user.expired) {
        return true;
      } else {
        if (state !== undefined) {
          this.authService.extraRedirectUri = state.url;
        }
        this.route.navigateByUrl('/login');
        return false;
      }
    });
  }

}
