// Directive for change of style of a button on mouse hover
import {
  Directive,
  ElementRef,
  HostBinding,
  Renderer2,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[buttonHover]',
})
export class ButtonHoverSkipTestsDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = '#282828';
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.color') textColor: string = 'white';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'white';
    this.textColor = 'black';
    this.border = '1px solid black';
  }
  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'black';
    this.textColor = 'white';
    this.border = 'none';
  }
}
