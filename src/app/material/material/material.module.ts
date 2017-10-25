import { NgModule } from '@angular/core';
import { MatDialogModule, MatSnackBarModule, MatChipsModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    MatDialogModule,
    MatSnackBarModule,
    MatChipsModule,
    MatProgressBarModule
  ],
  exports: [
    MatDialogModule,
    MatSnackBarModule,
    MatChipsModule,
    MatProgressBarModule
  ],
  declarations: []
})
export class MaterialModule { }