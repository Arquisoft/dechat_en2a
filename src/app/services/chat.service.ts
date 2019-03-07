import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ChatMessage } from '../models/chat-message.model';
import { RdfService } from './rdf.service';
import { User } from '../models/user.model';

@Injectable()
export class ChatService {

  users: User[] = new Array<User>();
  messages: ChatMessage[] = new Array<ChatMessage>();

  constructor(private rdf : RdfService) {   
    this.loadMessages();
    this.loadUsers();
  }

  getUser() {
    return of(new User("Miguel"));
  }

  getUsers() : Observable<User[]> {
    return of(this.users);
  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    //TO-DO
  }

  getMessages() : Observable<ChatMessage[]> {
    this.addMessage(new ChatMessage("Jose Manuel", "Hola caracola"))
    return of(this.messages);
  }

  private async loadUsers() {
    await this.rdf.getSession();
    this.rdf.getFriends().then(res => res.map(e => e.value).forEach(async element => {
      this.users.push(new User((await this.rdf.getName(element)).value));
    }));
  }

  private async loadMessages() {
    await this.rdf.getSession();

    let chatUri = 'https://josecurioso.inrupt.net/public/chatDePruebas.ttl';
    let chatFileUri = this.rdf.getChatFileUriForDate('2019', '03', '07', chatUri);
    
    this.rdf.getMessageUrisForFile(chatFileUri, chatUri).then(res => {
      res.forEach(async el => {
        this.addMessage((await this.rdf.getMessageData(el.value, chatFileUri)));
      })
    })

  }

  private addMessage(msg: ChatMessage) {
    this.messages.push(msg);
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
