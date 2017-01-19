import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptionsArgs} from '@angular/http';
import {Observable} from 'rxjs/Observable';
//import {AccessTokenService} from '../common/services/access-token.service';
import {AuthService} from '../common/auth.service';
import {CurrentUser} from './current-user';
import {UserMenu} from './user-menu';
import {resourceServerUrl} from '../common/constants/auth-keys';

@Injectable()
export class UserInformationService {
    constructor(private _http: Http, private _accessTokenService: AuthService) { }
    _currentlyLoggedOnUserUrl = `${resourceServerUrl}/CurrentlyLoggedOnUser`;


    getCurrentUser(): Observable<CurrentUser> {
        const headers = new Headers();
        const bearer = 'Bearer {0}'.replace('{0}', this._accessTokenService.accessToken);
        headers.append('Authorization', bearer);
        return Observable.create(() => 0);
        //return this._http.get(this._currentlyLoggedOnUserUrl, {
        //    headers
        //})
        //    .map((value, index) => {
        //        return value;
        //    })
        //    .catch<any>((err, caught) => {
        //        const errMsg = err.message || err.statusText || 'Server Error';
        //        console.error(errMsg);
        //        return Observable.throw(err);
        //    });
    }

    getCurrentUserMenu(): Observable<Observable<UserMenu[]>> {
        const headers = new Headers();
        const bearer = 'Bearer {0}'.replace('{0}', this._accessTokenService.accessToken);
        headers.append('Authorization', bearer);
        const options: RequestOptionsArgs = {
            headers
        };

        return Observable.create(() => 0);
        //return this._http.get(this._currentlyLoggedOnUserUrl, options)
        //    .map<Observable<UserMenu[]>>((response, index) => {
        //        const userID: string = response.json().USER_ID;
        //        const _userMenurUrl = `${resourceServerUrl}/get_user_menu/${userID}`;
        //        return this._http.get(_userMenurUrl, options)
        //            .map<UserMenu[]>((response, index) => {
        //                return <UserMenu[]>response.json();
        //            });
        //    });
    }

    getCurrentUserPhoto(): Observable<string> {
        const headers = new Headers();
        const bearer = 'Bearer {0}'.replace('{0}', this._accessTokenService.accessToken);
        headers.append('Authorization', bearer);
        const options: RequestOptionsArgs = {
            headers
        };

        const _photoUrl = `${resourceServerUrl}/get_user_photo`;
        return Observable.create(() => 0);
        //return this._http.get(_photoUrl, options)
        //            .map<string>((response, index) => {                     
        //                return <string>response.json();
        //            });
    }
}