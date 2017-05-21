import { Injectable }          from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { LoginService }         from './login/login.service';
import {AuthService} from './common/auth.service';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    public redirectUrl = '';

    constructor(private authService: AuthService, private router: Router) { }    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this.authService.isLoggedIn) {
            //this code can execute in two ways. Aftert successful login and 
            //after login if an user create a new browser session
            this.authService.setUserSettings();            
            return true;
        }
        this.redirectUrl = state.url;
        this.router.navigate([`/jobs-opening`]);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isLoggedIn) {
            //this code can execute in two ways. Aftert successful login and 
            //after login if an user create a new browser session            
            this.authService.setUserSettings();
            return true;
        }
        this.redirectUrl = state.url;
        this.router.navigate([`/jobs-opening`]);
        return false;
    }
}
