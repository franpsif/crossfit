import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AddItemComponent } from './designer/add-item/add-item.component';
import { DesignerComponent } from './designer/designer.component';
import { ExerciseItemComponent } from './designer/exercise-item/exercise-item.component';
import { ResultItemComponent } from './designer/result-item/result-item.component';
import { SaveRoutineDialogComponent } from './designer/save-routine-dialog/save-routine-dialog.component';
import { RoutineService } from './routines/routine.service';
import { RoutinesModule } from './routines/routines.module';
import { ExerciseService } from './designer/exercise.service';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DesignerComponent,
    ResultItemComponent,
    AddItemComponent,
    SaveRoutineDialogComponent,
    ExerciseItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RoutinesModule,
    SharedModule
  ],
  entryComponents: [
    AddItemComponent,
    SaveRoutineDialogComponent
  ],
  providers: [ExerciseService, RoutineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
