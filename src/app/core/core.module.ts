import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HeaderComponent,
        LoginComponent,
        MainContainerComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        CoreRoutingModule,
        FormsModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule {}
