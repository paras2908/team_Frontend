import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedin;
  url = ' http://localhost:3000/user';
  constructor(private http: HttpClient, private router: Router) {
    if (sessionStorage.getItem('user')) {
    this.loggedin = true;
  }
}

  getUser(username): Observable<any> {
    return this.http.get(this.url + `/getbyUserName/${username}`);
  }
  
  setLogin() {
    this.loggedin = true;
  }
  logout() {
    console.log('Logged Out Successfully');
    sessionStorage.removeItem('user');
    this.loggedin = false;
    this.router.navigate(['/login'])
  }
}
