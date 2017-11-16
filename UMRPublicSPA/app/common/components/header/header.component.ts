import { Component, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'umr-public-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor(private el: ElementRef, private renderer: Renderer) {
    }
    onMenuClick() {
        try {
            console.log("QS: ", this.el.nativeElement.querySelector('.navbar-ex1-collapse'));
            this.renderer.setElementClass(this.el.nativeElement.querySelector('.navbar-ex1-collapse'), 'in', false);
        } catch (e) {
            alert(e);
        }
    }
}
