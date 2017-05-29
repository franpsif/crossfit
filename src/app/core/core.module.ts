import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RenewCatcherComponent } from './renew-catcher/renew-catcher.component';

@NgModule({
    declarations: [
        HeaderComponent,
        LoginComponent,
        MainContainerComponent,
        RenewCatcherComponent
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
