import { Component } from '@angular/core';
import { resourceServerUrl } from '../common/constants/auth-keys';
@Component({
    templateUrl: './products-services.component.html',
    styleUrls: ['./products-services.component.css']
})
export class ProductsServicesComponent{
  umiDomain: string;
  umrReqDomain: string;
  ngOnInit() {
    if (resourceServerUrl.includes('universalmedicalrecord.com')) {
      this.umiDomain = 'http://universalmedicalrecord.com/Universal%20Medical%20Informatics/index.html';
      this.umrReqDomain = 'http://universalmedicalrecord.com/UMR%20Recruitment%20Services/index.html';
    }
    else //if (resourceServerUrl.includes('umrtest.com')) 
    {
      this.umiDomain = 'http://umrtest.com/Universal%20Medical%20Informatics/index.html';
      this.umrReqDomain = 'http://umrtest.com/UMR%20Recruitment%20Services/index.html';
    }
  }
}
