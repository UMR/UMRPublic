import { Routes, RouterModule, PreloadAllModules }  from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
//import { AuthGuard } from './auth.guard';
//import { MainResolver } from './main/main.resolver';
import { ProductsServicesComponent } from './products-and-services/products-services.component';
import { AboutComponent } from './about/about.component';
import {ContactPortalComponent} from './contact-portal/contact-portal.component';
import {ClientAccessComponent} from './client-access/client-access.component';
import {CustomerPortalComponent} from './customer-portal/customer-portal.component';
import {ApplicantPortalComponent} from './applicant-portal/applicant-portal.component';
import {JobOpeningComponent} from './jobs-opening/jobs-opening.component';
import {JobDashboardComponent} from './jobs-opening/job-dashboard/job-dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
        //canActivate: [AuthGuard],
        //resolve: { main: MainResolver },
        //children: [
        //    {
        //        path: ''
        //    },
            //{ path: 'patient-records', loadChildren: './patient_records/patient-records.module#PatientRecordsModule' },
            //{ path: 'create-soap-note', loadChildren: './alert_networks/create_soap_notes/create-soap-notes.module#CreateSoapNotesModule' },
            //{ path: 'alert-management', loadChildren: './alert_networks/alert_management/alert-management.module#AlertManagementModule' },
            //{ path: 'demographics-editor', loadChildren: './demographics_editor/demographics-editor.module#CreateSoapNotesModule' },
            //{ path: 'user-information', loadChildren: './user_information/user-information.module#UserInfortionsModule' },
            //{ path: 'user-settings', loadChildren: './user_settings/user-settings.module#UserSettingsModule' },
            //{ path: 'calendar', loadChildren: './calendar/calendar.module#CalenderModule' },
            //{ path: 'change-password', loadChildren: './change_password/change-password.module#ChangePasswordModule'}
            
            //,...createSoapNoteRoutes,
            //...ancillaryProvidersRoutes,
            //...calenderRoutes,
            //...changePasswordRoutes,
            //...demographicsRoutes,
            //...demographicsEditorRoutes,
            //...demographicsViewerRoutes,
            //...enrollPatientsRoutes,
            //...enrollProvidersRoutes,
            //...groupManagementRoutes,
            //...alertManagementRoutes,
            //...incomingSOAPAlertRoutes,
            //...userSettingsRoutes,
            //...userInformationRoutes,
            //...soapChronologyRoutes,
            //...userManagementRoutes
        //]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '404',
        redirectTo: '/'
    },
    {
        path: '**',
        redirectTo: "404"
    },
    {
        path: 'products-services',
        component: ProductsServicesComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact-portal',
        component: ContactPortalComponent
    },
    {
        path: 'client-access',
        component: ClientAccessComponent
    },
    {
        path: 'applicant-portal',
        component: ApplicantPortalComponent
    },
    {
        path: 'customer-portal',
        component: CustomerPortalComponent
    },
    {
        path: 'jobs-opening',
        component: JobOpeningComponent
    },
    {
        path: 'job-dashboard',
        component: JobDashboardComponent
    }     
];

export const routing = RouterModule.forRoot(routes , { preloadingStrategy: PreloadAllModules });