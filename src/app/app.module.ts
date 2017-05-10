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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DesignerComponent,
    ExerciseItemComponent,
    RoundNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
