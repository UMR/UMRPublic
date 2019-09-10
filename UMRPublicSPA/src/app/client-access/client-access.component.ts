import { Component, OnInit } from '@angular/core';
import { resourceServerUrl } from '../common/constants/auth-keys';

@Component({
    templateUrl: 'client-access.component.html'
})

export class ClientAccessComponent implements OnInit {
    umrPortalsDomain: string;
    medcodepediaDomain: string;
    ngOnInit() {
        if (resourceServerUrl.includes('universalmedicalrecord.com')) {
            this.umrPortalsDomain = 'http://universalmedicalrecord.com/UMRPortalsSPA';
            this.medcodepediaDomain = 'http://universalmedicalrecord.com/Medcodepedia';
        }
        else //if (resourceServerUrl.includes('umrtest.com')) 
        {
            this.umrPortalsDomain = 'http://umrtest.com/UMRPortalsSPA';
            this.medcodepediaDomain = 'http://umrtest.com/Medcodepedia';
        }
    }
}
