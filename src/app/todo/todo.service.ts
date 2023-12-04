import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private todos: string[] = [];

  getTodos() {
    return this.todos;
  }

  addTodo(newTodo: string) {
    this.todos.push(newTodo);
  }
}
