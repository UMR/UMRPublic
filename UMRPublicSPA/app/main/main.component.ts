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

export class MainComponent implements OnInit {
    private isLoading: boolean = true;
    menu: any[] = [];
    subMenu: any[] = [];
    userInformation: CurrentUser;
    currentUserPhoto: string;
    constructor(private route: ActivatedRoute, private _loginService: LoginService,
        private _userInformationService: UserInformationService, private authService: AuthService) {
        //_userInformationService.getCurrentUserPhoto()
        //    .subscribe(photo => {
        //        if (photo != '') {
        //            this.currentUserPhoto = "data:image/png;base64," + photo;
        //        }
        //        else {
        //            this.currentUserPhoto = photo;
        //        }

        //    }, err => { this.isLoading = false; console.error(err); });

        //_userInformationService.getCurrentUserMenu()
        //    .subscribe(v => {
        //        v.subscribe(menu => {
        //            const hasSubmenu = ['Alert Network'];
        //            const submenus = this.subMenu;
        //            for (const item of menu) {
        //                const submenuValues = ['ADAN07', 'ADAN08', 'ADAN09', 'ADAN10', 'ADAN11'];
        //                if (submenuValues.lastIndexOf(item.MENU_VALUE) > -1) {
        //                    submenus.push(item);
        //                } else {
        //                    this.menu.push(item);
        //                }
        //            }
        //            this.menu.filter(v => v.label == hasSubmenu[0])[0].items = submenus;
        //        }, err => { this.isLoading = false; console.error(err); }, () => { this.isLoading = false; })
        //    }, err => { this.isLoading = false; console.error(err); });
    }
    ngOnInit() {
       // this.userInformation = JSON.parse(this.route.snapshot.data['main']._body);
    }

    logout() {
        this.authService.logout();
    }
}