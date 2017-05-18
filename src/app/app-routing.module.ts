import { ExerciseDetailComponent } from './routines/exercise-detail/exercise-detail.component';
import { RoutinesComponent } from './routines/routines.component';
import { DesignerComponent } from './designer/designer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {path: '', component: DesignerComponent},
    {path: 'designer', component: DesignerComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
