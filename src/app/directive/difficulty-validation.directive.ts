import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appDifficultyValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: DifficultyValidationDirective, multi: true}]
})
export class DifficultyValidationDirective implements Validator {
  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} {
    const value = control.value;
    if (value >= 1 && value <= 10) {
        return null;
      } else {
        return {'not valid difficulty': {value}};
      }
  }
}
