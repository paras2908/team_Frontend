import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../Websocket.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(private socketservice: WebSocketService) { }

  ngOnInit() {
    this.socketservice.receiveMessage().subscribe(data => {
      console.log(data);
    })
  }

  sendMessage(message){
    this.socketservice.sendMessage(message);
  }

}
