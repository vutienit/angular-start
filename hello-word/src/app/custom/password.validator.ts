import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
  static cannotContainLetter(control: AbstractControl) : ValidationErrors | null{
    if((control.value as string).indexOf('~') >= 0){
      return {cannotContainLetter : true}
    }
    return null;
  };
  static checkOldPassword(control: AbstractControl) : ValidationErrors | null{
    if(control.value as string != null && control.value as string != '' && control.value as string != 'vietnam'){
      return {checkOldPassword : true}
    }
    return null;
  };
  static cannotContainSpecialCharacters(control: AbstractControl) : ValidationErrors | null{
    var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if(control.value as string != null && control.value as string != '' && regex.test(control.value as string)){
      return {cannotContainSpecialCharacters : true}
    }
    return null;
  };
  static notcontainUppercaseLetter(control: AbstractControl) : ValidationErrors | null{
    if(control.value as string != null && control.value as string != '' && !/[A-Z]/.test(control.value as string)){
      return {notcontainUppercaseLetter : true}
    }
    return null;
  };
}