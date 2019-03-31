import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { ChatService } from '../../services/chat.service';
import { ToastrModule } from 'ngx-toastr';
import { By } from '@angular/platform-browser';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageComponent],
      imports: [ToastrModule.forRoot()],
      providers: [ChatService]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(MessageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Delete the message', () => {
    it('calls the component delete function', () => {
      spyOn(component, "delete");
      component.delete();
      expect(component.delete).toHaveBeenCalledTimes(1);
    });

    it('calls the service delete function', async(() => {
      const chatService: ChatService = fixture.debugElement.injector.get(ChatService);
      spyOn(chatService, "deleteMessage");
      component.delete();
      expect(chatService.deleteMessage).toHaveBeenCalledTimes(1);
    }));
  });

  it('delete button works', () => {
    spyOn(component, "delete");
        let button = fixture.debugElement.query(By.css('.deleteButton')).nativeElement;
        button.click();
        expect(component.delete).toHaveBeenCalledTimes(1);
  });
});
