import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AddItemComponent } from './designer/add-item/add-item.component';
import { DesignerModule } from './designer/designer.module';
import { ExerciseService } from './designer/exercise.service';
import { SaveRoutineDialogComponent } from './designer/save-routine-dialog/save-routine-dialog.component';
import { RoutineService } from './routines/routine.service';
import { RoutinesModule } from './routines/routines.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    DesignerModule,
    RoutinesModule,
    SharedModule
  ],
  providers: [ExerciseService, RoutineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
