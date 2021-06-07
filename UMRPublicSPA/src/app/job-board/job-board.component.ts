import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobContentService } from '../jobs-opening/services/job-content.service';
import { JobBoard } from './job-board.model';
import { JobBoardService } from './job-board.service';

@Component({
  templateUrl: './job-board.component.html',
  providers: [JobBoardService]
})

export class JobBoardComponent implements OnInit {

  jobBoardContents = [];  

  constructor(private router: Router, private jobBoardService: JobBoardService) { }

  ngOnInit(): void {
    this.getAllJobBoards();
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

}
