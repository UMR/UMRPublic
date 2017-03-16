import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {authorizationServerUrl, pathMatch, scopes} from '../constants/auth-keys';

const accessTokenUrl = `${authorizationServerUrl + pathMatch}/connect/token`;
const accessTokenBody = `grant_type=password&username={0}&password={1}&scope=${scopes.join('+')}`;

const accessTokenRevokeUrl = `${authorizationServerUrl + pathMatch}/connect/revocation`;
const refreshTokenRevokeBody = 'token={0}&token_type_hint=refresh_token';

const accessTokenFromRefreshTokenBody = 'grant_type=refresh_token&refresh_token={0}';

function getheaders(): Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic V2ViVU1SUHVibGljQ2xpZW50Ojhick1OTHFsYnZkTzhYZmtrQXFNaC9lc2tycEJqTEpuVVkzSEtBZW9lNjA9');
    return headers;
}

export function getToken(http: Http, userID: string, password: string): Observable<Response> {
    const body = accessTokenBody.replace('{0}', userID).replace('{1}', password);
    return http.post(accessTokenUrl, body, { headers: getheaders() });
}

export function revokeToken(http: Http, refreshToken: string): Observable<Response> {
    const body = refreshTokenRevokeBody.replace('{0}', refreshToken);
    return http.post(accessTokenRevokeUrl, body, { headers: getheaders() });
}

export function getTokenFromRefreshToken(http: Http, refreshToken: string): Observable<Response> {
    const body = accessTokenFromRefreshTokenBody.replace('{0}', refreshToken);
    return http.post(accessTokenUrl, body, { headers: getheaders() });
}