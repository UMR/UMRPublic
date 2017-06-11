import { Component, OnInit} from '@angular/core';
import { Response } from '@angular/http';
import { ReactiveFormsModule, FormGroup, FormBuilder, ValidatorFn, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SharedModule, TooltipModule, ButtonModule, ConfirmDialogModule, ConfirmationService, Message, Tooltip } from 'primeng/primeng';
import { ChangePasswordService } from './change-password.service';
import { forbiddenNameValidator } from '../../common/directives/single-equal-validator';
import { AsyncPasswordValidator } from '../../common/directives/password.async.validator';
declare var $: any;

@Component({
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css'],    
    providers: [ChangePasswordService, ConfirmationService]    
})

export class ChangePasswordComponent implements OnInit {

    confirmPassword: string;
    oldPassword: string;
    userInformation: UserInformation;
    changePasswordFormGroup: FormGroup;
    changePasswordGrowlMessage: Message[] = [];    

    constructor(private changePasswordService: ChangePasswordService, private fb: FormBuilder, private confirmationService: ConfirmationService) {
        this.userInformation = new UserInformation();
    }

    ngOnInit(): void {
        this.createForm();        
        //'oldPassword': ['', Validators.compose([Validators.required, this.isMatchPasswordAsyn.bind(this)])],
    }
    
    createForm(): void {
        this.changePasswordFormGroup = this.fb.group({
            'oldPassword': ['', Validators.compose([Validators.required])],
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
            'required': 'Old password is requred',
            'asyncInvalid': 'Password is not correct'
        },
        'newPassword': {
            'required': 'New password is required',
            'validateEqual': 'Confirm password does not match'
        },
        'confirmPassword': {
            'required': 'Confirm password is required',
            'validateEqual': 'New password does not match'
        }
    };

    onSubmit() {
        if (this.changePasswordFormGroup.status === "VALID") {
            this.userInformation.oldPassword = this.changePasswordFormGroup.get('oldPassword').value.trim();
            this.userInformation.newPassword = this.changePasswordFormGroup.get('newPassword').value.trim();
            console.log(this.userInformation.newPassword);
            this.updatePassword();
        }
    }

    updatePassword() {
        this.changePasswordService.updatePassword(this.userInformation)
            .subscribe(res => {
                console.log(res);
                if ((res as any).status == "200" && (res as any)._body == "") {
                    this.changePasswordGrowlMessage.push({ severity: 'success', summary: 'Confirmed', detail: 'Password has been updated successfully' });
                    this.changePasswordFormGroup.reset();
                    this.userInformation = null;
                    this.createForm();
                }
                else if ((res as any)._body != '') {
                    console.log((res as any)._body);
                    this.changePasswordGrowlMessage.push({ severity: 'info', summary:'Information' , detail: (res as any)._body.replace(/^"(.*)"$/, '$1') });
                }
                else {
                    this.changePasswordGrowlMessage.push({ severity: 'error', summary: 'Failed', detail: (res as any)._body });
                }
            },
            error => {
                console.log(error);
                this.changePasswordGrowlMessage.push({ severity: 'error', summary: 'Failed', detail: 'Password update failed' });
            });
    }    

    isMatchPasswordAsyn(control: AbstractControl): Promise<{ [key: string]: any }> {
        return new Promise(resolve => {
            setTimeout(() => {
                this.changePasswordService.isMatchPassword(control.value.trim())
                    .subscribe(res => {
                        if (control.value.trim() != '') {
                            console.log(control.value.trim());
                            console.log(res);
                            if ((res as any).status == "200" && (res as any)._body== "") {
                                resolve({ taken: true });                                
                                console.log('Taken: ' + res);                                
                            }
                            else if ((res as any).status == "200" && (res as any)._body != "" && (res as any)._body.replace(/^"(.*)"$/, '$1') == "No") {                                
                                resolve(null);  
                                console.log('Null: ' + res);
                            }
                        }
                    });
            }, 3000);
        });
    }    
}

export class UserInformation {
    oldPassword: string;
    newPassword: string;
}

