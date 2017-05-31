import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.fragment.map(fragment => {
        if (fragment !== '' && fragment !== null) {
            this.authService.endSignIn(fragment, null);
          }
      });

    this.activatedRoute.fragment.subscribe(
        (fragment: string) => {
          const extraUrl = this.activatedRoute.snapshot.queryParams.extraUrl;
          if (fragment !== '' && fragment !== null) {
            this.authService.endSignIn(fragment, extraUrl);
          }
        }
      );
  }

  onSigninWithIds(form: NgForm) {
    this.authService.loginWithIds();
  }
}
