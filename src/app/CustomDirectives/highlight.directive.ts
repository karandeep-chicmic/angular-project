// Directive for highlighting the element on mouse hover
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter');

    this.render.addClass(this.element.nativeElement, 'highlight');
  }

  @HostListener('mouseout') onMouseOut() {
    console.log('mouseout');
    this.render.removeClass(this.element.nativeElement, 'highlight');
  }
}
