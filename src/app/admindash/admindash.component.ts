import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  teamdata;
  currentUser;
  constructor(private teamservice: TeamService) { }

  ngOnInit() {

    this.currentUser = sessionStorage.getItem('user');

  }

}
