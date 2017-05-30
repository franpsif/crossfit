import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.mgr.getUser().then((user) => {
      this.userName = user.profile.given_name;
    });
  }

  onLogout() {
    this.authService.logout();
  }
}
