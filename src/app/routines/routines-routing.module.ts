import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { RoutinesComponent } from './routines.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routinesRoutes: Routes = [
    {path: 'routines', component: RoutinesComponent, children: [
        {path: ':exercise', component: ExerciseDetailComponent}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(routinesRoutes)
    ],
    exports: [RouterModule]
})
export class RoutinesRoutingModule {}