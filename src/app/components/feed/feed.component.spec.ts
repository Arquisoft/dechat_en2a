import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedComponent } from './feed.component';
import { MessageComponent } from '../message/message.component';
import { ChatService } from '../../services/chat.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedComponent, MessageComponent ],
      imports: [ MatCardModule,
        MatIconModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot() ],
      providers: [ ChatService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
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
