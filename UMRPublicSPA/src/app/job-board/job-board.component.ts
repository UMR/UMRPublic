import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobBoardService } from './job-board.service';

@Component({
  templateUrl: './job-board.component.html',
  providers: [JobBoardService]
})

export class JobBoardComponent implements OnInit, AfterViewInit {

  jobBoardContents = [];

  constructor(private router: Router, private jobBoardService: JobBoardService) { }

  ngOnInit(): void {
    //this.getAllJobBoards();
  }

  getAllJobBoards() {
    this.jobBoardService.getAllJobBoards()
      .subscribe(data => {
        this.jobBoardContents = data;
        console.log(this.jobBoardContents);
      },
        error => {
          console.log('failed to get job board contents');
        });
  }

  ngAfterViewInit() {

    this.getAllJobBoards();
    //setTimeout(() => {
    //  let jobContents = this.jobBoardcontents;
    //  for (let content of jobContents) {
    //    let len = content.JobDescription.length;
    //    let halfContent = content.JobDescription.substring(0, len / 2);
    //    let secondHalf = content.JobDescription.substring(len - len / 2, len);
    //    let jobContent = new JobContent();
    //    jobContent.HalfContent = halfContent;
    //    jobContent.SecondHalf = secondHalf;
    //    this.filterJobContents.push(jobContent);
    //  }

    //}, 1000);    
  }
}
