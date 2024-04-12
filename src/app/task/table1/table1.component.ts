import { Component, Input } from '@angular/core';
interface u {
  name: string;
  password: string;
  email: string;
  age: number;
}

interface tes {
  status: string;
}

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css'],
})
export class Table1Component {
  @Input()
  user: u[];

  delArr: u[] = [];

  delUser(i: number) {
    const t = { ...this.user[i] };
    console.log(t);
    this.delArr.push(t);

    this.user.splice(i, 1);
    console.log(this.delArr);
  }

  reviveUser(data: u) {
    const t = { ...data };
    this.user.push(t);
  }
}
