import { Exercise } from './../../shared/exercise.model';
import { RoutineService } from './../../routines/routine.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.css']
})
export class ExerciseItemComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor(private routineService: RoutineService) { }

  ngOnInit() {
  }

  onExerciseClicked() {
    this.routineService.addExerciseToResult(this.exercise);
  }
}
