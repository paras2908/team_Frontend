import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';
// import { emit, eventNames } from 'cluster';

@Injectable({
  providedIn: 'root'
})
export class  WebSocketService {
  url = 'http://localhost:3000';
  socket: any;

  constructor() {
    this.socket = io(this.url);
  }

  // createTeam(teamId){
  //   console.log(teamId);
  //   this.socket = io(this.url);
  //   this.socket.emit('çreateteam', teamId);
  //   this.socket.on('teamcreated', data => {
  //     console.log(`socket id : ${data}`);
  //     return data;
  //   });
  // }

  joinTeam(team){
    this.socket.emit('jointeam', team);
  }

sendMessage(message){
  this.socket.emit('msg', message);
}

sendTeamMessage(data){
  this.socket.emit('teamMsg', data);
}

recieveTeamMessage(){
  return Observable.create(observer => {
    this.socket.on('recTeamMsg', (data) => {
      observer.next(data);
    })
  })
}

receiveMessage(){
  return Observable.create(observer => {
    this.socket.on('getmsg', (data) => {
      observer.next(data);
    })
  })
}

listen(eventName: string) {
  return new Observable(( subscriber ) => {
    this.socket.on(eventName, (data) => {
    subscriber.next(data);
    });
   });
  }
 emit(eventName: string, data: any){
    this.socket.emit(eventName,data);
 }

}
