import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teamregister',
  templateUrl: './teamregister.component.html',
  styleUrls: ['./teamregister.component.css']
})
export class TeamregisterComponent implements OnInit {

  teamicon = faUserFriends;
  teamform;
  currentUser;
  constructor(private formbuilder: FormBuilder, private teamservice: TeamService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));

    this.initForm();
  }

  initForm(){
    this.teamform = this.formbuilder.group({
      name : '',
      admin_id : this.currentUser._id,
      member_id : [],
    });
  }

  createTeam(formdata){
    console.log(formdata);
    this.teamservice.addteam(formdata).subscribe(data => {
      console.log(data);
    });

  }

}
