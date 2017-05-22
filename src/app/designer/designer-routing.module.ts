import { AuthGuard } from './../auth-guard.service';
import { MainContainerComponent } from './../core/main-container/main-container.component';
import { DesignerComponent } from './designer.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const designerRoutes = [
    {path: '', component: MainContainerComponent, canActivate: [AuthGuard], children: [
        {path: 'designer', component: DesignerComponent}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(designerRoutes)
    ],
    exports: [RouterModule]
})
export class DesignerRoutingModule {}
