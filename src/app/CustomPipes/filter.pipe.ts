import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {
  transform(value: string[],) {
    
    
    return value.filter((item) => item.length >= 5);
  }
}
