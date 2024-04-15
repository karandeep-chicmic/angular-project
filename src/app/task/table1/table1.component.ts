import { Component, Input, OnInit } from '@angular/core';
interface u {
  id: number;
  name: string;
  password: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css'],
})
export class Table1Component implements OnInit {
  count: number = 0;

  @Input()
  user: u[];

  delArr: u[] = [];

  newUser: u[];

  flag: boolean = false;

  ngOnChanges() {
    this.count++;
  }

  ngOnInit(): void {
    this.user = [
      ...this.user.sort(function (a, b) {
        return a.name > b.name ? 1 : -1;
      }),
    ];
  }

  delUser(i: number) {
    const userFin = this.user.find((x) => x.id === i);
    const t = { ...userFin };
    console.log(t);
    this.delArr.push(t);

    this.user = [...this.user.filter((x) => x.id != i)];
    console.log(this.delArr);
  }

  reviveUser(data: u) {
    const temp = { ...data };

    this.user.push(temp);
    this.user = [
      ...this.user.sort(function (a, b) {
        return a.name > b.name ? 1 : -1;
      }),
    ];
  }

  search(ev: any) {
    console.log(ev);

    this.newUser = [
      ...this.user.filter(
        (el) =>
          el.name.includes(ev) ||
          el.email.includes(ev) ||
          String(el.age).includes(ev)
      ),
    ];
    if (this.flag == false) {
      this.flag = true;
    }
  }
}
