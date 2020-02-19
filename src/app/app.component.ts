import { Component, OnInit } from '@angular/core';
// import { WebSocketService } from './Websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LinkUp.com';
  constructor(){}
  ngOnInit() {

    // here we will listen to events from socket.io server
    // this.websocketservice.listen('test event').subscribe((data) => {
    //     console.log(data);
    // })
    
  }
}
