import { Component } from '@angular/core';

interface u {
  id: number;
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
      id: 0,
      name: 'karan',
      password: '123',
      email: 'kd@23.com',
      age: 22,
    },
    {
      id: 1,
      name: 'john',
      password: '123',
      email: 'wick@23.com',
      age: 42,
    },
    {
      id: 2,
      name: 'emma',
      password: 'emmapass',
      email: 'emma@example.com',
      age: 40,
    },
    {
      id: 3,
      name: 'frank',
      password: 'frank123',
      email: 'frank@example.com',
      age: 32,
    },
    {
      id: 4,
      name: 'grace',
      password: 'gracepass',
      email: 'grace@example.com',
      age: 22,
    },
    {
      id: 5,
      name: 'hannah',
      password: 'hannah123',
      email: 'hannah@example.com',
      age: 27,
    },
    {
      id: 6,
      name: 'ian',
      password: 'ianpass',
      email: 'ian@example.com',
      age: 38,
    },
    {
      id: 7,
      name: 'jane',
      password: 'janepassword',
      email: 'jane@example.com',
      age: 45,
    },
  ];
  count: number = 8;
  ngOnInit(): void {
    this.user = [
      ...this.user.sort(function (a, b) {
        return a.name > b.name ? 1 : -1;
      }),
    ];
  }
  objUser: u = { id: 0, name: '', password: '', email: '', age: 0 };
  valid: boolean = true;

  addUserBtn() {
    if (
      this.objUser.name === '' ||
      this.objUser.password === '' ||
      this.objUser.email === ''
    ) {
      this.valid = false;
      return;
    }
    this.valid = true;
    const obj: u = { ...this.objUser };
    obj.id = this.count;
    this.user.push(obj);
    this.count++;

    this.objUser.name = '';
    this.objUser.password = '';
    this.objUser.email = '';
    this.objUser.age = 0;
    console.log(this.user);

    this.user = [
      ...this.user.sort(function (a, b) {
        return a.name > b.name ? 1 : -1;
      }),
    ];
  }
}
