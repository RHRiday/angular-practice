import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoAppService {
  readonly baseURL = environment.apiRoot;

  constructor(private http: HttpClient) { }

  addToDo(todoData) {
    return this.http.post(this.baseURL, todoData);
  }

  toggleStatus(id, data) {
    return this.http.put(this.baseURL + '/' + id, data);
  }

  // deleteToDoItem(id: number) {
  //   return this.http.delete(`${this.baseURL}/${id}`, {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json"
  //     })
  //   });
  // }

  public getAll(): Observable<Object> {
    return this.http.get(this.baseURL);
  }





}
