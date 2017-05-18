import { RouterModule } from '@angular/router';
import { DesignerComponent } from './designer.component';
import { NgModule } from '@angular/core';

const designerRoutes = [
    {path: '', component: DesignerComponent},
    {path: 'designer', component: DesignerComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(designerRoutes)
    ],
    exports: [RouterModule]
})
export class DesignerRoutingModule {}
