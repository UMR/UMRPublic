import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { routing }        from './app.route';
import { HttpModule  } from '@angular/http';
import {CookieService, CookieOptions} from 'angular2-cookie/core';
import {LoginService} from './login/login.service';
import {UmrCookieService} from './common/services/umr-cookie.service';
import {AuthService} from './common/auth.service';
import { AuthGuard } from './auth.guard';
//import { MainResolver } from './main/main.resolver';
import {UserInformationService} from './main/user-information.service';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import { LoadingImageModule } from './common/loading-image.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        LoadingImageModule
    ],
    declarations: [AppComponent, MainComponent, LoginComponent],
    providers: [CookieService, LoginService,
                UmrCookieService, AuthService, AuthGuard,  UserInformationService],
    bootstrap: [AppComponent]
})
export class AppModule { }