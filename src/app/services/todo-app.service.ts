import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TodoAppService {
  readonly baseURL = environment.apiRoot + '/';

  list: Todo[] = [];

  constructor(private http: HttpClient) { }

  addToDo(todoData: Todo) {
    return this.http.post(this.baseURL, todoData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  toggleStatus(id, status) {
    return this.http.put(`${this.baseURL}/${id}`, status, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  // deleteToDoItem(id: number) {
  //   return this.http.delete(`${this.baseURL}/${id}`, {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json"
  //     })
  //   });
  // }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => {
        this.list = res as Todo[]
      });
  }





}
