import { Exercise } from './../model/exercise.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ExerciseService {
  resultListModified = new Subject<Exercise[]>();

  private cardioExercises: Exercise[] = [new Exercise('Running', 1), new Exercise('Rowing', 4)];
  private machineExercises: Exercise[] = [new Exercise('Cable biceps bar', 1), new Exercise('Chest press', 1)];
  private bodyExercises: Exercise[] = [new Exercise('Thruster', 8), new Exercise('Pull up', 3)];
  private resultExercises: Exercise[] = [];

  constructor() { }

  addExerciseToResult(exercise: Exercise) {
    this.resultExercises.push(exercise);
    this.resultListModified.next(this.getResultExercises());
  }

  getCardioExercises() {
    return this.cardioExercises.slice();
  }

  getMachineExercises() {
    return this.machineExercises.slice();
  }

  getBodyExercises() {
    return this.bodyExercises.slice();
  }

  getResultExercises() {
    return this.resultExercises.slice();
  }
}
