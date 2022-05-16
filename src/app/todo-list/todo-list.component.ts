import { Component, OnInit } from '@angular/core';
import { Todo, TodoList, TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public newTodo: string = '';

  constructor(public todoService: TodoListService) {}

  ngOnInit(): void {}

  onAddTodo(): void {
    this.todoService.add(this.newTodo);

    this.newTodo = '';
  }
}
