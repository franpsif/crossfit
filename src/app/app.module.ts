import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DesignerModule } from './designer/designer.module';
import { ExerciseService } from './designer/exercise.service';
import { RoutineService } from './routines/routine.service';
import { RoutinesModule } from './routines/routines.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    DesignerModule,
    RoutinesModule,
    CoreModule,
    SharedModule
  ],
  providers: [ExerciseService, RoutineService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
