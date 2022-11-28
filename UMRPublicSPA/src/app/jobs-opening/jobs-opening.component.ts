import { Component, AfterViewInit, OnInit } from '@angular/core';
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

  constructor(private router: Router, private loginService: LoginService, private jobContentService: JobContentService) { }

  loginId: string;
  password: string;
  jobContents = [];
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
    //let jobContents = this.jobContents;
    //for (let content of jobContents) {
    //  let len = content.JobDescription.length;
    //  let halfContent = content.JobDescription.substring(0, len / 2);
    //  let secondHalf = content.JobDescription.substring(len - len / 2, len);
    //  let jobContent = new JobContent();
    //  jobContent.HalfContent = halfContent;
    //  jobContent.SecondHalf = secondHalf;
    //  this.filterJobContents.push(jobContent);
    //}
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
    this.clickOnCountyCount += 1;
    if (this.clickOnCountyCount % 2 != 0) {
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
  }

  onCheckPosition(event) {
    this.clickOnPositionCount += 1;
    if (this.clickOnPositionCount % 2 != 0) {
      if (this.selectedPosition == "") {
        this.selectedPosition = event.PositionID.toString();
        console.log(this.selectedPosition);
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
      this.jobContentService.getAllJobs(this.selectedCounty, this.selectedPosition)
        .subscribe(
          jobcontents => {
            this.jobContents = jobcontents;
            this.filterJobList = this.jobContents;
            this.isLoading = false;
            this.clickOnPositionCount += 1;
          },
          error => {
            this.isLoading = false;
          });
    }
  }

  jobDetailClick(evt) {
    this.router.navigate(['/job-detail', { id: evt }]);
    console.log(evt);
  }

  htmlTagRemove(text) {
    var removeHtml = text.replace(/<\/?[^>]+(>|$)/g, "");
    return removeHtml.replaceAll("&nbsp;", " ");
  }
}
