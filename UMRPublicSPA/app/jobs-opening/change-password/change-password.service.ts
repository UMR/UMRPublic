import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from '../../common/auth.service';
import { resourceServerUrl } from '../../common/constants/auth-keys';

@Injectable()
export class ChangePasswordService {

    constructor(private http: Http, private accessTokenService: AuthService) {
    }    
    
    updatePassword(body: Object): Observable<Response> {

        const changePasswordURL = `${resourceServerUrl}/api/userinformation/updatepassword`;
        let bodyString = JSON.stringify(body);
        console.log(bodyString);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let bearer = 'Bearer {0}'.replace('{0}', this.accessTokenService.accessToken);
        headers.append('Authorization', bearer);
        let options = new RequestOptions({ headers: headers });

        return this.http.put(changePasswordURL, bodyString, options)
            .map((res: Response) => {                
                return res;                
            })
            .catch(err => Observable.throw(err));
    }

    isMatchPassword(password: string): Observable<Response> {

        const isMatchPasswordURL = `${resourceServerUrl}/api/userinformation/ismatchpassword/${password}`;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let bearer = 'Bearer {0}'.replace('{0}', this.accessTokenService.accessToken);
        headers.append('Authorization', bearer);
        let options = new RequestOptions({ headers: headers });

        return this.http.get(encodeURI(isMatchPasswordURL), options)
            .map((res: Response) => {                                              
                return res;
            })
            .catch(err => Observable.throw(err));
    }
}
