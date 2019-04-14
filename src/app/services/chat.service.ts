import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ChatMessage } from '../models/chat-message.model';
import { RdfService } from './rdf.service';
import { User } from '../models/user.model';
import { Chat } from '../models/chat.model';
import { Notification } from '../models/notification.model';
import { NewMessageNotification } from '../models/new-message-notification.model';
import { DeletedMessageNotification } from '../models/deleted-message-notification.model';
import { ChatNotification } from '../models/chat-notification.model';


@Injectable()
export class ChatService {

  friends: User[] = new Array<User>();
  conversations: Chat[] = new Array<Chat>();
  messages: ChatMessage[] = new Array<ChatMessage>();

  currentChat: Chat;

  currentChatFileUri: string;
  interval: any;
  inboxDaemonTimer = 3000;

  me: User;
  other: User;

  constructor(private rdf: RdfService) {
    this.loadUserData().then(() => {
      this.loadFriends();
      this.loadConversations();
      this.startNotificationsDaemon();
    });

  }

  private async loadUserData() {
    await this.rdf.getSession();
    if (!this.rdf.session) {
      return;
    }
    const name = (await this.rdf.getName(this.rdf.session.webId));
    const picUrl = (await this.rdf.getPicture(this.rdf.session.webId));
    this.me = new User(this.getUsernameFromWebID(this.rdf.session.webId), name ? name.value : 'NoName', this.rdf.session.webId, picUrl ? picUrl.value : 'https://material.angular.io/assets/img/examples/shiba1.jpg');
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

  getRawFriends(): User[] {
    return this.friends;
  }

  getConversations(): Observable<Chat[]> {
    return of(this.conversations);
  }

  openChat(chat: Chat) {
    if (!this.rdf.session) {
      return;
    }
    if (this.currentChat != null) {
      this.currentChat.isCurrent = false;
    }
    chat.isCurrent = true;
    console.log('Chat selected ' + chat.chatFileUri);
    if (this.currentChat == null || this.currentChat.chatFileUri !== chat.chatFileUri) {
      this.currentChat = chat;
      this.reloadMessages();
    }
  }

  async sendMessage(msg: string) {
    if (this.currentChat != null) {
      const m = new ChatMessage(this.me.username, msg, this.me.webId, this.me, this.currentChat);
      m.uri = await this.rdf.appendMessage(await this.getCurrentChatUri(this.currentChat.chatFileUri), m);
      this.addMessage(m);
    } else {
      console.log('No chat selected to send messages');
    }
  }

  async deleteMessage(message: ChatMessage) {
    message.chat = this.currentChat;
    this.rdf.deleteMessage(await this.getCurrentChatUri(this.currentChat.chatFileUri), message);
    this.messages.splice(this.messages.indexOf(message), 1);
  }

  getMessages(): Observable<ChatMessage[]> {
    return of(this.messages);
  }

  private async loadFriends() {
    await this.rdf.getSession();
    if (!this.rdf.session) {
      return;
    }
    this.rdf.getFriends().then(res => res.map(e => e.value).forEach(async webId => {
      const name = (await this.rdf.getName(webId));
      const picUrl = (await this.rdf.getPicture(webId));
      this.friends.push(new User(this.getUsernameFromWebID(webId), name ? name.value : 'NoName', webId, picUrl ? picUrl.value : 'https://material.angular.io/assets/img/examples/shiba1.jpg'));
    }));
  }

  private async loadConversations() {
    await this.rdf.getSession();
    if (!this.rdf.session) {
      return;
    }
    const convs = await this.rdf.getConversations(this.me.webId);
    await convs.forEach(async e => {
      const c = new Chat(await this.rdf.getConversationTitle(e.chatFileUri), e.chatFileUri, e.others);
      this.addConversation(c);
    });
  }

  private addConversation(chat: Chat) {
    this.conversations.push(chat);
  }

  private async reloadMessages() {
    this.messages.length = 0;
    this.reloadChatData().then(() => this.loadMessages());
    // this.checkInbox().then(() => this.reloadChatData().then(() => this.loadMessages()));
  }

  private async reloadConversations() {
    this.conversations.length = 0;
    this.loadConversations();
    // this.checkInbox().then(() => this.reloadChatData().then(() => this.loadMessages()));
  }

  private async reloadChatData() {
    console.log('Chat session data reloading...');
    await this.rdf.getSession();
    try {
      this.currentChatFileUri = this.getCurrentChatUri(this.currentChat.chatFileUri);
      await this.rdf.createStructure(this.currentChatFileUri);
    } catch (error) {
      console.log('Chat not initialised');

    }
    console.log(`Channel URI [${this.urlLogFilter(this.currentChat.chatFileUri)}] FOUND`);
    console.log(`Chat file URI [${this.urlLogFilter(this.currentChatFileUri)}] FOUND`);

  }

  private async loadMessages() {
    console.log(`Getting messages from file [${this.urlLogFilter(this.currentChatFileUri)}]` +
                ` in channel [${this.urlLogFilter(this.currentChat.chatFileUri)}]`);
    this.rdf.getMessageUrisForFile(this.currentChatFileUri, this.currentChat.chatFileUri).then(res => {
      res.forEach(async el => {
        const maker = await this.rdf.getMessageMaker(el.value, this.currentChatFileUri);
        const m = new ChatMessage(this.getUsernameFromWebID(maker),
                                  await this.rdf.getMessageContent(el.value, this.currentChatFileUri),
                                  maker, await this.getUserByWebId(maker));
        m.uri = el.value;
        m.timeSent = await this.rdf.getMessageDate(el.value, this.currentChatFileUri);
        this.addMessage(m);
      });
    });
  }

  getUserByWebId(webId: string) {
    if (this.me.webId === webId) {
      return this.me;
    }
    for (let i = 0; i < this.friends.length; i++) {
      if (this.friends[i].webId === webId) {
        return this.friends[i];
      }
    }
    return new User('', '', '', 'https://material.angular.io/assets/img/examples/shiba1.jpg')
  }

  private addMessage(msg: ChatMessage) {
    this.messages.push(msg);
  }

  private getCurrentChatUri(channelUri: string) {
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

  private urlLogFilter(url: string) {
    return url.replace('https://josecuriosoalternativo.inrupt.net', '').replace('https://josecurioso.solid.community', '');
  }

  async checkInbox() {
    if (!this.rdf.session) {
      return;
    }
    await this.rdf.checkInbox(this.me.webId, this);
  }

  async startNotificationsDaemon() {
    if (!this.rdf.session) {
      return;
    }
    this.interval = setInterval(() => {
      this.checkInbox();
    }, this.inboxDaemonTimer); // Executes checkInbox every this.inboxDaemonTimer seconds
  }

  stopNotificationsDaemon() {
    clearInterval(this.interval);
  }

  deleteMessageFromUri(uri: string) {
    this.messages.splice(this.messages.indexOf(this.getMessageByUri(uri)), 1);
  }

  getMessageByUri(uri: string) {
    for (let i = 0; i < this.messages.length; i++) {
      if (this.messages[i].uri === uri) {
        return this.messages[i];
      }
    }
  }

  async callbackForNotificationProcessing(notification: Notification) {
    console.log('Notification callback executed:');
    console.log(notification);
    if (notification instanceof NewMessageNotification) {
      const localNoti = <NewMessageNotification> notification;
      const maker = await this.rdf.getMessageMaker(localNoti.messageUri, this.currentChatFileUri);
        const m = new ChatMessage(this.getUsernameFromWebID(maker),
                                  await this.rdf.getMessageContent(localNoti.messageUri, this.currentChatFileUri),
                                  maker, this.getUserByWebId(maker));
        m.uri = localNoti.messageUri;
        m.timeSent = await this.rdf.getMessageDate(localNoti.messageUri, this.currentChatFileUri);
        this.addMessage(m);
    }
    if (notification instanceof DeletedMessageNotification) {
      const localNoti = <DeletedMessageNotification> notification;
        this.deleteMessageFromUri(localNoti.messageUri);
    }
    if (notification instanceof ChatNotification) {
      const localNoti = <ChatNotification> notification;
      this.rdf.addChatToCard(this.me.webId, localNoti.participants, localNoti.chatUri);
      this.addConversation(new Chat(localNoti.chatName, localNoti.chatUri, localNoti.participants));
    }
  }

  async newConversation(otherWebIds: Array<string>, chatName: string) {
    const chatUri = await this.rdf.createNewChat(this.me.webId, otherWebIds, chatName);
    this.addConversation(new Chat(chatName, chatUri, otherWebIds));
  }

}
