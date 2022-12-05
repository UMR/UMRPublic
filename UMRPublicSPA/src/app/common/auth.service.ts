import { Injectable, Inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UmrPublicCookieService } from '../common/services/umr-cookie.service';
import { CookieOptionsArgs } from 'angular2-cookie/core';
import { cloneRoutes, removeUnauthorizeRoutes } from './helpers/route-config.helper';

import { AuthInfo } from './authInfo';
import { activateAutoLogout, deActivateAutoLogout } from './helpers/auto-logout.helper';
import { getToken, getTokenFromRefreshToken, revokeToken } from './helpers/http-client.helper';
import { authCookieKey, disableAuthorization, allPermissions } from './constants/auth-keys';

@Injectable()
export class AuthService {
  private position: string = "";
  private county: string = "";
  constructor(private http: Http, private umrCookieService: UmrPublicCookieService, private router: Router) {

  }

  get isLoggedIn(): boolean {
    return !!this.accessToken;
  }

  private _getAccessTokenInfo() {
    return <AuthInfo>this.umrCookieService.getDeserializedObject(authCookieKey);
  }
  get accessToken() {
    const accessTokenInfo = <AuthInfo>this.umrCookieService.getDeserializedObject(authCookieKey);
    return accessTokenInfo && accessTokenInfo.access_token;
  }

  private get refreshToken() {
    const accessTokenInfo = <AuthInfo>this.umrCookieService.getDeserializedObject(authCookieKey);
    return accessTokenInfo && accessTokenInfo.refresh_token;
  }

  private get refreshTokenLifeTime() {
    const accessTokenInfo = <AuthInfo>this.umrCookieService.getDeserializedObject(authCookieKey);
    return (accessTokenInfo && accessTokenInfo.refresh_expires) ? accessTokenInfo.refresh_expires : 0;
  }

  private get loginTime() {
    const accessTokenInfo = <AuthInfo>this.umrCookieService.getDeserializedObject(authCookieKey);
    return (accessTokenInfo && accessTokenInfo.created) ? accessTokenInfo.created : 0;
  }

  public get permissions() {
    const accessTokenInfo = <AuthInfo>this.umrCookieService.getDeserializedObject(authCookieKey);
    return accessTokenInfo && accessTokenInfo.permissions;
  }

  login(userID: string, password: string): Observable<any> {
    return getToken(this.http, userID, password)
      .map((value, index) => {
        this.saveAuthInfo(value, true);
      }).catch(err => Observable.throw(err));
  }

  setUserSettings() {
    this.setPermittedRoutes();
    const curretTime = (new Date()).valueOf();
    let loginTime = this.loginTime;
    let timeDefferenceInSeconds = (curretTime - loginTime) / 1000;
    activateAutoLogout(this.refreshTokenLifeTime - timeDefferenceInSeconds, this.logout, this);
  }

  renewToken(): Observable<any> {
    const refreshToken = this.refreshToken;
    if (!refreshToken) {
      return Observable.throw('Cookie not found');
    }
    return getTokenFromRefreshToken(this.http, refreshToken)
      .map((value, index) => {
        this.saveAuthInfo(value);
        activateAutoLogout(this.refreshTokenLifeTime, this.logout, this);
      })
      .catch(err => Observable.throw(err));
  }

  /**
   * Navigate to login view
   * delete tokens from storage
   * revoke tokens from authorization server
   */
  logout() {
    deActivateAutoLogout();
    this.router.navigate(['/jobs-opening']).then(isNavigated => {
      const accessTokenInfo = this._getAccessTokenInfo();
      if (accessTokenInfo && accessTokenInfo.refresh_token) {
        const refreshToken = accessTokenInfo.refresh_token;
        revokeToken(this.http, refreshToken).subscribe(value => this.umrCookieService.removeCookie(authCookieKey));
      }

      if (isNavigated) {
        this.setAllRoutes(this.router);
      }
    });
  }
  private saveAuthInfo(value, isAccessToken: boolean = false) {
    try {
      const info = <AuthInfo>value.json();
      info.permissions = info.permissions || [];
      info.permissions = this.getPermissions(info, isAccessToken);
      info.created = (new Date()).valueOf();
      this.umrCookieService.setSerializedObject(authCookieKey, info);
    } catch (e) {
      console.error(e);
      throw Error('Couldn\'t save cookie');
    }
  }

  private getPermissions(info: AuthInfo, isAccessToken: boolean) {
    if (!disableAuthorization) {
      if (!isAccessToken) { //refresh token doesn't send permissions
        return this._getAccessTokenInfo().permissions; //get permission from cookie
      } else {
        info.permissions.push('Logout'); // logout permission is not present in database
        return info.permissions;
      }
    }
    else {
      return allPermissions;
    }
  }

  private allRoutes: Routes = [];

  private setAllRoutes(router: Router) {
    if (!disableAuthorization) {
      router.resetConfig(this.allRoutes);
    }
  }

  private setPermittedRoutes() {
    if (!disableAuthorization) {
      const config = (this.router as any).config;
      const clone = cloneRoutes(config);
      this.allRoutes = config;
      removeUnauthorizeRoutes(clone, this.permissions);
      this.router.resetConfig(clone);
    }
  }

  handleError(err: any, caught: Observable<any>) {
    return Observable.throw(err);
  }


  public setSelectedPosition(position: string) {
    this.position = position;
  }
  public getSelectedPosition() {
    return this.position;
  }
  public clearSelectedPosition() {
    return this.position = "";
  }
  public setSelectedCounty(county: string) {
    this.county = county;
  }
  public getSelectedCounty() {
    return this.county;
  }
  public clearSelectedCounty() {
    this.county = "";
  }
}
