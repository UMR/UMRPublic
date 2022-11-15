import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { JobContentService } from './services/job-content.service';
import { JobContent } from './model/job-content';

@Component({
  templateUrl: 'jobs-opening.component.html',
  providers: [LoginService, JobContentService]
})

export class JobOpeningComponent implements AfterViewInit {
  public isLoading: boolean = true;

  constructor(private router: Router, private loginService: LoginService, private jobContentService: JobContentService) { }

  loginId: string;
  password: string;
  jobContents = [];
  filterJobContents = [];
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
    //let jobs = this.jobContents;
    //for (var item of jobs) {

    //}
  }
}
