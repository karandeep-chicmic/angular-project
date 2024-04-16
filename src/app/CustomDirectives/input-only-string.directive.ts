//  Directive for a input consisting only string type and no other types exp(numbers, special characters) 
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputOnlyString]',
})
export class InputOnlyStringDirective {
  regexStr = '^[a-zA-Z ]+$';
  constructor(private element: ElementRef, private render: Renderer2) {}

  @HostListener('keypress', ['$event']) onInputChange(event: any) {
    return new RegExp(this.regexStr).test(event.key);
  }
  @HostListener('paste', ['$event']) blockPaste(event: ClipboardEvent) {
    this.validateFields(event);
  }
  validateFields(event: ClipboardEvent) {
    event.preventDefault();

    const clipboardData = event.clipboardData;
    if (clipboardData) {
      const pastedText = clipboardData
        .getData('text/plain')
        .replace(/[^a-zA-Z]/g, '');

      const selection = window.getSelection();
      if (selection) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(pastedText));
      }
    }
  }
}
