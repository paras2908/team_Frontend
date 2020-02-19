import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.css']
})
export class ResetpwdComponent implements OnInit {
  otp;
  resetform;
  showReset = false;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initform();
  }

initform() {
  this.resetform = this.formBuilder.group({
    otp: [''],
    new: ['', Validators.minLength(5)],
    confirm: ['']

  }, {validation: this.matchPassword('new', 'confirm')}
  );
}

matchPassword(pass, confirm_pass ) {
  return (userform) => {
    let passControl = userform.controls[pass];
    let confirmControl = userform.controls[confirm_pass];

    if (passControl.value !== confirmControl.value) {
      confirmControl.setErrors({match: true});
    }
  };

 }

resetPassword(formdata) {
  console.log(this.otp);
  if (this.otp === formdata.otp) {
console.log ('Correct OTP');
  } else {
    alert('Invalid OTP');
  }

}

  sendOTP(email) {
    this.showReset = true;
    this.otp = Math.floor(1000 + Math.random() * 9000);
    this.sendmail({from: 'rudranshveer068@gmail.com', to: email,
 message: `Your OTP for reseting password is ${this.otp}`
})
.subscribe((data) => {
  console.log(data);
});
  }

  sendmail(data) {
    return this.http.post('http://localhost:3000/util/sendmail',data);
  }

}
