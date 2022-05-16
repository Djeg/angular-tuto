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

  add(todo: Todo): void {
    this.list.push(todo);
  }

  remove(todo: Todo): void {
    this.list = this.list.filter((t) => t.id !== todo.id);
  }

  check(todo: Todo): void {
    this.list = this.list.map((t) => {
      if (t.id !== todo.id) {
        return todo;
      }

      return { ...todo, done: !todo.done };
    });
  }
}

export type Todo = {
  id: number;
  label: string;
  done: boolean;
};

export type TodoList = Array<Todo>;
