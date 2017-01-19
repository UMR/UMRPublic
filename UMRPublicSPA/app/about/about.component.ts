import {Component, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;

@Component({
    templateUrl: 'about.component.html'
})

export class AboutComponent implements AfterViewInit {
    ngAfterViewInit() {
        $(document).ready(function () {
            $(".owl-carousel").owlCarousel({
                autoPlay: false,
                items: 4,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3],
                navigation: true,
                pagination: false,
                responsive: true
            });

        });
    }
}