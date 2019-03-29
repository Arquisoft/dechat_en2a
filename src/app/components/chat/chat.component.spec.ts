import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { FriendListComponent } from '../friend-list/friend-list.component';
import { FeedComponent } from '../feed/feed.component';
import { ChatFormComponent } from '../chat-form/chat-form.component';
import { ChatService } from '../../services/chat.service';
import { FriendItemComponent } from '../friend-item/friend-item.component';
import { MessageComponent } from '../message/message.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatComponent, FriendListComponent, FeedComponent, ChatFormComponent, FriendItemComponent , MessageComponent ],
      imports: [ FormsModule , ToastrModule.forRoot()  ],
      providers: [ ChatService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
