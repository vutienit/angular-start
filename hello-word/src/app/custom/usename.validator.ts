import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator {
  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null{
    if((control.value as string).indexOf(' ') >= 0){
      return {cannotContainSpace : true}
    }
    return null;
  };
  static cannotContainDigits(control: AbstractControl) : ValidationErrors | null{
    var regex = /\d/g;
    if(regex.test(control.value as string)){
      return {cannotContainDigits : true}
    }
    return null;
  }
}