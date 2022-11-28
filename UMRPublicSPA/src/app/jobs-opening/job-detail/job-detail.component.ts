import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobContentService } from '../services/job-content.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
  providers: [JobContentService]
})
export class JobDetailComponent implements OnInit {
  public isLoading: boolean = true;
  public jobContents = [];
  public isDetailView: boolean = false;
  constructor(private route: ActivatedRoute, private jobContentService: JobContentService) { }

  ngOnInit() {
    const jobId = this.route.snapshot.paramMap.get('id');
    this.getJobById(jobId)
  }

  getJobById(jobId: string) {
    this.isLoading = true;
    this.jobContentService.getJobById(jobId)
      .subscribe(
        jobcontents => {
          this.jobContents = jobcontents;
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
        });
  }

}
