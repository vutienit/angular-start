import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomFormValidators {
    static cannotContainSpecialCharacter(control: AbstractControl): ValidationErrors | null {
        const regex = /^[A-Za-z0-9 ]+$/;

        if (!regex.test(control.value)) {
            return {
                cannotContainSpecialCharacter: true
            }
        }

        return null;
    }

    static mustContainAtLeastOneUpperCaseLetter(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).toLowerCase() === control.value) {
            return {
                mustContainAtLeastOneUpperCaseLetter: true
            }
        }

        return null;
    }

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return {
                cannotContainSpace: true
            }
        }

        return null;
    }

    static cannotContainDigit(control: AbstractControl): ValidationErrors | null {
        if (/\d/.test(control.value)) {
            return {
                cannotContainDigit: true
            }
        }

        return null;
    }
}