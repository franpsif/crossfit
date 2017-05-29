import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserManager } from 'oidc-client';

const userManagerSettings: any = {
      authority: 'https://u4ids-sandbox.u4pp.com/identity',
      client_id: 'information-browser',
      redirect_uri: 'http://localhost:4200/login',
      post_logout_redirect_uri: 'http://localhost:4200/login',
      response_type: 'id_token token',
      scope: 'openid preveroemailscope',
      accessTokenExpiringNotificationTime: 60,
      acr_values: 'tenant:praetorians',
      loadUserInfo: true,
      silent_redirect_uri: 'http://localhost:4200/silentRenew',
      userinfo_endpoint: 'https://u4ids-sandbox.u4pp.com/identity/connect/userinfo'
};

@Injectable()
export class AuthService {
  mgr: UserManager = new UserManager(userManagerSettings);
  user: Oidc.User;

  constructor(private router: Router, private http: Http, private dialog: MdDialog) {
    this.mgr.events.addAccessTokenExpiring(() => {
        this.dialog.open(WarningDialogComponent, {
        height: '210px',
        width: '400px'
      });
    });

    this.mgr.events.addAccessTokenExpired(() => {
        this.dialog.closeAll();
        this.router.navigateByUrl('/login');
    });
  }

  loginWithIds() {
    this.mgr.signinRedirect({ data: 'some data' }).then(function () {
      console.log('signinRedirect done');
    }).catch(function (err) {
      console.log(err);
    });
  }

  endSignIn(url: string) {
    const me = this;

    me.router.navigateByUrl('/designer');

    this.mgr.signinRedirectCallback(url).then(function (loggedUser) {
      me.user = loggedUser;
    });
  }

  refreshAccessToken() {
    this.mgr.signinSilent().then(function (loggedUser) {
      const us = loggedUser;
    });
  }

  endRenew(url: string) {
    const me = this;

    this.mgr.signinSilentCallback(url).then(function (loggedUser) {
      me.mgr.getUser().then((user) => {
        me.mgr.events.load(user);
      });
    });
  }

  logout() {
    this.mgr.signoutRedirect({id_token_hint: this.user.id_token}).then(function (resp) {
      console.log('signed out', resp);
    }).catch(function (err) {
      console.log(err);
    });
  }
}
