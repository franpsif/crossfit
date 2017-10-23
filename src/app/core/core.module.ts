import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HeaderComponent,
        MainContainerComponent
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
