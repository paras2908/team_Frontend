import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;
  constructor(private formBuilder: FormBuilder, private userservice: UserService) {

   }

  ngOnInit() {

    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      first : ['', Validators.required],
      last : ['', Validators.required],
      username : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required],
      confirm : ['', Validators.required],
      avatar : '',
      admin : false,
      created : new Date()
    });

  }

  getControl(name) {
    // console.log(this.registerForm.controls[name])
    return this.registerForm.controls[name];
  }

  userSubmit(formdata) {
    this.userservice.addUser(formdata).subscribe(data => {
      console.log(data['message']);
    });
  }

}
