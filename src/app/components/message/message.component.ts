import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ChatMessage } from '../../models/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  isOwnMessage: boolean;
  ownEmail: string;

  constructor(private chatService: ChatService) { }

  delete() {
    this.chatService.deleteMessage(this.chatMessage);
  }

  ngOnInit(chatMessage = this.chatMessage) {
    if (!chatMessage) {
      chatMessage = new ChatMessage('username', 'Can\'t load', 'http://webid.com');
    }
    this.chatService.getUser().subscribe(user => {
      if (user !== undefined) { // A better way of solving this
        this.userName = user.username;
      } else {
        this.userName = "MockName";
      }
    });
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.isOwnMessage = (this.userName === chatMessage.userName);
    this.userName = chatMessage.userName;
  }
}
