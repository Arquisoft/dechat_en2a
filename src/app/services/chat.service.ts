import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ChatMessage } from '../models/chat-message.model';
import { RdfService } from './rdf.service';
import { User } from '../models/user.model';

@Injectable()
export class ChatService {

  friends: User[] = new Array<User>();
  messages: ChatMessage[] = new Array<ChatMessage>();

  currentChannelUri: string;
  currentChatFileUri: string;

  me: User;
  other: User;

  constructor(private rdf: RdfService) {
    this.loadUserData();
    this.loadFriends();
    // Temporary
    this.setOther(new User('yerayv3', 'Yeray', 'https://yerayv3.inrupt.net/profile/card#me'));
    // this.setOther(new User('migarve55', 'Miguel Garnacho Velez', 'https://migarve55.solid.community/profile/card#me'));

  }

  async loadUserData() {
    await this.rdf.getSession();
    this.me = new User(this.getUsernameFromWebID(this.rdf.session.webId), this.rdf.getName(this.rdf.session.webId), this.rdf.session.webId);
  }

  /* DEPRECATED
  setupListener() {
    this.rdf.addListener(this.getCurrentDateChatUri(this.currentChannelUri), this.loadMessages);
  }
  */


  getUser() {
    return of(this.me);
  }

  getFriends(): Observable<User[]> {
    return of(this.friends);
  }

  setOther(other: User) {
    if (this.other != null) {
      this.other.isCurrent = false;
    }
    other.isCurrent = true;
    console.log('Other is ' + other.username);
    if (this.other == null || this.other.username !== other.username) {
      this.other = other;
      this.reloadMessages();
    }
  }

  async sendMessage(msg: string) {
    this.rdf.appendMessage(await this.getCurrentChatUri(this.currentChannelUri), new ChatMessage(this.me.username, msg, this.me.webId));
    this.reloadMessages();
  }

  async deleteMessage(message: ChatMessage) {
    this.rdf.deleteMessage(await this.getCurrentChatUri(this.currentChannelUri), message);
    this.reloadMessages();
  }

  getMessages(): Observable<ChatMessage[]> {
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
    } catch (error) {
      console.log('Chat not initialised, initializing...');

      this.currentChannelUri = this.getNewChannelUri();
      this.currentChatFileUri = this.getCurrentChatUri(this.currentChannelUri);
      await this.rdf.createStructure(this.currentChatFileUri);
      await this.rdf.createNewChat(this.me.webId, this.other.webId, this.currentChannelUri);

    }


    console.log(`Channel URI [${this.urlLogFilter(this.currentChannelUri)}] FOUND`);
    console.log(`Chat file URI [${this.urlLogFilter(this.currentChatFileUri)}] FOUND`);

  }

  private async loadMessages() {
    console.log(`Getting messages from file [${this.urlLogFilter(this.currentChatFileUri)}]` +
                ` in channel [${this.urlLogFilter(this.currentChannelUri)}]`);
    this.rdf.getMessageUrisForFile(this.currentChatFileUri, this.currentChannelUri).then(res => {
      res.forEach(async el => {
        const maker = await this.rdf.getMessageMaker(el.value, this.currentChatFileUri);
        const m = new ChatMessage(this.getUsernameFromWebID(maker),
                                  await this.rdf.getMessageContent(el.value, this.currentChatFileUri),
                                  maker);
        m.uri = el.value;
        m.timeSent = await this.rdf.getMessageDate(el.value, this.currentChatFileUri);
        this.addMessage(m);
      });
    });
    // this.setupListener();  Not supported by server
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
    return channelUri + '/' +
      now.getUTCFullYear() + '/' +
      ('0' + (now.getUTCMonth() + 1)).slice(-2) + '/' +
      ('0' + now.getUTCDate()).slice(-2) + '/' + 'chat.ttl';
  }

  private getUsernameFromWebID(webId: string): string {
    let username = '';
    if (webId.includes('https://')) {
      username = webId.replace('https://', '');
    } else {
      username = webId.replace('http://', '');
    }
    return username.split('.')[0];
  }

  getNewChannelUri() {
    return this.me.webId.replace('profile/card#me', 'public/' + this.getChannelCode(this.me, this.other));
  }

  getChannelCode(me: User, other: User) {
    return me.username + '_' + other.username;
  }

  urlLogFilter(url: string) {
    return url.replace('https://josecuriosoalternativo.inrupt.net', '').replace('https://josecurioso.solid.community', '');
  }

}
