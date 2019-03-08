import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ChatMessage } from '../models/chat-message.model';
import { SolidSession } from '../models/solid-session.model';
import { RdfService } from './rdf.service';
import { User } from '../models/user.model';

import * as fileClient from 'solid-file-client';

@Injectable()
export class ChatService {

  friends: User[] = new Array<User>();
  messages: ChatMessage[] = new Array<ChatMessage>();

  currentChannelUri: string;
  currentChatFileUri: string;

  me: User;
  other: User;

  constructor(private rdf : RdfService) {  
    this.loadUserData(); 
    this.loadFriends();
    //Temporary
    //this.setOther(new User('josecurioso2', 'Jose Alternativo', 'https://josecuriosoalternativo.inrupt.net/profile/card#me'));
    //this.setOther(new User('migarve55', 'Miguel Garnacho Velez', 'https://migarve55.solid.community/profile/card#me'));

  }

  async loadUserData() {
    await this.rdf.getSession();
    let currentSession = this.rdf.session
    let name = this.rdf.getName(currentSession.webId);
    let username = this.getUsernameFromWebID(currentSession.webId);
    this.me = new User(username, name, currentSession.webId);
  }

  /* DEPRECATED
  setupListener() {
    this.rdf.addListener(this.getCurrentDateChatUri(this.currentChannelUri), this.loadMessages);
  }
  */


  getUser() {
    return of(this.me);
  }

  getFriends() : Observable<User[]> {
    return of(this.friends);
  }

  setOther(other: User) {
    console.log('Other is ' + other.username);
    if(this.other == null || this.other.username != other.username){
      this.other = other;
      this.reloadMessages();
    }
  }

  async sendMessage(msg: string) {
    let fileToWrite = await this.getCurrentChatUri(this.currentChannelUri);
    const timestamp = this.getTimeStamp();
    let m = new ChatMessage(this.me.username, msg);
    m.webId = this.me.webId;
    this.rdf.appendMessage(fileToWrite, m);
    this.reloadMessages();
  }

  getMessages() : Observable<ChatMessage[]> {
    return of(this.messages);
  }

  private async loadFriends() {
    await this.rdf.getSession();
    this.rdf.getFriends().then(res => res.map(e => e.value).forEach(async webId => {
      this.friends.push(new User(this.getUsernameFromWebID(webId), (await this.rdf.getName(webId)).value, webId));
      this.setOther(this.friends[0]);
    }));
  }

  private async reloadMessages() {
    this.messages.length = 0;
    this.reloadChatData().then(() => this.loadMessages());
  }

  private async reloadChatData() {
    console.log('Chat session data reloading...');
    await this.rdf.getSession();
    try {
      this.currentChannelUri = await this.rdf.getChannelUri(this.me.webId, this.other.webId);
      this.currentChatFileUri = this.getCurrentChatUri(this.currentChannelUri);
      await this.rdf.createStructure(this.currentChatFileUri);
    }
    catch(error) {
        console.log('Chat not initialised, initializing...');

        this.currentChannelUri = this.getNewChannelUri();
        this.currentChatFileUri = this.getCurrentChatUri(this.currentChannelUri);
        await this.rdf.createStructure(this.currentChatFileUri);
        await this.rdf.createNewChat(this.me.webId, this.other.webId, this.currentChannelUri);

    }


    console.log(`Channel URI [${this.urlLogFilter(this.currentChannelUri)}] FOUND`)
    console.log(`Chat file URI [${this.urlLogFilter(this.currentChatFileUri)}] FOUND`)

  }

  private async loadMessages() {
    console.log(`Getting messages from file [${this.urlLogFilter(this.currentChatFileUri)}] in channel [${this.urlLogFilter(this.currentChannelUri)}]`)
    this.rdf.getMessageUrisForFile(this.currentChatFileUri, this.currentChannelUri).then(res => {
      res.forEach(async el => {
        let maker = await this.rdf.getMessageMaker(el.value, this.currentChatFileUri);
        let content = await this.rdf.getMessageContent(el.value, this.currentChatFileUri);
        let date = await this.rdf.getMessageDate(el.value, this.currentChatFileUri);
        let m = new ChatMessage(this.getUsernameFromWebID(maker), content);
        m.timeSent = date;
        m.webId = maker;
        this.addMessage(m);
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

  getCurrentChatUri(channelUri: string) {
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
    let usr = username.split('.')[0];
    return usr;


  }

  getNewChannelUri() {
    return this.me.webId.replace('profile/card#me', 'public/' + this.getChannelCode(this.me, this.other));
  }

  getChannelCode(me: User, other: User) {
    return me.username + '_' + other.username;
  }

  urlLogFilter(url: string) {
    return url.replace('https://josecuriosoalternativo.inrupt.net', '')
  }
}
