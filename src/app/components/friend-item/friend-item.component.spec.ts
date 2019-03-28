import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendItemComponent } from './friend-item.component';
import { ChatService } from '../../services/chat.service';
import { User } from '../../models/user.model';
import { ToastrModule } from 'ngx-toastr';

describe('FriendItemComponent', () => {
  let component: FriendItemComponent;
  let fixture: ComponentFixture<FriendItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendItemComponent ],
      imports: [ ToastrModule.forRoot() ],
      providers: [ ChatService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
