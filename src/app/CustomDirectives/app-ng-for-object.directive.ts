// "For" Directive for traversing in an Object
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appAppNgForObject]',
})
export class AppNgForObjectDirective {
  constructor(
    private view: TemplateRef<any>,
    private template: ViewContainerRef
  ) {}

  @Input() set appAppNgForObjectOf(myObject: object) {
    this.template.clear();

    for (let i in myObject) {
      this.template.createEmbeddedView(this.view, {
        $implicit: i,
        val: myObject[i],
      });
    }
  }
}
