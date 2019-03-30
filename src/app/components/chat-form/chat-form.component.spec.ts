import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFormComponent } from './chat-form.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { RdfService } from '../../services/rdf.service';
import { ToastrModule } from 'ngx-toastr';
import { By } from '@angular/platform-browser';

describe('ChatFormComponent', () => {
    let component: ChatFormComponent;
    let fixture: ComponentFixture<ChatFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChatFormComponent],
            imports: [ FormsModule , ToastrModule.forRoot() ],
            providers: [ ChatService, RdfService ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Send message', () => {
        it('calls the component send function', async(() => {
            spyOn(component, "send");
            component.message = "Hello from chat form test";
            component.send();
            expect(component.send).toHaveBeenCalledTimes(1);
        }));

        it('calls the service send function', async(() => {
            const chatServiceStub: ChatService = fixture.debugElement.injector.get(ChatService);
            spyOn(chatServiceStub, "sendMessage");
            component.message = "Hello from chat form test to chat service";
            component.send();
            expect(chatServiceStub.sendMessage).toHaveBeenCalledTimes(1);
        }));
    });

    it('send button should call the send function', async(() => {
        spyOn(component, "send");
        let button = fixture.debugElement.query(By.css('#send')).nativeElement;
        component.message = "Hello";
        button.click();
        expect(component.send).toHaveBeenCalledTimes(1);
    }));
});