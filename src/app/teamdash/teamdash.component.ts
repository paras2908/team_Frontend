import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { AuthService } from '../auth.service';
import { FormBuilder } from '@angular/forms';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { WebSocketService } from '../Websocket.service';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teamdash',
  templateUrl: './teamdash.component.html',
  styleUrls: ['./teamdash.component.css']
})
export class TeamdashComponent implements OnInit {

  userIcon = faUser;
  teamform;
  teamdata;
  currentUser;
  temp1 = false;
  temp2 = false;
  temp3  = false;
  showchat = false;
  isadmin = false;

  constructor(private teamservice: TeamService, private authservice: AuthService, private formbuilder: FormBuilder,
              private socket: WebSocketService, private userservice: UserService, private activatedroute: ActivatedRoute) { }
  ngOnInit() {

    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    const teamid = this.activatedroute.snapshot.paramMap.get('teamid');
    this.teamservice.getTeamById(teamid).subscribe(data => {
      console.log(data);
      this.teamdata = data;
      this.showchat = true;
      this.isadmin = this.currentUser._id === this.teamdata.admin_id;
    });

  }
  display_newmem() {
    this.temp2 = false;
    this.temp3 = false;
    this.temp1 = true;
}
  remove_activemem() {
    this.temp2 = false;
    this.temp1 = false;
    this.temp3 = true;
  }
  display_activemem() {
    this.temp1 = false;
    this.temp3 = false;
    this.temp2 = true;
  }

  showChat() {
    this.showchat = true;
  }


  initForm(teamdata) {
    this.teamform = this.formbuilder.group(teamdata);
  }

  addMember(membername) {

    this.authservice.getUser(membername).subscribe(data => {
      const member = data;
      // console.log();
      // this.initForm(member);
      if (!this.teamdata.member_id.includes(member)) {
        this.teamdata.member_id.push(member);
      }

      this.updateMember(member._id, member);
      console.log(this.teamdata);
      this.teamservice.updateTeam(this.teamdata._id, this.teamdata).subscribe( data => {
        console.log(data);
      });

    });
  }

  removeMember(member_id) {
    let user;
    for (let i = 0 ; i < this.teamdata.member_id.length; i++) {
      if (this.teamdata.member_id[i]._id === member_id) {
        user = this.teamdata.member_id[i];

        this.teamdata.member_id.splice(i, 1);
      }
    }
    this.teamservice.updateTeam(this.teamdata._id, this.teamdata).subscribe(data => {
      console.log(data);
    });
    this.userservice.updateUser(user, user._id).subscribe(data => {
      console.log(data);
    });
  }

  updateMember(userid, user) {
    console.log(user);
    user.teams.push(this.teamdata._id);
    console.log(user);
    this.userservice.updateUser(user, userid).subscribe(data => {
      console.log(data);
    });
  }

}

