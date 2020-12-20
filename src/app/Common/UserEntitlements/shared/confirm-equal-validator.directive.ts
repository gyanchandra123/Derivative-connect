import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]

})
export class ConfirmEqualValidatorDirective implements Validator {

    @Input('appConfirmEqualValidator') passwordControl: string;

    validate(confirmControl: AbstractControl): { [key: string]: any } | null {

        const passwordformControl = confirmControl.parent.get(this.passwordControl);

        if (confirmControl && confirmControl.value !== passwordformControl.value) {
            return { 'notEqual': true };
        } 
            return null;
      


    }

}