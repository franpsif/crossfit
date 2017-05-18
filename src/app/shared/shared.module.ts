import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoundNumberPipe } from './round-number.pipe';
import { DifficultyColorPipe } from './difficulty-color.pipe';
import { CategoryNamePipe } from './category-name.pipe';
import { DifficultyValidationDirective } from './difficulty-validation.directive';
import { RoutineNameValidationDirective } from './routine-name-validation.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        DifficultyValidationDirective,
        RoutineNameValidationDirective,
        CategoryNamePipe,
        DifficultyColorPipe,
        RoundNumberPipe
    ],
    exports: [
        CommonModule,
        DifficultyValidationDirective,
        RoutineNameValidationDirective,
        CategoryNamePipe,
        DifficultyColorPipe,
        RoundNumberPipe,
        BrowserAnimationsModule,
        MaterialModule
    ]
})
export class SharedModule {}
