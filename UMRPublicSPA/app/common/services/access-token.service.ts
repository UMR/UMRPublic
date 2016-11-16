//import {Injectable, Inject} from '@angular/core';
//import {Http, Headers, Response} from '@angular/http';
//import {Observable} from 'rxjs/Observable';
//import {accessTokenUrl, accessTokenBody, headers, accessTokenRevokeUrl, authorizationServerUrl,
//    accessTokenFromRefreshTokenBody, accessTokenRevokeBody, refreshTokenRevokeBody}
//from '../access-token-constants';
//import {UmrCookieService} from './umr-cookie.service';
//import {CookieOptionsArgs} from 'angular2-cookie/core';


//export interface AccessTokenInfo {
//    access_token: string,
//    expires_in: string,
//    refresh_token: string,
//    token_type: string
//}

//@Injectable()
//export class AccessTokenService {

//    private _tokenKey = 'tokenKey';
//    constructor(private _http: Http, private _umrCookieService: UmrCookieService) { }

//    get accessToken() {
//        const accessTokenInfo = <AccessTokenInfo>this._umrCookieService.getDeserializedObject(this._tokenKey);
//        return accessTokenInfo && accessTokenInfo.access_token;
//    }

//    issueToken(userID: string, password: string, acr: string): Observable<boolean> {
//        const body = accessTokenBody.replace('{0}', userID)
//            .replace('{1}', password)
//            .replace('{2}', acr);
//        return this._http.post(accessTokenUrl, body, { headers: headers })
//            .map<boolean>((value, index) => {
//                const info = <AccessTokenInfo>value.json();
//                this._saveAccessTokenInfo(info);
//                return true;
//            })
//            .catch<any>(this.handleError);
//    }

//    private _getAccessTokenInfoFromRefreshToken(refreshToken: string): Observable<AccessTokenInfo> {
//        const body = accessTokenFromRefreshTokenBody.replace('{0}', refreshToken);
//        return this._http.post(accessTokenUrl, body, { headers: headers })
//            .map<AccessTokenInfo>((v, i) => {
//                return <AccessTokenInfo>v.json();
//            })
//            .catch<any>(this.handleError);
//    }
//    private _saveAccessTokenInfo(info: AccessTokenInfo) {
//        try {
//            //const args = <CookieOptionsArgs>{
//            //    domain: window.location.host,
//            //    expires: info.expires_in,
//            //    path: '/',
//            //    secure: true
//            //};
//            this._umrCookieService.setSerializedObject(this._tokenKey, info);
//        } catch (e) {
//            console.error(e);
//        }
//    }
//    private _getAccessTokenInfo() {
//        return <AccessTokenInfo>this._umrCookieService.getDeserializedObject(this._tokenKey);
//    }

//    revokeAccessToken(): Observable<boolean> {
//        const accessTokenInfo = this._getAccessTokenInfo();
//        if (!accessTokenInfo || !accessTokenInfo.access_token) {
//            return Observable.from([true]);
//        }
//        const accessToken = accessTokenInfo.access_token;

//        const body = accessTokenRevokeBody.replace('{0}', accessToken);
//        return this._http.post(accessTokenRevokeUrl, body, { headers: headers })
//            .map<boolean>((value, index) => {
//                delete accessTokenInfo.access_token;
//                this._saveAccessTokenInfo(accessTokenInfo);
//                return value.ok;
//            });
//    }
//    revokeRefreshToken(): Observable<boolean> {
//        const accessTokenInfo = this._getAccessTokenInfo();
//        if (!accessTokenInfo || !accessTokenInfo.refresh_token) {
//            return Observable.from([true]);
//        }
//        const refreshToken = accessTokenInfo.refresh_token;
//        const body = refreshTokenRevokeBody.replace('{0}', refreshToken);
//        return this._http.post(accessTokenRevokeUrl, body, { headers: headers })
//            .map<boolean>((value, index) => {
//                this._umrCookieService.removeCookie(this._tokenKey);
//                return value.ok;
//            });
//    }

//    handleError(err: any, caught: Observable<any>) {
//        console.error('AccessTokenService.handleError');
//        const errMsg = err;
//        return Observable.throw(errMsg);
//    }
//}