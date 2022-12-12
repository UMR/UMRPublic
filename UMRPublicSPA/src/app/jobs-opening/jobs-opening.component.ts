import { Component, AfterViewInit, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { JobContentService } from './services/job-content.service';
import { JobContent } from './model/job-content';
import { AuthService } from '../common/auth.service';

@Component({
  templateUrl: 'jobs-opening.component.html',
  styleUrls: ['./jobs-opening.component.css'],
  providers: [LoginService, JobContentService]
})

export class JobOpeningComponent implements OnInit, AfterViewInit {
  public isLoading: boolean = true;
  public isCountyClearShow: boolean = false;
  public isPositionClearShow: boolean = false;
  public isDetailView: boolean = false;
  public isListView: boolean = true;
  @ViewChildren('countyCheckbox') public countyCheckbox: ElementRef<HTMLInputElement>[];
  @ViewChildren('positionCheckbox') public positionCheckbox: ElementRef<HTMLInputElement>[];



  constructor(private router: Router, private loginService: LoginService, private authService: AuthService,
    private jobContentService: JobContentService) { }

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
  isOpen: boolean = false;



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
    this.jobContentService.getAllJobs(this.selectedCounty, this.selectedPosition)
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
    //var selectedCounty = localStorage.getItem("selectedCounty");
    //var selectedPosition = localStorage.getItem("selectedPosition");
    var selectedPosition = this.authService.getSelectedPosition();
    var selectedCounty = this.authService.getSelectedCounty();
    this.selectedCounty = selectedCounty;
    this.selectedPosition = selectedPosition;
    this.getAllJobs();
    this.getAllCountyState();
    this.getAllPosition();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.selectedPosition != "") {
        this.isPositionClearShow = true;
      }
      this.positionCheckbox.forEach(check => {
        //console.log(check.nativeElement.value);
        //console.log(this.selectedPosition);
        if (this.selectedPosition.includes(check.nativeElement.value)) {
          check.nativeElement.checked = true;
        }
        else {
          check.nativeElement.checked = false;
        }
      })
    }, 1000);


    setTimeout(() => {
      if (this.selectedCounty != "") {
        this.isCountyClearShow = true;
      }
      //console.log(this.selectedCounty );
      this.countyCheckbox.forEach(check => {
        if (this.selectedCounty.includes(check.nativeElement.value)) {
          check.nativeElement.checked = true;
        }
        else {
          check.nativeElement.checked = false;
        }
      })
    }, 1000);
    
   
  }
  getAllPosition() {
    this.isLoading = true;
    this.jobContentService.getAllPosition()
      .subscribe(positions => {
        this.positions = positions;
        this.isLoading = false;
        //console.log(this.positions);
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
    this.getAllJobs();
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
    this.getAllJobs();
    //}
  }

  jobDetailClick(jobId) {
    //this.isDetailView = true;
    //this.isLoading = true;
    //this.jobContentService.getJobById(evt)
    //  .subscribe(
    //    data => {
    //      this.jobDetail = data;
    //      //console.log(this.jobDetail);
    //      this.isLoading = false;
    //    },
    //    error => {
    //      this.isLoading = false;
    //    });
    //localStorage.setItem("selectedCounty", this.selectedCounty);
    //localStorage.setItem("selectedPosition", this.selectedPosition);
    this.authService.setSelectedPosition(this.selectedPosition);
    this.authService.setSelectedCounty(this.selectedCounty);
    this.router.navigate(['/job-detail', { id: jobId }]);
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
    localStorage.setItem("selectedCounty", this.selectedCounty);
    this.getAllJobs();
  }
  positionOnClearClick() {
    this.positionCheckbox.forEach(check => {
      check.nativeElement.checked = false;
    });
    this.selectedPosition = "";
    this.isPositionClearShow = false;
    localStorage.setItem("selectedPosition", this.selectedPosition);
    this.getAllJobs();
  }
  sideberCloseClick() {
    this.isOpen = true;
    console.log("sideberCloseClick")
  }
  sideberOpenClick() {
    this.isOpen = false;
  }
}

