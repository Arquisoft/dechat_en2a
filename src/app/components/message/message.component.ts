import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ChatMessage } from '../../models/chat-message.model';
import { User } from 'src/app/models/user.model';
import {DomSanitizer} from '@angular/platform-browser';
import {__await} from 'tslib';

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
  imageStyle: any;
  imageURl: string;
  videoUrl: any ;

  constructor(private chatService: ChatService, private sanitizer: DomSanitizer , private snackBar: MatSnackBar) {
  }

  delete() {
    this.chatService.deleteMessage(this.chatMessage);
  }

  ngOnInit(chatMessage = this.chatMessage) {
    this.chatService.getUser().subscribe(user => {
      if (user !== undefined) { // A better way of solving this
        this.userName = user.username;
      } else {
        this.userName = 'MockName';
      }
    });
    if (!chatMessage) {
      this.isOwnMessage = true;
      this.chatMessage = new ChatMessage('username', 'Can\'t load', 'http://webid.com',
        new User('', '', '', 'https://material.angular.io/assets/img/examples/shiba1.jpg'));
      chatMessage = new ChatMessage('username', 'Can\'t load', 'http://webid.com',
        new User('', '', '', 'https://material.angular.io/assets/img/examples/shiba1.jpg'));
    } else {
      this.isOwnMessage = (this.userName === chatMessage.userName);
    }
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userName = chatMessage.userName;
  }



    checkUrl() {
          if (/[.](jpg|png|gif)/.test(this.messageContent)) {
                return 1;
        } else if (this.messageContent.includes('www.youtube')) {
            this.messageContent = this.messageContent.replace('watch?v=', 'embed/');
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.messageContent);
                return 2;
         } else if (/[.](es|com|net)/.test(this.messageContent )) {
            return 0;
        }

    }
}
