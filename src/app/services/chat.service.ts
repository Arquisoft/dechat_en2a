import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ChatMessage } from '../models/chat-message.model';
import { RdfService } from './rdf.service';
import { User } from '../models/user.model';

@Injectable()
export class ChatService {

  chatMessages: Observable<ChatMessage[]>;

  constructor(private rdf : RdfService) {
        
  }

  getUser() {
    return of(new User("Miguel"));
  }

  getUsers() : Observable<User[]> {
    var users = new Array<User>();
    users.push(new User("Fulanito"));
    users.push(new User("Menganito"));
    users.push(new User("Adolfito"));
    return of(users);
  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    this.chatMessages = this.getMessages();
  }

  getMessages(): Observable<ChatMessage[]> {
    var messages = new Array<ChatMessage>();
    messages.push(new ChatMessage("Miguel", "Hola"));
    messages.push(new ChatMessage("Adolfito", "Que tal?"));
    messages.push(new ChatMessage("Miguel", "Bien"));
    return of(messages);
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();

    return (date + ' ' + time);
  }
}
