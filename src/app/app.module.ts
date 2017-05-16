import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AddItemComponent } from './designer/add-item/add-item.component';
import { DesignerComponent } from './designer/designer.component';
import { ExerciseItemComponent } from './designer/exercise-item/exercise-item.component';
import { ResultItemComponent } from './designer/result-item/result-item.component';
import { SaveRoutineDialogComponent } from './designer/save-routine-dialog/save-routine-dialog.component';
import { DifficultyValidationDirective } from './directive/difficulty-validation.directive';
import { DifficultyColorPipe } from './pipe/difficulty-color.pipe';
import { RoundNumberPipe } from './pipe/round-number.pipe';
import { ExerciseService } from './service/exercise.service';
import { RoutineService } from './service/routine.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutineNameValidationDirective } from './directive/routine-name-validation.directive';
import { RoutinesComponent } from './routines/routines.component';
import { RoutineItemComponent } from './routines/routine-item/routine-item.component';
import { ExerciseDetailComponent } from './routines/exercise-detail/exercise-detail.component';
import { CategoryNamePipe } from './pipe/category-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DesignerComponent,
    ExerciseItemComponent,
    RoundNumberPipe,
    ResultItemComponent,
    DifficultyColorPipe,
    AddItemComponent,
    DifficultyValidationDirective,
    SaveRoutineDialogComponent,
    RoutineNameValidationDirective,
    RoutinesComponent,
    RoutineItemComponent,
    ExerciseDetailComponent,
    CategoryNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [
    AddItemComponent,
    SaveRoutineDialogComponent
  ],
  providers: [ExerciseService, RoutineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
