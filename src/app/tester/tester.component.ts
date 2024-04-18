//  Tester Component for Testing Purposes
import { Component } from '@angular/core';
import { TestingService } from '../Services/testing.service';

interface Address {
  city: string;
  state: string;
}
interface testObj {
  a: string;
  b: number;
  c: boolean;
  address: Address;
}

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css'],
})
export class TesterComponent {
  names: string[] = ['alpha', 'beta', 'gamma', 'wave'];

  myObject: testObj = {
    a: 'tester',
    b: 100,
    c: true,
    address: {
      city: 'pune',
      state: 'maharashtra',
    },
  };

  // function to check if a value is a object or not
  funcObj(val: any) {
    if (typeof val === 'object') {
      return false;
    }
    return true;
  }

  // using service to subscribe to an observable
  subscribe(str: string) {
    let sub = new TestingService();
    sub.subscribe(str);
  }
}
