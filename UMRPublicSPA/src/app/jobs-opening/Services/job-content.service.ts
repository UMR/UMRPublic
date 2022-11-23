import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from '../../common/auth.service';
import { resourceServerUrl } from '../../common/constants/auth-keys';
import { JobContent } from '../model/job-content';

@Injectable()
export class JobContentService {

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

  postJobContent(body: Object): Observable<any> {
    //this.requestBody = `{"JobTitle":"{0}", "JobDescription":"{1}"}`;
    //this.requestBody = { "JobTitle": "Test", "JobDescription": "Test" };
    //let body = JSON.stringify(this.requestBody.replace('{0}', jobTitle).replace('{1}', jobDescription));
    let jobContentURL = `${resourceServerUrl}` + "/api/jobboards/insertjob";
    let bodyString = JSON.stringify(body);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let bearer = 'Bearer {0}'.replace('{0}', this.accessTokenService.accessToken);
    headers.append('Authorization', bearer);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(jobContentURL, bodyString, options)
      .map((res: Response) => {
        if (res.status == 201) {
          return res.status;
        }
      })
      .catch(err => Observable.throw(err));
  }

  updateJobContent(body: Object): Observable<any> {

    let jobContentURL = `${resourceServerUrl}` + "/api/jobboards/updatejob";
    let bodyString = JSON.stringify(body);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let bearer = 'Bearer {0}'.replace('{0}', this.accessTokenService.accessToken);
    headers.append('Authorization', bearer);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(jobContentURL, bodyString, options)
      .map((res: Response) => {
        if (res.status == 200) {
          return res.status;
        }
      })
      .catch(err => Observable.throw(err));
  }

  deleteJobContent(jobContentId: number): Observable<any> {

    let jobContentURL = `${resourceServerUrl}` + "/api/jobboards/deletejob/" + jobContentId;
    //let bodyString = JSON.stringify(body);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let bearer = 'Bearer {0}'.replace('{0}', this.accessTokenService.accessToken);
    headers.append('Authorization', bearer);
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(jobContentURL, options)
      .map((res: Response) => {
        if (res.status == 200) {
          return res.status;
        }
      })
      .catch(err => Observable.throw(err));
  }

  getAllJobsByUserId(): Observable<any> {

    let jobContentGetURL = `${resourceServerUrl}` + "/api/jobboards/getalljobsbyuserid";

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

  getAllJobs(): Observable<any> {

    //let jobContentGetURL = `${resourceServerUrl}` + "/api/jobboards/getalljobs";
    let jobContentGetURL = `${resourceServerUrl}` + "/api/jobs/job";
    //let jobContentGetURL = "http://www.umrtest.com/publicjobAPI/api/jobs";
    //let jobContentGetURL = "http://localhost:3576/api/jobs";

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

  getAllPosition(): Observable<any> {

    let jobContentGetURL = `${resourceServerUrl}` + "/api/jobs/position";

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

  getAllCountyState(): Observable<any> {

    let jobContentGetURL = `${resourceServerUrl}` + "/api/jobs/county";

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
