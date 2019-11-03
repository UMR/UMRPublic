import { Component } from '@angular/core';

@Component({
    selector: 'umr-public-admin-footer',
    templateUrl: './admin-footer.component.html',
    styleUrls: ['./admin-footer.component.css']
})

export class AdminFooterComponent {
    toCopyright: number = new Date().getFullYear();
}
