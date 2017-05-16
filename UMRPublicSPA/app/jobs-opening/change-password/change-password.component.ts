import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SharedModule, TooltipModule, ButtonModule, ConfirmDialogModule, ConfirmationService, Message } from 'primeng/primeng';
import { ChangePasswordService } from './change-password.service';
declare var $: any;

@Component({
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css'],
    providers: [ChangePasswordService, ConfirmationService]
})

export class ChangePasswordComponent implements OnInit {

    confirmPassword: string;
    changePasswordFormGroup: FormGroup;
    changePasswordGrowlMessage: Message[] = [];

    constructor(private changePasswordService: ChangePasswordService, private fb: FormBuilder, private confirmationService: ConfirmationService) {

    }

    ngOnInit(): void {
        this.createForm();
    }

    createForm(): void {
        this.changePasswordFormGroup = this.fb.group({
            'oldPassword': ['', [Validators.required]],
            'newPassword': ['', [Validators.required]],
            'confirmPassword': ['', [Validators.required]]
        });

        this.changePasswordFormGroup.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // set validation messages now
    }

    onValueChanged(data?: any): void {
        if (!this.changePasswordFormGroup) { return; }
        const form = this.changePasswordFormGroup;

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
        'oldPassword': '',
        'newPassword': '',
        'confirmPassword': ''
    };

    validationMessages = {
        'oldPassword': {
            'required': 'Old password is required'
        },
        'newPassword': {
            'required': 'New password is required'
        },
        'confirmPassword': {
            'required': 'Confirm password is required'            
        }
    };

    onSubmit() {
        if (this.changePasswordFormGroup.status === "VALID") {
            this.confirmPassword = this.changePasswordFormGroup.get('confirmPassword').value;
            console.log(this.confirmPassword);
            this.updatePassword();
        }
    }

    updatePassword() {
        this.changePasswordService.updatePassword(this.confirmPassword)
            .subscribe(res => {
                console.log(res);
                if ((res as any) == "200") {
                    this.changePasswordGrowlMessage.push({ severity: 'success', summary: 'Password has been updated successfully', detail: 'Password has been updated successfully' });
                    this.changePasswordFormGroup.reset();
                    this.confirmPassword = null;
                    this.createForm();
                }
                else {
                    this.changePasswordGrowlMessage.push({ severity: 'error', summary: 'Password update failed', detail: '' });
                }
            },
            error => {
                console.log(error);
                this.changePasswordGrowlMessage.push({ severity: 'error', summary: 'Password update failed', detail: '' });
            });
    }
}