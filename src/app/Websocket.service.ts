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
sendMessage(message){
  this.socket.emit('msg', message);
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
