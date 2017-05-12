import { ExerciseService } from './../../service/exercise.service';
import { Exercise } from './../../model/exercise.model';
import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  listType: number;

  constructor(private dialogRef: MdDialogRef<AddItemComponent>, private exerciseService: ExerciseService, private snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newExercise = new Exercise(value.name, value.difficulty);

    if(this.listType === 1) {
      this.exerciseService.saveNewCardioExercise(newExercise).subscribe(
        (response) => this.showSnackBar('Exercise saved!'),
        (error) => this.showSnackBar('Error saving exercise')
      );
    } else if (this.listType === 2) {
      this.exerciseService.saveNewMachinesExercise(newExercise).subscribe(
        (response) => this.showSnackBar('Exercise saved!'),
        (error) => this.showSnackBar('Error saving exercise')
      );
    } else if (this.listType === 3) {
      this.exerciseService.saveNewBodyExercise(newExercise).subscribe(
        (response) => this.showSnackBar('Exercise saved!'),
        (error) => this.showSnackBar('Error saving exercise')
      );
    }

    this.dialogRef.close(newExercise);
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 1500
    });
  }

}
