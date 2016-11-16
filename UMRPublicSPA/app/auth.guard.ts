import { Injectable }          from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { LoginService }         from './login/login.service';
import {AuthService} from './common/auth.service';

//@Injectable()
//export class AuthGuard implements CanActivate {
//    constructor(private loginService: LoginService, private router: Router) { }

//    canActivate() {
//        if (this.loginService.isLoggedIn) { return true; }
//        this.router.navigate(['/login']);
//        return false;
//    }
//}
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    public redirectUrl = '';

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this.authService.isLoggedIn) {
            //this code can execute in two ways. Aftert successful login and 
            //after login if an user create a new browser session
            this.authService.setUserSettings();
            return true;
        }
        this.redirectUrl = state.url;
        this.router.navigate([`/login`]);
        return false;
    }
}
