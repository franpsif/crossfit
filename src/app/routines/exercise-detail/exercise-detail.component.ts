import { ExerciseService } from '../../service/exercise.service';
import { Exercise } from '../../model/exercise.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {
  id: number;
  @Input() exercise: Exercise;

  constructor(private route: ActivatedRoute, private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['exercise'];
        this.exercise = this.exerciseService.getExercise(this.id);
      }
    );
  }

}
