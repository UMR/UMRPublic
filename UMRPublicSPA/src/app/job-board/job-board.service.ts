import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from '../common/auth.service';
import { resourceServerUrl } from '../common/constants/auth-keys';

@Injectable()
export class JobBoardService {

  constructor(private http: Http, private accessTokenService: AuthService) {
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }  

  getAllJobBoards(): Observable<any> {

    let jobContentGetURL = `${resourceServerUrl}` + "/api/jobboards/getalljobboards";

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let bearer = 'Bearer {0}'.replace('{0}', this.accessTokenService.accessToken);
    headers.append('Authorization', bearer);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(jobContentGetURL, options)
      .map((res: Response) => {
        if (res.status == 200) {
          return res.json();
        }
        else {
          return null;
        }
      })
      .catch(err => Observable.throw(err));
  }
}
