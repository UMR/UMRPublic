import { Component, AfterViewInit, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { JobContentService } from './services/job-content.service';
import { JobContent } from './model/job-content';

@Component({
  templateUrl: 'jobs-opening.component.html',
  styleUrls: ['./jobs-opening.component.css'],
  providers: [LoginService, JobContentService]
})

export class JobOpeningComponent implements OnInit {
  public isLoading: boolean = true;
  public isCountyClearShow: boolean = false;
  public isPositionClearShow: boolean = false;
  public isDetailView: boolean = false;
  public isListView: boolean = true;
  @ViewChildren('countyCheckbox') public countyCheckbox: ElementRef<HTMLInputElement>[];
  @ViewChildren('positionCheckbox') public positionCheckbox: ElementRef<HTMLInputElement>[];
  


  constructor(private router: Router, private loginService: LoginService, private jobContentService: JobContentService) { }

  loginId: string;
  password: string;
  jobContents = [];
  public jobDetail = [];
  filterJobContents = [];
  positions: any = [];
  countyState: any = [];
  selectedCities: string = "";
  filterJobList: any = [];
  selectedCounty: string = "";
  selectedPosition: string = "";
  clickOnCountyCount: number = 0;
  clickOnPositionCount: number = 0;



  goToJobBoard() {
    if (this.loginId == "" || this.password == "") {
      alert("The Login ID or Password can not be empty");
      return false;
    }
    this.loginService.login(this.loginId, this.password)
      .subscribe(() => {
        this.router.navigate([`/job-dashboard`]);
      }, () => { });
  }

  getAllJobs() {
    this.isLoading = true;
    this.jobContentService.getAllJobs()
      .subscribe(
        jobcontents => {
          this.jobContents = jobcontents;
          this.filterJobList = this.jobContents;
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
        });
  }

  ngOnInit() {

    this.getAllJobs();
    this.getAllCountyState();
    this.getAllPosition();
  }
  getAllPosition() {
    this.isLoading = true;
    this.jobContentService.getAllPosition()
      .subscribe(positions => {
        this.positions = positions;
        this.isLoading = false;
        //console.log(this.jobContents);
      },
        error => {
          this.isLoading = false;
        });
  }
  getAllCountyState() {
    this.isLoading = true;
    this.jobContentService.getAllCountyState()
      .subscribe(county => {
        this.countyState = county;
        this.isLoading = false;
        //console.log(this.jobContents);
      },
        error => {
          this.isLoading = false;
        });
  }
  getCountyState(event) {
    this.isDetailView = false;
    //this.clickOnCountyCount += 1;
    //if (this.clickOnCountyCount % 2 != 0) {
    if (this.selectedCounty == "") {
      this.selectedCounty = event.County;
    }
    else {
      if (this.selectedCounty.includes(event.County + ",")) {
        this.selectedCounty = this.selectedCounty.replace(event.County + ",", "");
      }
      else if (this.selectedCounty.includes("," + event.County)) {
        this.selectedCounty = this.selectedCounty.replace("," + event.County, "");
      }
      else if (this.selectedCounty.includes(event.County)) {
        this.selectedCounty = this.selectedCounty.replace(event.County, "");
      }
      else {
        this.selectedCounty += "," + event.County;
      }
    }
    if (this.selectedCounty != "") {
      this.isCountyClearShow = true;
    }
    else {
      this.isCountyClearShow = false;
    }

    this.isLoading = true;
    this.jobContentService.getAllJobs(this.selectedCounty, this.selectedPosition)
      .subscribe(
        jobcontents => {
          this.jobContents = jobcontents;
          this.isLoading = false;
        },
        error => {
          this.jobContents = [];
          this.isLoading = false;
        });
    //}
  }

  onCheckPosition(event) {
    this.isDetailView = false;
    //this.clickOnPositionCount += 1;
    //if (this.clickOnPositionCount % 2 != 0) {
    if (this.selectedPosition == "") {
      this.selectedPosition = event.PositionID.toString();
      //console.log(this.selectedPosition);
    }
    else {
      if (this.selectedPosition.includes(event.PositionID + ",")) {
        this.selectedPosition = this.selectedPosition.replace(event.PositionID + ",", "");
      }
      else if (this.selectedPosition.includes("," + event.PositionID)) {
        this.selectedPosition = this.selectedPosition.replace("," + event.PositionID, "");
      }
      else if (this.selectedPosition.includes(event.PositionID)) {
        this.selectedPosition = this.selectedPosition.replace(event.PositionID, "");
      }
      else {
        this.selectedPosition += "," + event.PositionID;
      }
    }
    if (this.selectedPosition != "") {
      this.isPositionClearShow = true;
    }
    else {
      this.isPositionClearShow = false;
    }
    this.isLoading = true;
    this.jobContentService.getAllJobs(this.selectedCounty, this.selectedPosition)
      .subscribe(
        jobcontents => {
          this.jobContents = jobcontents;
          this.isLoading = false;
          //this.clickOnPositionCount += 1;
        },
        error => {
          this.jobContents = [];
          this.isLoading = false;
        });
    //}
  }

  jobDetailClick(evt) {
    this.isDetailView = true;
    this.isLoading = true;
    this.jobContentService.getJobById(evt)
      .subscribe(
        data => {
          this.jobDetail = data;
          //console.log(this.jobDetail);
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
        });
    //this.router.navigate(['/job-detail', { id: evt }]);
    //console.log(evt);
  }
  listViewClick() {
    this.isListView = true;
  }
  gridViewClick() {
    this.isListView = false;
  }

  htmlTagRemove(text) {
    var removeHtml = text.replace(/<\/?[^>]+(>|$)/g, "");
    return removeHtml.replaceAll("&nbsp;", " ");
  }
  back() {
    this.isDetailView = false;
  }
  countyOnClearClick() {
    this.countyCheckbox.forEach(check => {
      check.nativeElement.checked = false;
    })
    this.selectedCounty = "";
    this.isCountyClearShow = false;
    this.isLoading = true;
    this.jobContentService.getAllJobs(this.selectedCounty, this.selectedPosition)
      .subscribe(
        jobcontents => {
          this.jobContents = jobcontents;
          this.isLoading = false;
        },
        error => {
          this.jobContents = [];
          this.isLoading = false;
        });
  }
  positionOnClearClick() {
    this.positionCheckbox.forEach(check => {
      check.nativeElement.checked = false;
    })
    this.selectedPosition = "";
    this.isPositionClearShow = false;
    this.isLoading = true;
    this.jobContentService.getAllJobs(this.selectedCounty, this.selectedPosition)
      .subscribe(
        jobcontents => {
          this.jobContents = jobcontents;
          this.isLoading = false;
        },
        error => {
          this.jobContents = [];
          this.isLoading = false;
        });
  }
}

