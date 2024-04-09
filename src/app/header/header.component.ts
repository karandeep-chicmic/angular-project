import { Component } from '@angular/core';
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
}
