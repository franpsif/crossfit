import { Exercise } from './../model/exercise.model';
import { ExerciseService } from './../service/exercise.service';
import { RoutineService } from './../service/routine.service';
import { AddItemComponent } from './add-item/add-item.component';
import { SaveRoutineDialogComponent } from './save-routine-dialog/save-routine-dialog.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit, OnDestroy {
  resultSubscription: Subscription;
  cardioSubscription: Subscription;
  machinesSubscription: Subscription;
  bodySubscription: Subscription;

  difficultyAverage = 0;
  cardioExercises: Exercise[] = [];
  machineExercises: Exercise[] = [];
  bodyExercises: Exercise[] = [];
  resultExercises: Exercise[] = [];

  constructor(private exerciseService: ExerciseService, private dialog: MdDialog, private routineService: RoutineService) { }

  ngOnInit() {
    this.cardioExercises = this.exerciseService.getCardioExercises();
    this.machineExercises = this.exerciseService.getMachineExercises();
    this.bodyExercises = this.exerciseService.getBodyExercises();

    this.subscribeToChanges();

    if (this.cardioExercises.length === 0 || this.machineExercises.length === 0 || this.bodyExercises.length === 0) {
      this.exerciseService.fetchAllExercises();
    }
  }

  calculateNewAverage() {
    let newAverageCount = 0;

    this.resultExercises.forEach((exercise: Exercise) => {
      newAverageCount = newAverageCount + exercise.difficulty;
    });

    this.difficultyAverage = newAverageCount / this.resultExercises.length;
  }

  onAddExercise(listType: number) {
    let dialogRef = this.dialog.open(AddItemComponent, {
      height: '300px',
      width: '500px'
    });
    dialogRef.componentInstance.listType = listType;
  }

  onSaveRoutine() {
    let dialogRef = this.dialog.open(SaveRoutineDialogComponent, {
      height: '210px',
      width: '400px'
    });
  }

  onResetRoutine() {
    this.routineService.resetResultList();
  }

  subscribeToChanges() {
    this.resultSubscription = this.routineService.resultListModified
    .subscribe((exercises: Exercise[]) => {
      this.resultExercises = exercises;
      this.calculateNewAverage();
      }
    );

    this.cardioSubscription = this.exerciseService.cardioListModified
    .subscribe((exercises: Exercise[]) => {
      this.cardioExercises = exercises;
      }
    );

    this.machinesSubscription = this.exerciseService.machinesListModified
    .subscribe((exercises: Exercise[]) => {
      this.machineExercises = exercises;
      }
    );

    this.bodySubscription = this.exerciseService.bodyListModified
    .subscribe((exercises: Exercise[]) => {
      this.bodyExercises = exercises;
      }
    );
  }

  ngOnDestroy() {
    this.resultSubscription.unsubscribe();
    this.cardioSubscription.unsubscribe();
    this.machinesSubscription.unsubscribe();
    this.bodySubscription.unsubscribe();
  }
}
