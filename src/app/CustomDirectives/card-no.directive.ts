//This is a directive for card number example: aadhar card, pan card
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';
interface cards {
  aadhar?: RegExp;
  pan?: string;
}
@Directive({
  selector: '[appCardNo]',
})
export class CardNoDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  // reg: cards = {
  //   aadhar: /^[1-9]{0,4}$/,
  //   pan: '^[A-Z]{0,5}[0-9]{0,4}[A-Z]{0,1}$',
  // };

  @HostListener('input', ['$event']) func(event: KeyboardEvent) {
    if (this.element.nativeElement.id === 'aadhar') {
      this.aadharCardFormat(event);
    } else if (this.element.nativeElement.id === 'pan') {
      this.panCardFormat(event);
    }
  }

  // This is the function to Format aadhar card number
  aadharCardFormat(event: KeyboardEvent) {
    const input = this.element.nativeElement.value;
    let chIbn = input.split('-').join('');
    chIbn = chIbn.replace(/\D/g, '');

    if (chIbn.length > 0) {
      chIbn = chIbn.match(new RegExp('.{1,4}', 'g')).join('-');
    }
    if (input.length >= 14) {
      this.element.nativeElement.value = chIbn.slice(0, 14);
    } else {
      this.element.nativeElement.value = chIbn;
    }
  }

  // This is the function to Format pan card number
  panCardFormat(event: KeyboardEvent) {
    var input = this.element.nativeElement.value;

    input = input.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    if (input.length >= 5) {
      var numbersSubstring = input.substring(5, 9).replace(/[^0-9]/g, '');
      var lastItem = input.substring(9);
      lastItem = lastItem.replace(/[^A-Z]/g, '');

      input = input.substring(0, 5) + numbersSubstring + lastItem;
    }

    input = input.replace(/^[^a-zA-Z]+/, '');
    this.element.nativeElement.value = input.slice(0, 10);
  }
}
