import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Table1Component } from '../table1/table1.component';

interface u {
  id: number;
  name: string;
  password: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css'],
})
export class Table2Component {
  @Input()
  delArr: u[] = [];

  @Output() reviveUser: EventEmitter<any> = new EventEmitter();

  temp: u = { id: 0, name: '', password: '', email: '', age: 0 };

  reviveVal(i: number) {
    this.temp = { ...this.delArr[i] };
    this.reviveUser.emit(this.temp);

    this.delArr.splice(i, 1);
  }
}
