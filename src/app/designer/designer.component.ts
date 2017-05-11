import { AddItemComponent } from './add-item/add-item.component';
import { ExerciseService } from './../service/exercise.service';
import { Exercise } from './../model/exercise.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MdDialog } from '@angular/material';

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
  cardioExercises: Exercise[];
  machineExercises: Exercise[];
  bodyExercises: Exercise[];
  resultExercises: Exercise[];

  constructor(private exerciseService: ExerciseService, private dialog: MdDialog) { }

  ngOnInit() {
    this.cardioExercises = this.exerciseService.getCardioExercises();
    this.machineExercises = this.exerciseService.getMachineExercises();
    this.bodyExercises = this.exerciseService.getBodyExercises();
    this.resultExercises = this.exerciseService.getResultExercises();

    this.subscribeToChanges();
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
    dialogRef.afterClosed().subscribe(exercise => {
      if (exercise) {
        this.exerciseService.addExerciseToList(listType, exercise);
      }
    });
  }

  onResetRoutine() {
    this.exerciseService.resetResultList();
  }

  subscribeToChanges() {
    this.resultSubscription = this.exerciseService.resultListModified
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
