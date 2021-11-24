import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoAppService } from 'src/app/services/todo-app.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  inputTodo: string;

  constructor(
    private todoService: TodoAppService,
  ) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo() {
    this.todoService.getAll().subscribe(
      (res: Todo[]) => {
        this.todos = res
      }
    )
  }

  toggleStatus(i, data) {
    this.todoService.toggleStatus(i, { status: data }).subscribe(
      res => this.getTodo()
    );
  }

  addTodo() {
    if (this.inputTodo.trim() !== '') {
      this.todoService.addToDo({ description: this.inputTodo }).subscribe(
        res => this.getTodo()
      )
      this.inputTodo = "";
    }
  }
}