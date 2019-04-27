import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../../services/solid.auth.service';
import { RegisterComponent } from './register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  beforeEach(() => {
    const authServiceStub = { getIdentityProviders: () => ({}) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [BrowserAnimationsModule],
      declarations: [RegisterComponent],
      providers: [{ provide: AuthService, useValue: authServiceStub }]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

});
