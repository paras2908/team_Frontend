import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;
  selectedFile;
  avatarName;
  message;
  imgURL;
  hide = true;
  constructor(private formBuilder: FormBuilder, private userservice: UserService , private authservice: AuthService) {

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
    if (!this.registerForm.valid) {
      Swal.fire(
        'Ooops!',
        'Invalid Credentials!',
        'error'
      )
      return;
    }

    this.authservice.getUser(formdata.username).subscribe(data => {
      if (!data) {
        formdata.avatar = this.avatarName;
        this.userservice.addUser(formdata).subscribe(data => {
        console.log(data[`message`]);
        Swal.fire(
          'Success!',
          'User Registered Successfully!',
          'success');
    });
      } else {
        Swal.fire(
          'SignUp Failed!',
          'User Already exists!',
          'warning');
        return;
      }

    });

  }
  onFileChanged(event) {
    let formdata = new FormData();
    this.selectedFile = event.target.files[0];
    this.avatarName = this.selectedFile.name;
    this.preview(event.target.files);
    formdata.append('avatar', this. selectedFile, this.selectedFile.name);
    this.userservice.uploadImage(formdata).subscribe(response => {
      console.log(response.message);
      console.log(this.avatarName);
    });
  }
  preview(files) {
    if (files.length === 0) {
      return;
    }

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only Images are Supported.';
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };

  }

}
