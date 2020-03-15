import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = ' http://localhost:3000/user';
  constructor(private http: HttpClient) { }

  addUser(data) {
    return this.http.post(this.url + '/add', data);
  }
  uploadImage(file): Observable<any> {
      return this.http.post(this.url + '/addimg', file);
  }
  updateUser(user, id) {
    return this.http.put(this.url + `/updateuser/${id}`, user);
  }

  getUserById(id) {
    return this.http.get(this.url + `/getbyid/${id}`);
  }

  getMyTeams(userid) {
    return this.http.get(this.url + `/getbyadminid/${userid}`);
  }
}
