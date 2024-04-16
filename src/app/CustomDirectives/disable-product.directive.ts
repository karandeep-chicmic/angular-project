// Directive for disabling product based on a boolean value
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disableProduct]',
})
export class DisableProductDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @Input() set disableProduct(disable: Boolean) {
    if (disable) {
      this.render.addClass(this.element.nativeElement, 'disabledProd');
    }
  }
}
