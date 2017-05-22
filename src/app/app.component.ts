import { AuthService } from './auth.service';
import { ExerciseService } from './designer/exercise.service';
import { RoutineService } from './routines/routine.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private routineService: RoutineService, private exerciseService: ExerciseService, private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    if (!this.authService.isLogged) {
      this.router.navigateByUrl('/login');
    }

    this.routineService.fetchRoutineList();
    this.exerciseService.fetchAllExercises();
  }
}
