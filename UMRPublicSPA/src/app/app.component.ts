import {Component} from '@angular/core';
import {FooterComponent} from './common/components/footer/footer.component';
import {HeaderComponent} from './common/components/header/header.component';
import {SubscribeComponent} from './common/components/subscribe/subscribe.component';

// Statics
import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app',
    template: `              
              <router-outlet></router-outlet> 
              `
})

export class AppComponent {}