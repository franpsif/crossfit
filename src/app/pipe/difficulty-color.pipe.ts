import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficultyColor'
})
export class DifficultyColorPipe implements PipeTransform {

  transform(value: any, element): any {
    if(value < 4){
      element.style.setProperty('color', 'green');
    } else if (value < 7){
      element.style.setProperty('color', 'orange');
    } else {
      element.style.setProperty('color', 'red');
    }

    return value;
  }

}
