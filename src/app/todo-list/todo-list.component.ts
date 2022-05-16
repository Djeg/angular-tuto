import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public newTodo: string = '';

  public todoList: Array<string> = ['Faire les courses'];

  constructor() {}

  ngOnInit(): void {}

  onAddTodo(): void {
    this.todoList.push(this.newTodo);
    this.newTodo = '';
  }
}
