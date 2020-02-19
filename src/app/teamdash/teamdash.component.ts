import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { AuthService } from '../auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-teamdash',
  templateUrl: './teamdash.component.html',
  styleUrls: ['./teamdash.component.css']
})
export class TeamdashComponent implements OnInit {

  teamform;
  teamdata;
  currentUser;
  constructor(private teamservice: TeamService, private authservice: AuthService, private formbuilder: FormBuilder) { }
  ngOnInit() {

    this.currentUser = JSON.parse(sessionStorage.getItem('user'));

  }

  ngAfterViewInit() {
    this.teamservice.getTeamByAdmin(this.currentUser._id).subscribe(data => {
      this.teamdata = data;
      console.log(this.teamdata);
    });
  }

  initForm(teamdata){
    this.teamform = this.formbuilder.group(teamdata);
  }

  addMember(membername) {

    this.authservice.getUser(membername).subscribe(data => {
      let member = data;

      this.initForm(member);
      let exist_members;
      if (this.teamdata.member_id) {
      exist_members = this.teamdata.member_id;
      } else {
        exist_members = []; }
        exist_members.push(member._id);
      console.log(exist_members);
      //FormData.append('member_id', exist_members);
      //console.log(Formdata);
      //this.teamservice.addMember(this.teamdata._id, FormData).subscribe(data => {
      console.log(data);
    
    });

  }

}
