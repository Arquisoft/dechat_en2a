import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListComponent, NewChatDialogComponent } from './chat-list.component';
import { ChatItemComponent } from '../chat-item/chat-item.component';
import { ChatService } from '../../services/chat.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { FormsModule } from '@angular/forms';

// Material
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material';

describe('ChatListComponent', () => {
  let component: ChatListComponent;
  let fixture: ComponentFixture<ChatListComponent>;

  let componentNew: NewChatDialogComponent;
  let fixtureNew: ComponentFixture<NewChatDialogComponent>;

  const mockDialog = {
    close: jasmine.createSpy('close')
  };

  const mockDialogData = {
    close: jasmine.createSpy('close')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatListComponent, ChatItemComponent, NewChatDialogComponent ],
      imports: [ MatIconModule, 
        MatListModule,
        MatDialogModule,
        BrowserAnimationsModule,
        AngularMultiSelectModule,
        MatSnackBarModule,
        MatInputModule,
        FormsModule,
        ToastrModule.forRoot() ],
        providers: [ ChatService, { provide: MatDialogRef, useValue: mockDialog }, { provide: MAT_DIALOG_DATA, useValue: mockDialogData }]
      })
      .overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [ NewChatDialogComponent ] }})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fixtureNew = TestBed.createComponent(NewChatDialogComponent);
    componentNew = fixtureNew.componentInstance;
    fixtureNew.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Create new chat', () => {
    it('calls the component function', () => {
        spyOn(component, "newConversation").and.callThrough();
        spyOn(component, "openDialog").and.callThrough();
        spyOn(component, "convertFriendsForSelect").and.callThrough();
        component.newConversation();
        component.chatName = "Chat test";
        let ok = fixtureNew.debugElement.query(By.css('.ok-button')).nativeElement;
        ok.click();
        component.dialog.closeAll();
        expect(component.newConversation).toHaveBeenCalledTimes(1);
        expect(component.openDialog).toHaveBeenCalledTimes(1);
        expect(component.convertFriendsForSelect).toHaveBeenCalledTimes(1);
    });
  });

  it('create button should call the newConversation function', () => {
      spyOn(component, "newConversation");
      let button = fixture.debugElement.query(By.css('.new-coversation-button')).nativeElement;
      button.click();
      let ok = fixtureNew.debugElement.query(By.css('.ok-button')).nativeElement;
      ok.click();
      component.dialog.closeAll();
      expect(component.newConversation).toHaveBeenCalledTimes(1);
  });
});
