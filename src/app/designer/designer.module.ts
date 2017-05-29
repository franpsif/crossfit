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
        SaveRoutineDialogComponent
    ],
    imports: [
        SharedModule,
        FormsModule
    ],
    entryComponents: [
        AddItemComponent,
        SaveRoutineDialogComponent
    ]
})
export class DesignerModule {}
