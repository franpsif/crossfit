import { ExerciseDetailComponent } from './routines/exercise-detail/exercise-detail.component';
import { RoutinesComponent } from './routines/routines.component';
import { DesignerComponent } from './designer/designer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
