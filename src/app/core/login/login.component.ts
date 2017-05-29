import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tenantList: [string];
  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.fragment.map(fragment => {
        if (fragment !== '' && fragment !== null) {
            this.authService.endSignIn(fragment);
          }
      });

    this.activatedRoute.fragment.subscribe(
        (fragment: string) => {
          if (fragment !== '' && fragment !== null) {
            this.authService.endSignIn(fragment);
          }
        }
      );
  }

  onSigninWithIds(form: NgForm) {
    this.authService.loginWithIds();
  }
}
