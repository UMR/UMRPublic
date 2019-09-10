import { Directive, forwardRef } from "@angular/core";
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs/Rx";
import { ChangePasswordService } from '../../jobs-opening/change-password/change-password.service';

@Directive({
    selector: "[asyncPasswordValidator][formControlName], [asyncPasswordValidator][ngModel]",
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => AsyncPasswordValidator), multi: true
        }
    ]
})

export class AsyncPasswordValidator implements Validator {

    constructor(private changePasswordService: ChangePasswordService) {
    }

    validate(c: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
        return this.validateUniquePasswordPromise(c.value);
    }

    validateUniqueEmailObservable(email: string) {
        return new Observable(observer => {
            if (email === "alreadyExistsEmail@gmail.com") {
                observer.next({ asyncInvalid: true });
            } else {
                observer.next(null);
            }
        });
    }

    //validateUniquePasswordPromise(password: string) {
    //    return new Promise(resolve => {
    //        setTimeout(() => {
    //            if (password === "umr123") {
    //                resolve(null);
    //            } else {                    
    //                resolve({
    //                    asyncInvalid: true
    //                });
    //            }
    //        }, 500);
    //    })
    //}
    validateUniquePasswordPromise(password: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.changePasswordService.isMatchPassword(password.trim())
                    .subscribe(res => {
                        if (password != '') {                            
                            if ((res as any).status == "200" && (res as any)._body == "") {
                                resolve(null);                                
                            }
                            else if ((res as any).status == "200" && (res as any)._body != "" && (res as any)._body.replace(/^"(.*)"$/, '$1') == "No") {                                
                                resolve({
                                    asyncInvalid: true
                                });
                            }
                        }
                    });
            }, 500);
        });
    }
}
