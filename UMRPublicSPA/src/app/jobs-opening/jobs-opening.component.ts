import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { JobContentService } from './services/job-content.service';
import { JobContent } from './model/job-content';

@Component({
  templateUrl: 'jobs-opening.component.html',
  styleUrls: ['./jobs-opening.component.css'],
  providers: [LoginService, JobContentService]
})

export class JobOpeningComponent implements AfterViewInit {
  public isLoading: boolean = true;

  constructor(private router: Router, private loginService: LoginService, private jobContentService: JobContentService) { }

  loginId: string;
  password: string;
  jobContents = [];
  filterJobContents = [];
  positions: any = [];
  countyState: any = [];
  selectedCities: string = "";
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
          this.isLoading = false;
          //console.log(this.jobContents);
        },
        error => {
          this.isLoading = false;
        });
  }

  ngAfterViewInit() {

    this.getAllJobs();
    setTimeout(() => {
      let jobContents = this.jobContents;
      for (let content of jobContents) {
        let len = content.JobDescription.length;
        let halfContent = content.JobDescription.substring(0, len / 2);
        let secondHalf = content.JobDescription.substring(len - len / 2, len);
        let jobContent = new JobContent();
        jobContent.HalfContent = halfContent;
        jobContent.SecondHalf = secondHalf;
        this.filterJobContents.push(jobContent);
      }

    }, 1000);
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
  getCountyState(evt) {
    console.log(evt);
  }

  onCheckPosition(position) {
    console.log(position);
  }
  jobDetailClick(evt) {
    console.log(evt);
  }
}
