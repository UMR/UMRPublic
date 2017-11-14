import { Component, ElementRef, Renderer} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'umr-public-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor(private el: ElementRef, private renderer: Renderer) {
    }
    onMenuClick() {
        this.renderer.setElementClass(this.el.nativeElement.getElementByClass('navbar-ex1-collapse'), 'in', true);
    }
}
