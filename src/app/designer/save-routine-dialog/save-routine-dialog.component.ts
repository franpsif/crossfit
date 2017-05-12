import { RoutineService } from './../../service/routine.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MdDialogRef, MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-save-routine-dialog',
  templateUrl: './save-routine-dialog.component.html',
  styleUrls: ['./save-routine-dialog.component.css']
})
export class SaveRoutineDialogComponent implements OnInit {

  constructor(private dialogRef: MdDialogRef<SaveRoutineDialogComponent>,
      private snackBar: MdSnackBar, private routineService: RoutineService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const name = value.name;

    this.routineService.saveNewRoutine(name).subscribe(
      (response) => this.showSnackBar('Routine saved!'),
      (error) => this.showSnackBar('Error saving routine')
    );

    this.dialogRef.close();
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 1500
    });
  }

}
