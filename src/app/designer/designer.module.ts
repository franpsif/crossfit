import { MaterialModule } from '../material/material/material.module';
import { DesignerListComponent } from './designer-list/designer-list.component';
import { SharedModule } from './../shared/shared.module';
import { AddItemComponent } from './add-item/add-item.component';
import { DesignerComponent } from './designer.component';
import { ExerciseItemComponent } from './exercise-item/exercise-item.component';
import { ResultItemComponent } from './result-item/result-item.component';
import { SaveRoutineDialogComponent } from './save-routine-dialog/save-routine-dialog.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DesignerComponent,
        AddItemComponent,
        ExerciseItemComponent,
        ResultItemComponent,
        SaveRoutineDialogComponent,
        DesignerListComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        MaterialModule
    ],
    entryComponents: [
        AddItemComponent,
        SaveRoutineDialogComponent
    ]
})
export class DesignerModule {}
