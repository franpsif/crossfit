import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundNumber'
})
export class RoundNumberPipe implements PipeTransform {

  transform(value: number): number {
    return value === 0 ? 0 : Math.round(value * 100) / 100;
  }

}
