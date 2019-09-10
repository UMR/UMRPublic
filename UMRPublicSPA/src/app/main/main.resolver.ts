//import {Injectable } from '@angular/core';
//import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot }  from '@angular/router';
//import {UserInformationService} from './user-information.service';
//import {Observable} from 'rxjs/Observable';
//import {MainComponent} from './main.component';
//import {CurrentUser} from './current-user';

//@Injectable()
//export class MainResolver implements Resolve<MainComponent>
//{
//    constructor(private _userInformationService: UserInformationService) {

//    }

//    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CurrentUser> {
//        return this._userInformationService.getCurrentUser();
//    }
//}