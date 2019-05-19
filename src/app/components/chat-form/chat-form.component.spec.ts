import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFormComponent } from './chat-form.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { ToastrModule } from 'ngx-toastr';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

// Material
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

describe('ChatFormComponent', () => {
    let component: ChatFormComponent;
    let fixture: ComponentFixture<ChatFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChatFormComponent],
            imports: [ FormsModule,
                MatInputModule,
                BrowserAnimationsModule,
                PickerModule,
                MatIconModule,
                ToastrModule.forRoot() ],
            providers: [
                { provide: ChatService, useClass: ChatService }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(ChatFormComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Send message', () => {
        it('calls the component send function', () => {
            spyOn(component, "send");
            component.message = "Hello from chat form test";
            component.send();
            expect(component.send).toHaveBeenCalledTimes(1);
        });

        it('calls the service send function', async(() => {
            const chatService: ChatService = fixture.debugElement.injector.get(ChatService);
            spyOn(chatService, "sendMessage").and.callThrough();
            component.message = "Hello from chat form test to chat service";
            component.send();
            expect(chatService.sendMessage).toHaveBeenCalledTimes(1);
        }));
    });

    it('send button should call the send function', () => {
        spyOn(component, "send");
        let button = fixture.debugElement.query(By.css('#send')).nativeElement;
        component.message = "Hello";
        button.click();
        expect(component.send).toHaveBeenCalledTimes(1);
    });
});