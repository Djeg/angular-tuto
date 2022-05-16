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

  add(label: string): void {
    this.list.push({
      id: this.list.length + 1,
      label: label,
      done: false,
    });
  }

  remove(todo: Todo): void {
    this.list = this.list.filter((t) => t.id !== todo.id);
  }

  check(receivedTodo: Todo): void {
    this.list = this.list.map((todo) => {
      // On test si t'id du todo sur lequel on boucle
      // est identique au todo reçu en paramètre de notre
      // méthode 'check'
      if (todo.id === receivedTodo.id) {
        // On retourne le todo auquel on change la
        // propriété done (en utilisant la restructuration) :
        return {
          ...todo,
          done: !todo.done,
        };
      }

      return todo;
    });
  }
}

export type Todo = {
  id: number;
  label: string;
  done: boolean;
};

export type TodoList = Array<Todo>;
