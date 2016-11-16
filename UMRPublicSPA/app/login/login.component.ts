import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

class User {
    loginId: string;
}

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private _router: Router, private _loginService: LoginService) {
        this.institution = this.institutions[0].value;
    }

    institution: string;
    loginId: string;
    password: string;

    institutions = [
        {
            name: 'Universal Medical Records',
            value: 'UMHLD'
        },
        {
            name: 'School System',
            value: '10003'
        }
    ];

    onLogin() {
        this._loginService.login(this.loginId, this.password, this.institution)
            .subscribe(() => {
                this._router.navigate(['/']);
            }, () => console.error('The Login ID or Password is incorrect.'));
    }
}