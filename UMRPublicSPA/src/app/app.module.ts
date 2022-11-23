import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule, SharedModule, TooltipModule, DataTableModule, PaginatorModule, ButtonModule, ConfirmDialogModule, GrowlModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { EditorModule } from 'primeng/components/editor/editor';
//import { DataTableModule } from 'primeng/components/dataTable/dataTable';
import { AppComponent } from './app.component';
import { routing } from './app.route';
import { HttpModule } from '@angular/http';
import { CookieService, CookieOptions } from 'angular2-cookie/core';
import { LoginService } from './login/login.service';
import { UmrPublicCookieService } from './common/services/umr-cookie.service';
import { AuthService } from './common/auth.service';
import { AuthGuard } from './auth.guard';
import { UserInformationService } from './common/services/user-information.service';
//import { MainResolver } from './main/main.resolver';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { LoadingImageModule } from './common/loading-image.module';
import { FooterComponent } from './common/components/footer/footer.component';
import { HeaderComponent } from './common/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { ContactPortalComponent } from './contact-portal/contact-portal.component';
import { ApplicantPortalComponent } from './applicant-portal/applicant-portal.component';
import { AboutComponent } from './about/about.component';
import { ClientAccessComponent } from './client-access/client-access.component';
import { SubscribeComponent } from './common/components/subscribe/subscribe.component';
import { ProductsServicesComponent } from './products-and-services/products-services.component';
import { JobOpeningComponent } from './jobs-opening/jobs-opening.component';
import { LocationComponent } from './contact-portal/location/location.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { PortalComponent } from './portal/portal.component';
import { JobDashboardComponent } from './jobs-opening/job-dashboard/job-dashboard.component';
import { AdminFooterComponent } from './common/components/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './common/components/admin-header/admin-header.component';
import { AdminHomeComponent } from './jobs-opening/admin-home/admin-home.component';
import { ChangePasswordComponent } from './jobs-opening/change-password/change-password.component';
import { EqualValidator } from './common/directives/equal-validator.directive';
import { ForbiddenValidatorDirective } from './common/directives/single-equal-validator';
import { AsyncPasswordValidator } from './common/directives/password.async.validator';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/primeng';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    LoadingImageModule,
    SharedModule,
    EditorModule,
    TooltipModule,
    DataTableModule,
    PaginatorModule,
    ButtonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    GrowlModule,
    CommonModule,
    CheckboxModule
  ],
  declarations: [AppComponent,
    MainComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CustomerPortalComponent,
    ContactPortalComponent,
    ApplicantPortalComponent,
    AboutComponent,
    ClientAccessComponent,
    SubscribeComponent,
    ProductsServicesComponent,
    JobOpeningComponent,
    LocationComponent,
    JobBoardComponent,
    PortalComponent,
    AdminFooterComponent,
    JobDashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminHomeComponent,
    ChangePasswordComponent,
    EqualValidator,
    ForbiddenValidatorDirective,
    AsyncPasswordValidator
  ],
  providers: [{ provide: CookieService, useFactory: cookieServiceFactory },
    UmrPublicCookieService,
    LoginService,
    AuthService,
    AuthGuard,
    UserInformationService
  ],
  exports: [
    EqualValidator,
    ForbiddenValidatorDirective,
    AsyncPasswordValidator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function cookieServiceFactory() { return new CookieService(); }
//{ provide: UmrPublicCookieService, useFactory: cookieServiceFactory }
