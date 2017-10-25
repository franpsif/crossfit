import { MaterialModule } from '../material/material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { RoutineItemComponent } from './routine-item/routine-item.component';
import { RoutinesComponent } from './routines.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        RoutinesComponent,
        RoutineItemComponent,
        ExerciseDetailComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [RoutinesComponent]
})

export class RoutinesModule {}
