import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Register } from '../models/Register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiRoot + '/auth/';

  constructor(private http: HttpClient) { }

  signup(formData: Register) {
    return this.http.post(this.url + 'signup', formData).toPromise();
  }

  login(formData: Register) {
    return this.http.post(this.url + 'login', formData).toPromise();
  }
}
