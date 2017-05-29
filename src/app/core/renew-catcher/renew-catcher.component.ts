import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renew-catcher',
  templateUrl: './renew-catcher.component.html',
  styleUrls: ['./renew-catcher.component.css']
})
export class RenewCatcherComponent implements OnInit {

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.fragment.map(fragment => {
        if (fragment !== '' && fragment !== null) {
            this.authService.endRenew(fragment);
          }
      });

    this.activatedRoute.fragment.subscribe(
        (fragment: string) => {
          if (fragment !== '' && fragment !== null) {
            this.authService.endRenew(fragment);
          }
        }
      );
  }

}
