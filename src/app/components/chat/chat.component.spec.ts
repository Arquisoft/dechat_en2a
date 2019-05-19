import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { ChatListComponent } from '../chat-list/chat-list.component';
import { FeedComponent } from '../feed/feed.component';
import { ChatFormComponent } from '../chat-form/chat-form.component';
import { ChatService } from '../../services/chat.service';
import { ChatItemComponent } from '../chat-item/chat-item.component';
import { MessageComponent } from '../message/message.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

// Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatComponent, ChatListComponent, FeedComponent, ChatFormComponent, ChatItemComponent , MessageComponent ],
      imports: [ FormsModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatCardModule,
        MatDialogModule,
        AngularMultiSelectModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
        PickerModule,
         ToastrModule.forRoot()  ],
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

  it('should return an empty list of participants', () => {
    spyOn(component, "getParticipants").and.callThrough();
    expect(component.getParticipants()).toBe('');
    expect(component.getParticipants).toHaveBeenCalledTimes(1);
  });
});
