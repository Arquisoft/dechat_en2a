import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFormComponent } from './chat-form.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { ToastrModule } from 'ngx-toastr';

describe('ChatFormComponent', () => {
    let component: ChatFormComponent;
    let fixture: ComponentFixture<ChatFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChatFormComponent],
            imports: [ FormsModule , ToastrModule.forRoot() ],
            providers: [ ChatService ]
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
});