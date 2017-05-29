import { Observable, Subscription } from 'rxjs/Rx';
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.css']
})
export class WarningDialogComponent implements OnInit, OnDestroy {
  value = 0;
  counter: Subscription;
  accessTokenExpiringNotificationTime = 60;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.increaseProgress();
  }

  onAccept() {
    this.authService.refreshAccessToken();
  }

  increaseProgress() {
    this.counter = Observable.timer(0, (100 / this.accessTokenExpiringNotificationTime) * 1000).subscribe(
      () => this.value = this.value + 1);
  }

  ngOnDestroy() {
    this.counter.unsubscribe();
  }
}
