import { RoutinesComponent } from './routines/routines.component';
import { DesignerComponent } from './designer/designer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {path: '', component: DesignerComponent},
    {path: 'designer', component: DesignerComponent},
    {path: 'routines', component: RoutinesComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
