import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ElementRef } from '@angular/core';
import { LoginPopupComponent } from './login-popup.component';
describe('LoginPopupComponent', () => {
  let component: LoginPopupComponent;
  let fixture: ComponentFixture<LoginPopupComponent>;
  beforeEach(() => {
    const elementRefStub = { nativeElement: { appendChild: () => ({}) } };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LoginPopupComponent],
      providers: [{ provide: ElementRef, useValue: elementRefStub }]
    });
    fixture = TestBed.createComponent(LoginPopupComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'runScript');
      component.ngOnInit();
      expect(component.runScript).toHaveBeenCalled();
    });
  });
});
