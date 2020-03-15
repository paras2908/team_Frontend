import { Component, OnInit, Input } from '@angular/core';
import { WebSocketService } from '../Websocket.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  chatMessages = [];
  chatform;
  currentUser;

  @Input('team') teamdata;
  constructor(private socketservice: WebSocketService, private formbuild: FormBuilder) { }

  ngOnInit() {
    console.log(this.teamdata);
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.chatform = this.formbuild.group({
      message : '',
      team : 'myteam',
      membername : this.currentUser.username,
    });

    this.socketservice.recieveTeamMessage().subscribe(data => {
      console.log(data);
    });

    this.socketservice.joinTeam(this.teamdata.name);
  }

  sendMessage(formdata) {
    // console.log(formdata);
    this.chatform.get('message').reset();
    this.socketservice.sendTeamMessage(formdata);
  }

  connectTeam() {
    this.socketservice.joinTeam('myteam');
  }

}

