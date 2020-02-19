import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Users } from '../users';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userIcon = faUser;
  lock = faLock;
  loginform;
  logged_user;
  user: string;
  constructor(private formbuilder: FormBuilder, private authservice: AuthService, private router: Router ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.loginform = this.formbuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
     } );
  }
  formSubmit(formdata) {
    console.log('meh');
    if ( formdata.invalid ){
      alert('ínvalid form')
      return; }

    this.authservice.getUser(formdata.username).subscribe(data => {
    const user: Users = data;

    if (user) {
      if (user.password === formdata.password )
       sessionStorage.setItem("user",JSON.stringify(user));
        this.authservice.setLogin();
        if(user['admin']){
          this.router.navigate(['/admin'])
        }
        else{
          this.router.navigate(['/home'])
        }
    }
  })
}

}



