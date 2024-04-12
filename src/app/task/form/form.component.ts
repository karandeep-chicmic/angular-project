import { Component } from '@angular/core';

interface u {
  name: string;
  password: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  user: u[] = [
    {
      name: 'karan',
      password: '123',
      email: 'kd@23.com',
      age: 22,
    },
    {
      name: 'john',
      password: '123',
      email: 'wick@23.com',
      age: 42,
    },
  ];
  objUser: u = { name: '', password: '', email: '', age: 0 };

  addUserBtn() {
    const obj: u = { ...this.objUser };

    this.user.push(obj);

    this.objUser.name = '';
    this.objUser.password = '';
    this.objUser.email = '';
    this.objUser.age = 0;
  }
}
