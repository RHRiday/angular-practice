import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  inputTodo: string = "";

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  toggleStatus(i, val) {
    this.todos.forEach((v) => {
      v.id === i ? v.status = val : '';
    })
  }

  addTodo() {
    if (this.inputTodo.trim() !== '') {
      this.todos.push({
        id: 6,
        description: this.inputTodo,
        status: 'Initiated'
      });

      this.inputTodo = "";
    }
  }
}
