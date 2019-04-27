import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @ViewChild('scroller', { read: ElementRef }) private feedContainer: any;

  observer: MutationObserver;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.observer = new MutationObserver(mutations => {
      if (mutations.length !== 0) {
        this.scrollToBottom();
      }
    });
    this.observer.observe(this.feedContainer.nativeElement, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  async scrollToBottom() {
    this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
  }

  getParticipants() {
    const usrs = [];
    let initial = '';
    if (this.chat.currentChat !== undefined) {
      this.chat.currentChat.others.forEach(function(cardMeUri) {usrs.push(cardMeUri.split('//')[1].split('.')[0] + '  ' ); });
      initial = usrs.join(', ');
    } else {
    }
    return initial;
  }

}
