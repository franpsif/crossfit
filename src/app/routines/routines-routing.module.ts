import { AuthGuard } from './../auth-guard.service';
import { MainContainerComponent } from './../core/main-container/main-container.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { RoutinesComponent } from './routines.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routinesRoutes: Routes = [
    {path: '', component: MainContainerComponent, canActivate: [AuthGuard], children: [
        {path: 'routines', component: RoutinesComponent, children: [
            {path: ':exercise', component: ExerciseDetailComponent}
        ]}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(routinesRoutes)
    ],
    exports: [RouterModule]
})
export class RoutinesRoutingModule {}