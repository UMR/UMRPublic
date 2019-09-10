import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import {AccessTokenService} from '../common/services/access-token.service';
import { AuthService } from '../auth.service';
import { CurrentUser } from '../models/current-user';
import { resourceServerUrl } from '../constants/auth-keys';

@Injectable()
export class UserInformationService {
    constructor(private _http: Http, private _accessTokenService: AuthService) { }
    _currentlyLoggedOnUserUrl = `${resourceServerUrl}/CurrentlyLoggedOnUser`;


  getCurrentUser(): Observable<any> {
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
}
