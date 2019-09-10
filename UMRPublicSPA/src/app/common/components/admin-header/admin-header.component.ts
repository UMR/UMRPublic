import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../login/login.service';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'umr-public-admin-header',
    templateUrl: './admin-header.component.html'
})

export class AdminHeaderComponent {
    constructor(private route: ActivatedRoute,
        private _loginService: LoginService,        
        private authService: AuthService) {

    }

    logout(): void {
        this.authService.logout();
    }
}
