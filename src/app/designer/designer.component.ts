import { ExerciseService } from './../service/exercise.service';
import { Exercise } from './../model/exercise.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {
  subscription: Subscription;

  difficultyAverage = 0;
  cardioExercises: Exercise[];
  machineExercises: Exercise[];
  bodyExercises: Exercise[];
  resultExercises: Exercise[];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.cardioExercises = this.exerciseService.getCardioExercises();
    this.machineExercises = this.exerciseService.getMachineExercises();
    this.bodyExercises = this.exerciseService.getBodyExercises();
    this.resultExercises = this.exerciseService.getResultExercises();

    this.subscription = this.exerciseService.resultListModified
    .subscribe((exercises: Exercise[]) => {
      this.resultExercises = exercises;
      this.calculateNewAverage();
      }
    );
  }

  calculateNewAverage() {
    let newAverageCount = 0;

    this.resultExercises.forEach((exercise: Exercise) => {
      newAverageCount = newAverageCount + exercise.difficulty;
    });

    this.difficultyAverage = newAverageCount / this.resultExercises.length;
  }
}
