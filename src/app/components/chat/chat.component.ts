import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scroller', { read: ElementRef }) private feedContainer: any;

  constructor() { }

  ngOnInit() { }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  async scrollToBottom() {
    this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
  }

}
