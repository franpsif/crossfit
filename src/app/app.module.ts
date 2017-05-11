import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExerciseService } from './service/exercise.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { DesignerComponent } from './designer/designer.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ExerciseItemComponent } from './designer/exercise-item/exercise-item.component';
import { RoundNumberPipe } from './pipe/round-number.pipe';
import { ResultItemComponent } from './designer/result-item/result-item.component';
import { DifficultyColorPipe } from './pipe/difficulty-color.pipe';
import { AddItemComponent } from './designer/add-item/add-item.component';
import { MaterialModule } from '@angular/material';
import { DifficultyValidationDirective } from './directive/difficulty-validation.directive';
import { SaveDialogComponent } from './designer/save-dialog/save-dialog.component';


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
    SaveDialogComponent
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
    SaveDialogComponent
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
