import {Component} from '@angular/core';
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
              <router-outlet></router-outlet>   
              `
})

export class AppComponent {}