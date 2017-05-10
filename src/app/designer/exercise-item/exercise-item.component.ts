import { ExerciseService } from './../../service/exercise.service';
import { Exercise } from './../../model/exercise.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.css']
})
export class ExerciseItemComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
  }

  onExerciseClicked() {
    this.exerciseService.addExerciseToResult(this.exercise);
  }
}
