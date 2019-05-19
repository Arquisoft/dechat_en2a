import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  message: string = '';
  displayEmojiPane = false;

  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  send() {
    this.chat.sendMessage(this.message);
    this.message = '';
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

  selectEmoji($event) {
    this.message = this.message + $event.emoji.native;
  }

  updateDisplay() {
    this.displayEmojiPane = !this.displayEmojiPane;
  }

}
