import { AddItemComponent } from '../add-item/add-item.component';
import { Exercise } from '../../shared/exercise.model';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-designer-list',
  templateUrl: './designer-list.component.html',
  styleUrls: ['./designer-list.component.css']
})
export class DesignerListComponent implements OnInit {
  @Input() listName: string;
  @Input() exerciseList: Array<Exercise>;
  @Input() listType: number;

  constructor( private dialog: MatDialog) { }

  ngOnInit() {
  }

  onAddExercise() {
    const dialogRef = this.dialog.open(AddItemComponent, {
      height: '400px',
      width: '500px'
    });
    dialogRef.componentInstance.listType = this.listType;
  }

}
