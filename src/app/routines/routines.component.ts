import { Routine } from './../model/routine.model';
import { RoutineService } from './routine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {
  routines: Routine[];

  constructor(private routineService: RoutineService) { }

  ngOnInit() {
    this.routines = this.routineService.getRoutineList();
    this.routineService.routineListModified.subscribe((routinesList: Routine[]) => {
      this.routines = routinesList;
    });
  }

}
