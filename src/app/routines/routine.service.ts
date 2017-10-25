import { Exercise } from './../shared/exercise.model';
import { Routine } from './../shared/routine.model';
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
  lastItemSelected;

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

  removeRoutine(routineName: string): Observable<Response> {
    let routineIndex = -1;
    this.routineList.forEach((routine, index) => {
      if (routine.name === routineName) {
        routineIndex = index;
      }
    });

    this.routineList.splice(routineIndex, 1);

    return this.saveRoutines();
  }

  saveNewRoutine(name: string): Observable<Response> {
    this.routineList.push(new Routine(name, this.newRoutine.exercises));
    return this.saveRoutines();
  }

  saveRoutines(): Observable<Response> {
    this.emitRoutineListModified();
    return this.http.put('https://becomehalterofilico.firebaseio.com/routines.json', this.routineList);
  }

  fetchRoutineList() {
    this.http.get('https://becomehalterofilico.firebaseio.com/routines.json')
    .map((response: Response) => {
      const data = response.json();

      for (const routine of data) {
        this.routineList.push(routine);
      }
      this.emitRoutineListModified();
    }).catch(
        (error: Response) => {
            return Observable.throw('Something went wrong');
        }
    ).subscribe();
  }

  emitResultChanges() {
    this.resultListModified.next(this.getResultExercises());
  }

  emitRoutineListModified() {
    this.routineListModified.next(this.getRoutineList());
  }

  updateLastSelectedExercise(item) {
    if (this.lastItemSelected) {
      this.lastItemSelected.selected = false;
    }

    item.selected = true;
    this.lastItemSelected = item;
  }
}
