import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ChatMessage } from '../models/chat-message.model';
import { RdfService } from './rdf.service';
import { User } from '../models/user.model';

@Injectable()
export class ChatService {

  chatMessages: Observable<ChatMessage[]>;
  users: Array<User> = new Array<User>();

  constructor(private rdf : RdfService) {   
    this.loadUsers();
  }

  getUser() {
    return of(new User("Miguel"));
  }

  getUsers() : Observable<User[]> {
    return of(this.users);
  }

  private async loadUsers() {
    await this.rdf.getSession();
    this.rdf.getFriends().then(res => res.map(e => e.value).forEach(async element => {
      this.users.push(new User((await this.rdf.getName(element)).value));
    }));
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
