import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateDiscount',
})
export class CalculateDiscountPipe implements PipeTransform {
  transform(price: number, discount: number): unknown {
    return Math.round((1 - discount / price) * 100);
  }
}
