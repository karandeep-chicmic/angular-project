import { Component ,ViewChild,ElementRef} from '@angular/core';
import { TestingService } from '../Services/testing.service';
interface ButtonItem {
  name: string;
  ref: string;
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  btns: ButtonItem[] = [
    { name: 'Home', ref: '/Home' },
    { name: 'About', ref: '/About' },
    { name: 'Portfolio', ref: '/Portfolio' },
    { name: 'Contact', ref: '/Contact' },
  ];

  @ViewChild('btnEle', {static: false}) buttonElement: ElementRef;
  subscribe(){
    let sub = new TestingService();
    sub.subscribe(this.buttonElement.nativeElement.innerText);
  }
}
