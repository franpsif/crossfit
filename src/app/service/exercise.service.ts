import { Exercise } from './../model/exercise.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ExerciseService {
  resultListModified = new Subject<Exercise[]>();
  cardioListModified = new Subject<Exercise[]>();
  machinesListModified = new Subject<Exercise[]>();
  bodyListModified = new Subject<Exercise[]>();

  private cardioExercises: Exercise[] = [];
  private machineExercises: Exercise[] = [];
  private bodyExercises: Exercise[] = [];

  constructor(private http: Http) { }

  saveNewExercise(name: string, difficulty: number, listType: number, exampleLink: string) {
    let newExercise;

    if (listType === 1) {
      newExercise = new Exercise(name, difficulty, this.calculateId(), 1, exampleLink);
      return this.saveNewCardioExercise(newExercise);
    } else if (listType === 2) {
      newExercise = new Exercise(name, difficulty, this.calculateId(), 2, exampleLink);
      return this.saveNewMachinesExercise(newExercise);
    } else if (listType === 3) {
      newExercise = new Exercise(name, difficulty, this.calculateId(), 3, exampleLink);
      return this.saveNewBodyExercise(newExercise);
    }
  }

  calculateId() {
    const maxCardioId = this.cardioExercises.length > 0 ? this.cardioExercises[this.cardioExercises.length - 1].id : 0;
    const maxMachineId = this.machineExercises.length > 0 ? this.machineExercises[this.machineExercises.length - 1].id : 0;
    const maxBodyId = this.bodyExercises.length > 0 ? this.bodyExercises[this.bodyExercises.length - 1].id : 0;

    let maxId = maxCardioId > maxMachineId ? maxCardioId : maxMachineId;
    maxId = maxId > maxBodyId ? maxId : maxBodyId;

    return maxId + 1;
  }

  getExercise(id: number) {
    let exercise: Exercise;

    exercise = this.cardioExercises.find(cardioExercise => cardioExercise.id === id);

    if (!exercise) {
      exercise = this.machineExercises.find(machineExercise => machineExercise.id === id);

      if (!exercise) {
        exercise = this.bodyExercises.find(bodyExercise => bodyExercise.id === id);
      }
    }

    return exercise;
  }

  saveNewCardioExercise(exercise: Exercise) {
    this.cardioExercises.push(exercise);
    this.emitCardioChanges();

    return this.http.put('https://becomehalterofilico.firebaseio.com/cardioExercises.json', this.cardioExercises);
  }

  saveNewMachinesExercise(exercise: Exercise) {
    this.machineExercises.push(exercise);
    this.emitMachinesChanges();

    return this.http.put('https://becomehalterofilico.firebaseio.com/machinesExercises.json', this.machineExercises);
  }

  saveNewBodyExercise(exercise: Exercise) {
    this.bodyExercises.push(exercise);
    this.emitBodyChanges();

    return this.http.put('https://becomehalterofilico.firebaseio.com/bodyExercises.json', this.bodyExercises);
  }

  fetchAllExercises() {
    this.fetchCardioExercises();
    this.fetchMachinesExercises();
    this.fetchBodyExercises();
  }

  fetchCardioExercises() {
    return this.http.get('https://becomehalterofilico.firebaseio.com/cardioExercises.json')
    .map(
      (response: Response) => {
        const data = response.json();
        const newCardioExercises: Exercise[] = [];

        for (const cardioExercise of data) {
          newCardioExercises.push(cardioExercise);
        }

        this.cardioExercises = newCardioExercises;
        this.emitCardioChanges();
      }
    ).catch(
        (error: Response) => {
            return Observable.throw('Something went wrong');
        }
    ).subscribe();
  }

  fetchMachinesExercises() {
    return this.http.get('https://becomehalterofilico.firebaseio.com/machinesExercises.json')
    .map(
      (response: Response) => {
        const data = response.json();
        const newMachinesExercises: Exercise[] = [];

        for (const machinesExercise of data) {
          newMachinesExercises.push(machinesExercise);
        }

        this.machineExercises = newMachinesExercises;
        this.emitMachinesChanges();
      }
    ).catch(
        (error: Response) => {
            return Observable.throw('Something went wrong');
        }
    ).subscribe();
  }

  fetchBodyExercises() {
    return this.http.get('https://becomehalterofilico.firebaseio.com/bodyExercises.json')
    .map(
      (response: Response) => {
        const data = response.json();
        const newBodyExercises: Exercise[] = [];

        for (const bodyExercise of data) {
          newBodyExercises.push(bodyExercise);
        }

        this.bodyExercises = newBodyExercises;
        this.emitBodyChanges();
      }
    ).catch(
        (error: Response) => {
            return Observable.throw('Something went wrong');
        }
    ).subscribe();
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
}
