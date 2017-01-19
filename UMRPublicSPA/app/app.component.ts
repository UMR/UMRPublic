
import {Component} from '@angular/core';
import {FooterComponent} from './common/components/footer/footer.component';
import {HeaderComponent} from './common/components/header/header.component';
import {SubscribeComponent} from './common/components/subscribe/subscribe.component';
//import { ROUTER_DIRECTIVES }  from '@angular/router';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app',
    template: `
              <umr-public-header></umr-public-header>
              <router-outlet></router-outlet> 
              <umr-public-subscribe></umr-public-subscribe>
              <umr-public-footer></umr-public-footer>  
              `
})

export class AppComponent {}