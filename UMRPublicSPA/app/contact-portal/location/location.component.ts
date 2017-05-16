import {Component, OnInit} from '@angular/core';
declare var google: any;
@Component({
    selector: 'location',
    templateUrl: './location.component.html'
})

export class LocationComponent implements OnInit {
    ngOnInit() {
        var googleMapPosition = new google.maps.LatLng(41.275441, -73.875655);
        var mapProperties = {
            center: googleMapPosition,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProperties);

        var markerOption = {
            position: googleMapPosition,
            map: map,
            title: "Universal Medical Records Inc",
            clickable: true
        };
        new google.maps.Marker(markerOption);
    }
}