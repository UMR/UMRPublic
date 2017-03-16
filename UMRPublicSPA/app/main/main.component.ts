import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserInformationService} from './user-information.service';
import {LoginService} from '../login/login.service';
import {CurrentUser} from './current-user';
import {AuthService} from '../common/auth.service';

@Component({
    templateUrl: './main.component.html'
    //styleUrls: ["./main.component.style.css"]
})

export class MainComponent {
    
}