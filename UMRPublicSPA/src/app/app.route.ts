import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
//import { MainResolver } from './main/main.resolver';
import { HomeComponent } from './home/home.component';
import { ProductsServicesComponent } from './products-and-services/products-services.component';
import { AboutComponent } from './about/about.component';
import { ContactPortalComponent } from './contact-portal/contact-portal.component';
import { ClientAccessComponent } from './client-access/client-access.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { ApplicantPortalComponent } from './applicant-portal/applicant-portal.component';
import { JobOpeningComponent } from './jobs-opening/jobs-opening.component';
import { JobDashboardComponent } from './jobs-opening/job-dashboard/job-dashboard.component';
import { AdminHomeComponent } from './jobs-opening/admin-home/admin-home.component';
import { ChangePasswordComponent } from './jobs-opening/change-password/change-password.component';
import { JobBoardComponent } from './job-board/job-board.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    //canActivate: [AuthGuard],
    //resolve: { main: MainResolver },
    children: [
      { path: '', component: HomeComponent },
      { path: 'products-services', component: ProductsServicesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact-portal', component: ContactPortalComponent },
      { path: 'client-access', component: ClientAccessComponent },
      { path: 'applicant-portal', component: ApplicantPortalComponent },
      { path: 'customer-portal', component: CustomerPortalComponent },
      { path: 'jobs-opening', component: JobOpeningComponent },
      { path: 'jobs-board', component: JobBoardComponent }
    ]
  },
  {
    path: 'job-dashboard',
    canActivate: [AuthGuard],
    component: AdminHomeComponent,
    children:
      [
        {
          path: '',
          component: JobDashboardComponent,
          canActivateChild: [AuthGuard]
        },
        {
          path: 'change-password',
          component: ChangePasswordComponent
        }
      ]
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
  }//,
  //{
  //    path: 'products-services',
  //    component: ProductsServicesComponent
  //},
  //{
  //    path: 'about',
  //    component: AboutComponent
  //},
  //{
  //    path: 'contact-portal',
  //    component: ContactPortalComponent
  //},
  //{
  //    path: 'client-access',
  //    component: ClientAccessComponent
  //},
  //{
  //    path: 'applicant-portal',
  //    component: ApplicantPortalComponent
  //},
  //{
  //    path: 'customer-portal',
  //    component: CustomerPortalComponent
  //},
  //{
  //    path: 'jobs-opening',
  //    component: JobOpeningComponent
  //},
  //{
  //    path: 'job-dashboard',
  //    component: JobDashboardComponent
  //}     
];

export const routing = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
