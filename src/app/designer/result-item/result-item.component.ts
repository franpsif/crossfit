import { ExerciseService } from './../../service/exercise.service';
import { Exercise } from './../../model/exercise.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
  }

  onResultClicked() {
    this.exerciseService.removeExerciseFromResult(this.exercise);
  }

}
