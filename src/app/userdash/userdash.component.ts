import { Component, OnInit } from '@angular/core';
import { TeamregisterComponent } from '../teamregister/teamregister.component';
import { TeamService } from '../team.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
  teamMem = [];
  temp1 = false;
  teams;
  currentUser;
  ateams;
  constructor(private teamserve: TeamService, private userservice: UserService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.refreshUser();
    console.log(this.currentUser);
    // this.userservice.getUserById(user._id).subscribe(data => {
    //   console.log(data);
    //   this.currentUser = data;
    //   this.getTeams();
    // })
    this.getTeams();
  }

  getTeams() {
    this.teamserve.getTeamByAdmin(this.currentUser._id).subscribe(data => {
      console.log(data);
      this.teams = data;
      this.ateams = this.currentUser.teams;
    });
  }

  refreshUser() {
    this.userservice.getUserById(this.currentUser._id).subscribe(data => {
      console.log(data);
      this.currentUser = data;
    });
  }

  display_registerform() {
    this.temp1 = true;
    this.getTeams();
  }
}

