import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserManager, WebStorageStateStore } from 'oidc-client';

@Injectable()
export class AuthService {
  userManagerSettings: any = {
    authority: 'https://u4ids-sandbox.u4pp.com/identity',
    client_id: 'information-browser-implicit',
    redirect_uri: 'http://localhost:4200/login',
    post_logout_redirect_uri: 'http://localhost:4200/login',
    response_type: 'id_token token',
    scope: 'openid informationbrowser-user-info',
    accessTokenExpiringNotificationTime: 60,
    acr_values: 'tenant:praetorians',
    loadUserInfo: true,
    silent_redirect_uri: 'http://localhost:4200/silentRenew',
    userinfo_endpoint: 'https://u4ids-sandbox.u4pp.com/identity/connect/userinfo',
    userStore: new WebStorageStateStore({ store: window.localStorage })
  };
  mgr: UserManager = new UserManager(this.userManagerSettings);
  user: Oidc.User;
  extraRedirectUri = '';

  constructor(private router: Router, private http: Http, private dialog: MdDialog) {
    const me = this;

    this.mgr.events.addAccessTokenExpiring(() => {
        this.dialog.open(WarningDialogComponent, {
        height: '210px',
        width: '400px',
        disableClose: true
      });
    });

    this.mgr.events.addAccessTokenExpired(() => {
        this.mgr.removeUser();
        this.dialog.closeAll();
        this.router.navigateByUrl('/login');
    });

    window.addEventListener('storage', function(storageEvent){
        me.mgr.getUser().then((user) => {
          if (user !== me.user) {
            if (user !== undefined && user !== null) {
              me.dialog.closeAll();
              me.mgr.events.load(user);
              if (me.user === undefined || me.user === null) {
                me.router.navigateByUrl('/designer');
              }
              me.user = user;
            } else {
              me.user = undefined;
              me.dialog.closeAll();
              me.mgr.events.unload();
              me.router.navigateByUrl('/login');
            }
          }
        });
    }, false);
  }

  loginWithIds() {
    this.mgr.signinRedirect({redirect_uri: this.userManagerSettings.redirect_uri + '?extraUrl=' + this.extraRedirectUri}).then(function () {
      console.log('signinRedirect done');
    }).catch(function (err) {
      console.log(err);
    });
  }

  endSignIn(url: string, extraRedirectUri: string) {
    const me = this;

    this.mgr.signinRedirectCallback(url).then(function (loggedUser) {
      me.user = loggedUser;
      if (extraRedirectUri !== undefined && extraRedirectUri !== '') {
        me.router.navigateByUrl(extraRedirectUri, { preserveQueryParams: false });
      } else {
        me.router.navigateByUrl('/designer');
      }
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
    this.mgr.getUser().then((user) => {
      this.mgr.signoutRedirect({id_token_hint: user.id_token}).then(function (resp) {
        console.log('signed out', resp);
      }).catch(function (err) {
        console.log(err);
      });
    });
  }
}
