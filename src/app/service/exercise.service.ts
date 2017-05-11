import { arraysAreEqual } from 'tslint/lib/utils';
import { Exercise } from './../model/exercise.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';

@Injectable()
export class ExerciseService {
  resultListModified = new Subject<Exercise[]>();
  cardioListModified = new Subject<Exercise[]>();
  machinesListModified = new Subject<Exercise[]>();
  bodyListModified = new Subject<Exercise[]>();

  private cardioExercises: Exercise[] = [new Exercise('Running', 1), new Exercise('Rowing', 4), 
    new Exercise('Running', 1), new Exercise('Rowing', 4), new Exercise('Running', 1), new Exercise('Rowing', 4),
    new Exercise('Running', 1), new Exercise('Rowing', 4)];
  private machineExercises: Exercise[] = [new Exercise('Cable biceps bar', 1), new Exercise('Chest press', 1),
    new Exercise('Cable biceps bar', 1), new Exercise('Chest press', 1), new Exercise('Cable biceps bar', 1),
    new Exercise('Chest press', 1), new Exercise('Cable biceps bar', 1), new Exercise('Chest press', 1)];
  private bodyExercises: Exercise[] = [new Exercise('Thruster', 8), new Exercise('Pull up', 3), new Exercise('Thruster', 8), 
    new Exercise('Pull up', 3), new Exercise('Thruster', 8), new Exercise('Pull up', 3), 
    new Exercise('Thruster', 8), new Exercise('Pull up', 3)];
  private resultExercises: Exercise[] = [];

  constructor(private http: Http) { }

  addExerciseToResult(exercise: Exercise) {
    this.resultExercises.push(exercise);
    this.emitResultChanges();
  }

  removeExerciseFromResult(exercise: Exercise) {
    this.resultExercises.splice(this.resultExercises.indexOf(exercise), 1);
    this.emitResultChanges();
  }

  addExerciseToList(listType: number, exercise: Exercise) {
    if (listType === 1) {
      this.cardioExercises.push(exercise);
      this.emitCardioChanges();
    } else if (listType === 2) {
      this.machineExercises.push(exercise);
      this.emitMachinesChanges();
    } else if (listType === 3) {
      this.bodyExercises.push(exercise);
      this.emitBodyChanges();
    }
    this.emitResultChanges();
  }

  saveRoutine() {
    return this.http.post('https://becomehalterofilico.firebaseio.com/routines.json', this.resultExercises);
  }

  resetResultList() {
    this.resultExercises = [];
    this.emitResultChanges();
  }

  emitResultChanges() {
    this.resultListModified.next(this.getResultExercises());
  }

  emitCardioChanges() {
    this.cardioListModified.next(this.getCardioExercises());
  }

  emitMachinesChanges() {
    this.machinesListModified.next(this.getMachineExercises());
  }

  emitBodyChanges() {
    this.bodyListModified.next(this.getBodyExercises());
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
