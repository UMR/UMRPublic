import {Injectable} from '@angular/core';
import {AuthService} from '../common/auth.service';


@Injectable()
export class LoginService {
    constructor(private _accessTokenService: AuthService) { }

    get isLoggedIn(): boolean {
        return !!this._accessTokenService.accessToken;
    }

    login(userID: string, password: string) {
        return this._accessTokenService.login(userID, password);
    }

    logout() {
        this._accessTokenService.renewToken()
            .subscribe(success => 0);
    }
}