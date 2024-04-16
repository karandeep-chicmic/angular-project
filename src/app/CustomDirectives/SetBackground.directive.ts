// Directive to set bgColor and textcolor of the element
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bgColor]',
})
export class SetBackground implements OnInit {
  @Input('bgColor') changeBackColor: { backColor: string; textColor: string };

  constructor(private element: ElementRef, private render: Renderer2) {}

  // ngOnInit is used to set the background color and text color
  ngOnInit(): void {
    this.render.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.changeBackColor.backColor
    );
    this.render.setStyle(
      this.element.nativeElement,
      'color',
      this.changeBackColor.textColor
    );
  }
}
