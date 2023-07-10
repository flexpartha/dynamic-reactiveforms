import { AbstractControl } from "@angular/forms";

export function isNumericOnly(control: AbstractControl){
    if(control.value === '' || control.value === null){
        return null;
    }
    let val = (control.value) ? control.value: window.event;
    if( /[^0-9]/.test(val) ) {
        return { isValidated: true };
    }
    return null;
}