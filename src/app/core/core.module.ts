import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule {}
