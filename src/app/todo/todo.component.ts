import { Component } from '@angular/core';

interface task {
  name: string;
  status: any;
  description: string;
}
interface flg {
  val: boolean;
  idx: number;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  flag: flg = {
    val: false,
    idx: -1,
  };
  task2: task[] = [];
  tasks: task[] = [
    {
      name: 'movie',
      status: true,
      description: 'watching a movie',
    },
    {
      name: 'Task 2',
      status: false,
      description: 'Prepare presentation slides',
    },
  ];

  newTask: task = { name: '', status: false, description: '' };
  addTaskFunc() {
    /*     if (this.newTask.status === 'false') {
      this.newTask.status = false;
    } else if (this.newTask.status === 'true') {
      this.newTask.status = true;
    } */
    this.newTask.status = this.newTask.status == 'false' ? false : true;

    if (this.flag.val === false) {
      this.tasks.push(this.newTask);

      this.newTask = { name: '', status: false, description: '' };
    } else {
      this.tasks[this.flag.idx] = this.newTask;
      this.flag = {
        val: false,
        idx: -1,
      };
      this.newTask = { name: '', status: false, description: '' };
    }

    console.log(this.tasks);
  }
  deleteTask(i: number) {
    this.task2.push(this.tasks[i]);
    this.tasks.splice(i, 1);

    this.flag.val = false;
    this.flag.idx = -1;
    this.newTask.name = '';
    this.newTask.status = false;
    this.newTask.description = '';

    console.log(this.task2);
  }
  updateTask(i: number) {
    this.newTask.name = this.tasks[i].name;
    this.newTask.status = this.tasks[i].status;
    this.newTask.description = this.tasks[i].description;
    this.flag.val = true;
    this.flag.idx = i;
  }
  closeFun() {
    this.flag.val = false;
    this.flag.idx = -1;
    this.newTask.name = '';
    this.newTask.status = false;
    this.newTask.description = '';
  }
  temp():  boolean{
    if(this.newTask.name==="" || this.newTask.description==""){
      return false; 
    }
    return true;
  }
}
