import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitaliseInitials',
})
export class CapitaliseInitialsPipe implements PipeTransform {
  transform(value: string, joiner: string = ' ') {
    let ans = value
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(joiner);
    return ans;
  }
}
