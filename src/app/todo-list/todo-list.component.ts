import { Component, OnInit } from '@angular/core';
import { Todo, TodoList } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public newTodo: string = '';

  public todoList: TodoList = [
    { id: 1, label: 'Faire les courses', done: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  onAddTodo(): void {
    this.todoList.push({
      id: this.todoList.length + 1,
      label: this.newTodo,
      done: false,
    });

    this.newTodo = '';
  }

  deleteTodo(todo: Todo): void {
    this.todoList = this.todoList.filter((t) => t.id !== todo.id);
  }
}
