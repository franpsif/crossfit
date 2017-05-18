import { SharedModule } from './../shared/shared.module';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { RoutineItemComponent } from './routine-item/routine-item.component';
import { RoutinesRoutingModule } from './routines-routing.module';
import { RoutinesComponent } from './routines.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        RoutinesComponent,
        RoutineItemComponent,
        ExerciseDetailComponent
    ],
    imports: [
        CommonModule,
        RoutinesRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [RoutinesComponent]
})

export class RoutinesModule {}
