import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RdfService } from '../../services/rdf.service';
import { AuthService } from '../../services/solid.auth.service';
import { PermissionsComponent } from './permissions.component';
describe('PermissionsComponent', () => {
  let component: PermissionsComponent;
  let fixture: ComponentFixture<PermissionsComponent>;
  beforeEach(() => {
    const rdfServiceStub = { setPermissions: () => ({}) };
    const authServiceStub = { isSessionActive: () => ({}) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PermissionsComponent],
      providers: [
        { provide: RdfService, useValue: rdfServiceStub },
        { provide: AuthService, useValue: authServiceStub }
      ]
    });
    fixture = TestBed.createComponent(PermissionsComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
