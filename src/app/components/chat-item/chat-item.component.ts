import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat.model';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

  @Input() chat: Chat = new Chat('Titulo Pruebas', 'conversacion pruebas', ['http://prueba.user/webid']);

  constructor(private cService: ChatService) {  }

  ngOnInit() {
  }

  chatClicked() {
    this.cService.openChat(this.chat);
  }

}
