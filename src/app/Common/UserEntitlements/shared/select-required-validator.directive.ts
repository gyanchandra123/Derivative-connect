import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';



@Directive({
    selector: '[appSelectValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: SelectRequiredValidatorDirective,
        multi: true
    }]
})
export class SelectRequiredValidatorDirective implements Validator {

    @Input('appSelectValidator') defaultSelected: string;

    validate(formControl: AbstractControl): { [key: string]: any } | null {

        return formControl.value === this.defaultSelected ? { 'defaultSelected': true } : null;

    }

}