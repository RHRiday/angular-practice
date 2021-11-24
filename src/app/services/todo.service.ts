import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [
    {
      id: 1,
      description: 'First todo',
      status: 'Initiated'
    },
    {
      id: 2,
      description: 'Second todo',
      status: 'On Progress'
    },
    {
      id: 3,
      description: 'Third todo',
      status: 'Done'
    },
    {
      id: 4,
      description: 'Fourth todo',
      status: 'Done'
    },
  ]

  constructor() { }

  getTodos() {
    return this.todos;
  }
}
