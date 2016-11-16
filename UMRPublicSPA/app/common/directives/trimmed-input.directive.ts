import { Directive, HostBinding, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
    selector: '[ngModel][trimmed]',
    providers: [NgModel]
})
export class TrimmedInput {
    constructor(private model: NgModel) { }
    //@HostBinding() value: string;
    //@HostListener("ngModelChange", ["$event"])
    @HostListener("change", ["$event.target.value"])
    onInputChange(value) {
        let trimmedValue = value.replace(/\s+/g, ' ').trim();
        this.model.viewToModelUpdate(trimmedValue);
        this.model.valueAccessor.writeValue(trimmedValue);
    }
}