import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryName'
})
export class CategoryNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 1) {
      return 'Cardio';
    } else if (value === 2) {
      return 'Machines';
    } else if (value === 3) {
      return 'Body';
    }

    return 'Without category';
  }

}
