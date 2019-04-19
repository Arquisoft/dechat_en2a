import { Component, OnInit, OnChanges, ViewChild, AfterViewChecked } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';
import { ChatMessage } from '../../models/chat-message.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: Observable<ChatMessage[]>;

  constructor(private chat: ChatService) {}

  ngOnInit() {

    this.feed = this.chat.getMessages();

  }

  ngOnChanges() {
    this.feed = this.chat.getMessages();
  }

  getParticipants() {
     let initial = '';
     if (this.chat.getCurrentChat() !== undefined) {
     this.chat.getCurrentChat().others.forEach(function(cardMeUri) {initial += cardMeUri.split('//')[1].split('.')[0] + '  '; });
     } else {
       console.log('There is no chat selected');
     }
     return initial;
  }

}
