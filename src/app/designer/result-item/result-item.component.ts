import { Exercise } from './../../shared/exercise.model';
import { RoutineService } from './../../routines/routine.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor(private routineService: RoutineService) { }

  ngOnInit() {
  }

  onResultClicked() {
    this.routineService.removeExerciseFromResult(this.exercise);
  }
}
