import { RoutineService } from './../../routines/routine.service';
import { ExerciseItemComponent } from './../../designer/exercise-item/exercise-item.component';
import { Routine } from './../../shared/routine.model';
import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-routine-item',
  templateUrl: './routine-item.component.html',
  styleUrls: ['./routine-item.component.css']
})
export class RoutineItemComponent implements OnInit {
  @Input() routine: Routine;
  average = 0;

  constructor(private routineService: RoutineService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.calculateAverage();
  }

  onItemSelected(item) {
    this.routineService.updateLastSelectedExercise(item);
  }

  onRemoveRoutineClicked() {
    this.routineService.removeRoutine(this.routine.name).subscribe(
      (response) => { this.showSnackBar('Routine removed'); },
      (error) => { this.showSnackBar('Something went wrong'); }
    );
  }

  calculateAverage() {
    this.routine.exercises.forEach((routine) => {
      this.average = this.average + routine.difficulty;
    });

    this.average = this.average / this.routine.exercises.length;
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 1500
    });
  }
}
