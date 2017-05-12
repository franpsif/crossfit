import { RoutineService } from './../service/routine.service';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appRoutineNameValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: RoutineNameValidationDirective, multi: true}]
})
export class RoutineNameValidationDirective implements Validator {

  constructor(private routineService: RoutineService) { }

  validate(control: AbstractControl): {[key: string]: any} {
    const value = control.value;
    let nameUsed = false;

    this.routineService.getRoutineList().forEach(
      (routine) => {
        if (routine.name === value) {
          nameUsed = true;
        }
      }
    );

    if (nameUsed) {
        return {'not valid name': {value}};
      } else {
        return null;
      }
  }

}
