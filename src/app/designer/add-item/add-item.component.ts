import { ExerciseService } from './../../designer/exercise.service';
import { Exercise } from './../../shared/exercise.model';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  listType: number;

  constructor(private dialogRef: MatDialogRef<AddItemComponent>,
    private exerciseService: ExerciseService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    this.exerciseService.saveNewExercise(value.name, value.difficulty, this.listType, value.exampleLink).subscribe(
      (response) => this.showSnackBar('Exercise saved!'),
      (error) => this.showSnackBar('Error saving exercise')
    );

    this.dialogRef.close();
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 1500
    });
  }

}
