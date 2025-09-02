import {Component, AfterViewInit, OnInit} from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;

@Component({
    templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit, AfterViewInit {
    toCopyright: number;
    ngOnInit() {
        this.toCopyright = new Date().getFullYear();
    }
    
    ngAfterViewInit() {
        $(document).ready(function () {
            $(".owl-carousel").owlCarousel({
                autoPlay: 3000, // Auto-scrolling with 3-second intervals
                stopOnHover: true, // Pause auto-scrolling when the user hovers over the carousel
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
