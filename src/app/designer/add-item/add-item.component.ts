import { Exercise } from './../../model/exercise.model';
import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private dialogRef: MdDialogRef<AddItemComponent>) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newExercise = new Exercise(value.name, value.difficulty);

    this.dialogRef.close(newExercise);
  }

}
