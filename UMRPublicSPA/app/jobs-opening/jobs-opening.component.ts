import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService } from '../login/login.service';

@Component({
    templateUrl: 'jobs-opening.component.html',
    providers: [LoginService]
})

export class JobOpeningComponent {

    constructor(private router: Router, private loginService: LoginService) { }

    loginId: string;
    password: string;

    goToJobBoard() {
        if (this.loginId == "" || this.password == "")
        {
            alert("The Login ID or Password can not be empty");
            return false;
        }
        this.loginService.login(this.loginId, this.password)
            .subscribe(() => {            
            this.router.navigate([`/job-dashboard`]); 
        }, () => console.error('The Login ID or Password is incorrect.'));             
               
    }
}