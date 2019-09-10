import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { EditorModule, SharedModule, TooltipModule, DataTableModule, PaginatorModule, ButtonModule, ConfirmDialogModule, ConfirmationService, Message } from 'primeng/primeng';
import { JobContent, ColumnOptions, GridColumns } from '../model/job-content';
import { JobContentService } from '../services/job-content.service';
declare var $: any;

@Component({
    templateUrl: 'job-dashboard.component.html',
    styleUrls: ["job-dashboard.component.css"],
    providers: [JobContentService, ConfirmationService]
})

export class JobDashboardComponent implements AfterViewInit, OnInit {

    jobContent: JobContent = new JobContent();
    jobContents = [];

    jobContentFormGroup: FormGroup;
    submitted = false;
    active = true;
    isUpdated: boolean;
    selectedJobContent: JobContent;
    totalRecords: number;
    rows: number;
    pageLinkSize: number;
    rowsPerPageOptions: number[];
    loading: boolean;
    jobGrowlMessage: Message[] = [];
    jobServiceSubscribe: any;

    constructor(private jobContentService: JobContentService, private fb: FormBuilder, private confirmationService: ConfirmationService) {
        this.jobContent.JobTitle = `Job Post On : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} `;
        this.jobContent.JobDescription = '';
        this.totalRecords = this.jobContents.length;
        this.rows = 10;
        this.pageLinkSize = 5;
        this.rowsPerPageOptions = [5, 10, 15, 20, 25, 30];
        this.isUpdated = false;
    }

    resetFields(): void {
        this.jobContent.JobDescription = '';
    }

    ngAfterViewInit(): void {
        $(document).ready(function () {
            $("body").removeClass("modal-open");
            $("div").removeClass("modal-backdrop fade in");
        });
    }

    ngOnInit(): void {
        this.loading = true;
        setTimeout(() => {
            this.getAllJobsByUserId();
            this.loading = false;
        }, 500);
        //this.jobContent = new JobContent();        
        this.createForm();
        this.jobContent.JobDescription = '';
    }

    createForm(): void {
        this.jobContentFormGroup = this.fb.group({
            'description': [this.jobContent.JobDescription,
            [ Validators.required]]
        });

        this.jobContentFormGroup.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // set validation messages now
    }

    onValueChanged(data?: any) {
        if (!this.jobContentFormGroup) { return; }
        const form = this.jobContentFormGroup;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'description': ''
    };

    validationMessages = {
        'description': {
            'required': 'Job content is required'
        }
    };

    onSubmit() {
        if (this.jobContentFormGroup.status === "VALID" && this.isUpdated === false) {
            this.jobContent.JobDescription = this.jobContentFormGroup.get('description').value;
            this.jobContent.JobTitle = `Job Post On : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} `;
            this.createJob();
            //this.jobContentFormGroup.reset();
            //this.getAllJobsByUserId();
            //this.isUpdated = false;
        }
        else if (this.jobContentFormGroup.status === "VALID" && this.isUpdated === true) {
            this.jobContent.JobDescription = this.jobContentFormGroup.get('description').value;
            this.updateJob();
            //this.jobContentFormGroup.reset();
            //this.getAllJobsByUserId();
            //this.isUpdated = false;
        }
    }

    resetForm(event) {       
        this.jobContentFormGroup.reset();
        this.jobContent = new JobContent();
        this.createForm();
        this.isUpdated = false;
    }

    editButtonClick(data) {
        (<FormControl>this.jobContentFormGroup.controls['description']).setValue(data.JobDescription);
        this.jobContent.JobContentId = data.JobContentId;
        this.jobContent.JobTitle = data.JobTitle;
        this.isUpdated = true;
    }

    deleteButtonClick(data) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this job?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.jobServiceSubscribe = this.jobContentService.deleteJobContent(data.JobContentId)
                    .subscribe(res => {
                        if ((res as any) == "200") {                            
                            this.jobGrowlMessage.push({ severity: 'success', summary: 'Confirmed', detail: 'Job has been deleted successfully' });
                            this.getAllJobsByUserId();
                            this.jobContentFormGroup.reset();
                            this.jobContent = new JobContent();
                            (<FormControl>this.jobContentFormGroup.controls['description']).setValue(' ');
                            this.isUpdated = false;
                        }
                        else {
                            this.jobGrowlMessage.push({ severity: 'error', summary: 'Failed', detail: 'Job delete failed' });
                        }
                    },
                    error => {
                        this.jobGrowlMessage.push({ severity: 'error', summary: 'Failed', detail: 'Job delete failed' });
                    });
            },
            reject: () => {

            }
        });
    }

    createJob() {
        this.jobContentService.postJobContent(this.jobContent)
            .subscribe(res => {
                if ((res as any) == "201") {
                    this.jobGrowlMessage.push({ severity: 'success', summary: 'Confirmed', detail: 'Job has been posted successfully' });
                    this.getAllJobsByUserId();
                    this.jobContentFormGroup.reset();
                    this.jobContent = new JobContent();
                    this.createForm();

                    //alert('Job has been posted successfully');
                }
                else {
                    this.jobGrowlMessage.push({ severity: 'error', summary: 'Failed', detail: 'Job post failed' });
                }
            },
            error => {
                this.jobGrowlMessage.push({ severity: 'error', summary: 'Failed', detail: 'Job post failed' });
            });
    }

    updateJob() {
        this.jobContentService.updateJobContent(this.jobContent)
            .subscribe(res => {
                if ((res as any) == "200") {
                    this.jobGrowlMessage.push({ severity: 'success', summary: 'Confirmed', detail: 'Job has been updated successfully' });
                    this.getAllJobsByUserId();
                    this.jobContentFormGroup.reset();
                    this.jobContent = new JobContent();
                    this.createForm();
                    this.isUpdated = false;
                    //alert('Job has been updated successfully');
                }
                else {
                    this.jobGrowlMessage.push({ severity: 'error', summary: 'Failed', detail: 'Job update failed' });
                }
            },
            error => {
                this.jobGrowlMessage.push({ severity: 'error', summary: 'Failed', detail: 'Job update failed' });
            });
    }
    
    getAllJobsByUserId() {
        this.jobContentService.getAllJobsByUserId()
            .subscribe(
            jobcontents => this.jobContents = jobcontents,
            error => {

            });
    }
}


