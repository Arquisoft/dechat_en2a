import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RdfService } from '../../services/rdf.service';
import { AuthService } from '../../services/solid.auth.service';
import { ProfileComponent } from './profile.component';
describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  beforeEach(() => {
    const activatedRouteStub = {};
    const rdfServiceStub = {
      getProfile: () => ({}),
      updateProfile: () => ({}),
      addFriend: () => ({})
    };
    const authServiceStub = {
      saveOldUserData: () => ({}),
      solidSignOut: () => ({})
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProfileComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: RdfService, useValue: rdfServiceStub },
        { provide: AuthService, useValue: authServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('logout', () => {
    it('It makes the calls while logout', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'solidSignOut');
      component.logout();
      expect(authServiceStub.solidSignOut).toHaveBeenCalled();
    });
  });
  describe('addFriend', () => {
    it('It makes the calls while adding friends', () => {
      const rdfServiceStub: RdfService = fixture.debugElement.injector.get(
        RdfService
      );
      spyOn(rdfServiceStub, 'addFriend');
      component.addFriend();
      expect(rdfServiceStub.addFriend).toHaveBeenCalled();
    });
  });
});
