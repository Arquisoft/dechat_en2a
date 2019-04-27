import { Component, EventEmitter, OnInit, OnChanges, Output, ViewChild, AfterViewChecked, Optional } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';
import { ChatMessage } from '../../models/chat-message.model';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: Observable<ChatMessage[]>;

  constructor(private chat: ChatService) {
  }

  ngOnInit() {
    this.feed = this.chat.getMessages();
  }

  ngOnChanges() {
  }

}
