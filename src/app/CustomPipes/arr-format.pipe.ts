import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrFormat',
})
export class ArrFormatPipe implements PipeTransform {
  transform(num: number) {
    if (num === 0) {
      return {
        value: 'In the stock',
        style: 'green',
      };
    } else if (num === 1) {
      return {
        value: 'Out of Stock',
        style: 'red',
      };
    } else {
      return {
        value: 'Pending ',
        style: 'blue',
      };
    }
  }
}
