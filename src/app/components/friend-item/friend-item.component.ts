import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.css']
})
export class FriendItemComponent implements OnInit {

  @Input() user: User;

  constructor(private cService: ChatService) { }

  ngOnInit() {
  }

  userClicked() {
    this.cService.setOther(this.user);
  }

}
