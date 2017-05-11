import { MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-dialog',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.css']
})
export class SaveDialogComponent implements OnInit {
  message: string;

  constructor(private dialogRef: MdDialogRef<SaveDialogComponent>) { }

  ngOnInit() {
  }

}
