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
import {FooterComponent} from './common/components/footer/footer.component';
import {HeaderComponent} from './common/components/header/header.component';
import {CustomerPortalComponent} from './customer-portal/customer-portal.component';
import {ContactPortalComponent} from './contact-portal/contact-portal.component';
import {ApplicantPortalComponent} from './applicant-portal/applicant-portal.component';
import {AboutComponent} from './about/about.component';
import {ClientAccessComponent} from './client-access/client-access.component';
import {SubscribeComponent} from './common/components/subscribe/subscribe.component';
import {ProductsServicesComponent} from './products-and-services/products-services.component';
import {JobOpeningComponent} from './jobs-opening/jobs-opening.component';
import {LocationComponent } from './contact-portal/location/location.component'
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        LoadingImageModule
    ],
    declarations: [AppComponent,
        MainComponent,
        LoginComponent,
        FooterComponent,
        HeaderComponent,
        CustomerPortalComponent,
        ContactPortalComponent,
        ApplicantPortalComponent,
        AboutComponent,
        ClientAccessComponent,
        SubscribeComponent,
        ProductsServicesComponent,
        JobOpeningComponent,
        LocationComponent
    ],
    providers: [CookieService,
        LoginService,
        UmrCookieService,
        AuthService,
        AuthGuard,
        UserInformationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }