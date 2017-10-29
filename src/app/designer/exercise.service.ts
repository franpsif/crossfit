import { Exercise } from './../shared/exercise.model';
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

  private cardioExercisesUrl = 'https://becomehalterofilico.firebaseio.com/cardioExercises.json';
  private machinesExercisesUrl = 'https://becomehalterofilico.firebaseio.com/machinesExercises.json';
  private bodyExercisesUrl = 'https://becomehalterofilico.firebaseio.com/bodyExercises.json';

  constructor(private http: Http) { }

  saveNewExercise(name: string, difficulty: number, listType: number, exampleLink: string) {
    let newExercise;

    if (listType === 1) {
      newExercise = new Exercise(name, difficulty, this.calculateId(), 1, exampleLink);
      return this.saveNewExerciseOnDataBase(newExercise, this.cardioExercises, this.cardioExercisesUrl, 1);
    } else if (listType === 2) {
      newExercise = new Exercise(name, difficulty, this.calculateId(), 2, exampleLink);
      return this.saveNewExerciseOnDataBase(newExercise, this.machineExercises, this.machinesExercisesUrl, 2);
    } else if (listType === 3) {
      newExercise = new Exercise(name, difficulty, this.calculateId(), 3, exampleLink);
      return this.saveNewExerciseOnDataBase(newExercise, this.bodyExercises, this.bodyExercisesUrl, 3);
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

  saveNewExerciseOnDataBase(exercise: Exercise, exerciseList: Exercise[], url: string, type: number) {
    exerciseList.push(exercise);
    this.emitListChanges(type);

    return this.http.put(url, exerciseList);

  }

  fetchAllExercises() {
    this.fetchExerciseList(this.cardioExercisesUrl, 1);
    this.fetchExerciseList(this.machinesExercisesUrl, 2);
    this.fetchExerciseList(this.bodyExercisesUrl, 3);
  }

  fetchExerciseList(url: string, type: number) {
    return this.http.get(url)
    .map(
      (response: Response) => {
        const data = response.json();
        const newExercisesList: Exercise[] = [];

        for (const exercise of data) {
          newExercisesList.push(exercise);
        }

        if (type === 1) {
          this.cardioExercises = newExercisesList;
        } else if (type === 2) {
          this.machineExercises = newExercisesList;
        } else if (type === 3) {
          this.bodyExercises = newExercisesList;
        }

        this.emitListChanges(type);
      }
    ).catch(
        (error: Response) => {
            return Observable.throw('Something went wrong');
        }
    ).subscribe();
  }

  emitListChanges(type: number) {
    if (type === 1) {
      this.cardioListModified.next(this.getCardioExercises());
    } else if (type === 2) {
      this.machinesListModified.next(this.getMachineExercises());
    } else if (type === 3) {
      this.bodyListModified.next(this.getBodyExercises());
    }
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
