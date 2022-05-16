import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private list: TodoList = [];

  constructor() {}

  all(): TodoList {
    return this.list;
  }
}

export type Todo = {
  id: number;
  label: string;
  done: boolean;
};

export type TodoList = Array<Todo>;
