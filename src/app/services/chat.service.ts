import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ChatMessage } from '../models/chat-message.model';
import { SolidSession } from '../models/solid-session.model';
import { RdfService } from './rdf.service';
import { User } from '../models/user.model';

@Injectable()
export class ChatService {

  friends: User[] = new Array<User>();
  messages: ChatMessage[] = new Array<ChatMessage>();

  currentChannelUri: string;

  me: User;
  other: User;

  constructor(private rdf : RdfService) {  
    this.loadUserData(); 
    this.loadFriends();
    //Temporary
    this.setOther(new User('josecurioso2', 'Jose Alternativo', 'https://josecuriosoalternativo.inrupt.net/profile/card#me'));
    //
    this.loadMessages();

  }

  async loadUserData() {
    await this.rdf.getSession();
    let currentSession = this.rdf.session
    let name = this.rdf.getName(currentSession.webId);
    let username = this.getUsernameFromWebID(currentSession.webId);
    this.me = new User(username, name, currentSession.webId);
  }

  setupListener() {
    this.rdf.addListener(this.getCurrentDateChatUri(this.currentChannelUri), this.loadMessages);
  }


  getUser() {
    return of(this.me);
  }

  getFriends() : Observable<User[]> {
    return of(this.friends);
  }

  setOther(other: User) {
    this.other = other;
  }

  sendMessage(msg: string) {
    let fileToWrite = this.getCurrentDateChatUri(this.currentChannelUri);
    const timestamp = this.getTimeStamp();
    this.rdf.appendMessage(fileToWrite, new ChatMessage(this.me.webId, msg));
    this.reloadMessages();
  }

  getMessages() : Observable<ChatMessage[]> {
    return of(this.messages);
  }

  private async loadFriends() {
    await this.rdf.getSession();
    this.rdf.getFriends().then(res => res.map(e => e.value).forEach(async webId => {
      this.friends.push(new User((await this.rdf.getName(webId)).value, this.getUsernameFromWebID(webId), webId));
    }));
  }

  private reloadMessages() {
    this.loadMessages();
  }

  private async loadMessages() {
    await this.rdf.getSession();
    //let channelUri = 'https://josecurioso.inrupt.net/public/chatDePruebas.ttl';
    this.currentChannelUri = await this.rdf.getChannelUri(this.me.webId, this.other.webId);
    //let chatFileUri = this.rdf.getChatFileUriForDate('2019', '03', '07', chatUri);
    let chatFileUri = this.getCurrentDateChatUri(this.currentChannelUri);    
    this.rdf.getMessageUrisForFile(chatFileUri, this.currentChannelUri).then(res => {
      res.forEach(async el => {
        this.addMessage((await this.rdf.getMessageData(el.value, chatFileUri)));
      })
    })
    //this.setupListener();  Not supported by server
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

  getCurrentDateChatUri(channelUri: string) : string {
    const now = new Date();
    return channelUri + '/' + now.getUTCFullYear() + '/' + ('0' + (now.getUTCMonth() + 1)).slice(-2) + '/' + ('0' + now.getUTCDate()).slice(-2) + '/' + 'chat.ttl';
  }

  private getUsernameFromWebID(webId: string) : string {
    let username: string = '';
    if(webId.includes('https://')){
      username = webId.replace('https://', '');
    }
    else {
      username = webId.replace('http://', '');
    }
    return username.split('.')[0];
  }



}
