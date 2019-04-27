import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatItemComponent } from './chat-item.component';
import { ChatService } from '../../services/chat.service';
import { User } from '../../models/user.model';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

// Material
import {MatListModule} from '@angular/material/list';

describe('ChatItemComponent', () => {
  let component: ChatItemComponent;
  let fixture: ComponentFixture<ChatItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatItemComponent ],
      imports: [ MatListModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        FormsModule ],
      providers: [ ChatService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Open a chat', () => {
    it('calls the component chatClicked function', () => {
        spyOn(component, "chatClicked");
        component.chatClicked();
        expect(component.chatClicked).toHaveBeenCalledTimes(1);
    });

    it('calls the service openChat function', async(() => {
        const chatService: ChatService = fixture.debugElement.injector.get(ChatService);
        spyOn(chatService, "openChat");
        component.chatClicked();
        expect(chatService.openChat).toHaveBeenCalledTimes(1);
    }));
  });

  it('clicking a chat should call the chatClicked function', () => {
      spyOn(component, "chatClicked");
      let button = fixture.debugElement.query(By.css('.mat-list-item')).nativeElement;
      button.click();
      expect(component.chatClicked).toHaveBeenCalledTimes(1);
  });

});
