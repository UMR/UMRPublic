import { Routes, RouterModule, PreloadAllModules }  from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import { AuthGuard } from './auth.guard';
//import { MainResolver } from './main/main.resolver';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        //canActivate: [AuthGuard],
        //resolve: { main: MainResolver },
        children: [
            {
                path: ''
            },
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
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: "/"
    }
];

export const routing = RouterModule.forRoot(routes , { preloadingStrategy: PreloadAllModules });