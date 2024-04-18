// "For" Directive for traversing in an array basically it is a directive like *ngFor
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appFor]',
})
// export class ForDirective<T> {
//   constructor(
//     private view: TemplateRef<any>,
//     private template: ViewContainerRef
//   ) {}

//   @Input() set appFor(collection: any[]) {
//     this.template.clear();
//     collection.forEach((item: any, idx: number) => {
//       this.template.createEmbeddedView(this.view, {
//         $implicit: item,
//         idx,
//       });
//     });
//   }
// }
export class ForDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appForOf(collection: any[]) {
    this.viewContainer.clear();
    collection.forEach((item, idx) => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: item,
        idx,
      });
    });
  }
}
