import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent {
  users: User[];

  constructor(chat: ChatService) {
    chat.getFriends().subscribe(users => {
      this.users = users;
    });
  }
}
