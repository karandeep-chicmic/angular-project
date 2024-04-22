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

interface dat {
  name: string;
  type: string;
  status: number;
  stock?: number;
}
@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css'],
  providers: [TestingService],
})
export class TesterComponent {
  names: string[] = [
    'alpha rest make',
    'beta rash cry',
    'gamma hilt hamlet',
    'wave moron leslie',
  ];
  data: dat[] = [
    {
      name: 'converse',
      type: 'shoes',
      status: 1,
    },
    {
      name: 'phone',
      type: 'electronics',
      status: 0,
    },
    {
      name: 'socks',
      type: 'clothes',
      status: 2,
    },
    {
      name: 'chair',
      type: 'furniture  ',
      status: 1,
    },
  ];

  myObject: testObj = {
    a: 'tester',
    b: 100,
    c: true,
    address: {
      city: 'pune',
      state: 'maharashtra',
    },
  };

  constructor(private subService: TestingService) {}

  // function to check if a value is a object or not
  funcObj(val: any) {
    if (typeof val === 'object') {
      return false;
    }
    return true;
  }

  // using service to subscribe to an observable
  subscribe(str) {
    this.subService.subscribe(str);
  }
}
