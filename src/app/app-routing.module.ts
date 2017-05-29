import { RenewCatcherComponent } from './core/renew-catcher/renew-catcher.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './auth-guard.service';
import { MainContainerComponent } from './core/main-container/main-container.component';
import { ExerciseDetailComponent } from './routines/exercise-detail/exercise-detail.component';
import { RoutinesComponent } from './routines/routines.component';
import { DesignerComponent } from './designer/designer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {path: '', component: MainContainerComponent, children: [
        {path: 'designer', component: DesignerComponent},
        {path: 'routines', component: RoutinesComponent, children: [
            {path: ':exercise', component: ExerciseDetailComponent}
        ]},
    ]},
    {path: 'login', component: LoginComponent},
    {path: 'silentRenew', component: RenewCatcherComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
