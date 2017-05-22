import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLogged) {
      this.router.navigateByUrl('/designer');
    }
  }

  onSignin(form: NgForm) {
    this.authService.login();
    this.router.navigateByUrl('/designer');
  }

}
