import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptionsArgs} from '@angular/http';
import {Observable} from 'rxjs/Observable';
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
        return this._http.get(this._currentlyLoggedOnUserUrl, {
            headers
        })
            .map((value, index) => {
                return value;
            })
            .catch(err => Observable.throw(err));
    }

    getCurrentUserMenu(): Observable<Observable<UserMenu[]>> {
        const headers = new Headers();
        const bearer = 'Bearer {0}'.replace('{0}', this._accessTokenService.accessToken);
        headers.append('Authorization', bearer);
        const options: RequestOptionsArgs = {
            headers
        };

        return this._http.get(this._currentlyLoggedOnUserUrl, options)
            .map((response, index) => {
                const userID: string = response.json().USER_ID;
                const _userMenurUrl = `${resourceServerUrl}/get_user_menu/${userID}`;
                return this._http.get(_userMenurUrl, options)
                    .map((response, index) => {
                        return <UserMenu[]>response.json();
                    }).catch(err => Observable.throw(err));;
            }).catch(err => Observable.throw(err));;
    }

    getCurrentUserPhoto(): Observable<string> {
        const headers = new Headers();
        const bearer = 'Bearer {0}'.replace('{0}', this._accessTokenService.accessToken);
        headers.append('Authorization', bearer);
        const options: RequestOptionsArgs = {
            headers
        };

        const _photoUrl = `${resourceServerUrl}/get_user_photo`;
        return this._http.get(_photoUrl, options)
            .map((response, index) => {
                return <string>response.json();
            }).catch(err => Observable.throw(err));;
    }
}