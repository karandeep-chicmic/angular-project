//  Directive for a input consisting only string type and no other types exp(numbers, special characters)
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputOnlyString]',
})

export class InputOnlyStringDirective {

  // Regex for only string type
  regexStr = '^[a-zA-Z ]*$';
  constructor(private element: ElementRef) {}


  //  HostListener for keypress and paste event
  @HostListener('keypress', ['$event']) onInputChange(event: KeyboardEvent) {
    const inputValue: string = this.element.nativeElement.value;

    // if (!new RegExp(this.regexStr).test(inputValue)) {
    //   this.element.nativeElement.value = inputValue
    //     .replace(/[^a-zA-Z ]/g, '')
    //     .replace(/\s/g, '');
    // }
    console.log(inputValue);

    return new RegExp(this.regexStr).test(inputValue + event.key);
  }
  @HostListener('paste', ['$event']) blockPaste(event: ClipboardEvent) {
    this.validateFields(event);
  }

  //  Function for validate fields
  validateFields(event: ClipboardEvent) {
    event.preventDefault();

    const clipboardData = event.clipboardData;
    if (clipboardData) {
      const pastedText = clipboardData
        .getData('text/plain')
        .replace(/[^a-zA-Z ]/g, '');

      const selection = window.getSelection();
      if (selection) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(pastedText));
      }
    }
  }
}
