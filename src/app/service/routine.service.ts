import { Exercise } from './../model/exercise.model';
import { Routine } from './../model/routine.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RoutineService {
  private routineList: Routine [] = [];
  private newRoutine: Routine = new Routine('', []);
  resultListModified = new Subject<Exercise[]>();
  routineListModified = new Subject<Routine[]>();
  lastItemSelected

  constructor(private http: Http) { }

  addExerciseToResult(exercise: Exercise) {
    this.newRoutine.exercises.push(exercise);
    this.emitResultChanges();
  }

  removeExerciseFromResult(exercise: Exercise) {
    this.newRoutine.exercises.splice(this.newRoutine.exercises.indexOf(exercise), 1);
    this.emitResultChanges();
  }

  resetResultList() {
    this.newRoutine.exercises = [];
    this.emitResultChanges();
  }

  getResultExercises() {
    return this.newRoutine.exercises.slice();
  }

  getRoutineList() {
    return this.routineList.slice();
  }

  saveNewRoutine(name: string) {
    this.newRoutine.name = name;
    this.routineList.push(this.newRoutine);
    this.routineListModified.next(this.getRoutineList());
    return this.http.put('https://becomehalterofilico.firebaseio.com/routines.json', this.routineList);
  }

  fetchRoutineList() {
    this.http.get('https://becomehalterofilico.firebaseio.com/routines.json')
    .map((response: Response) => {
      const data = response.json();

      for (const routine of data) {
        this.routineList.push(routine);
      }
      this.routineListModified.next(this.getRoutineList());
    }).catch(
        (error: Response) => {
            return Observable.throw('Something went wrong');
        }
    ).subscribe();
  }

  emitResultChanges() {
    this.resultListModified.next(this.getResultExercises());
  }

  updateLastSelectedExercise(item) {
    if (this.lastItemSelected) {
      this.lastItemSelected.selected = false;
    }

    item.selected = true;
    this.lastItemSelected = item;
  }
}
