import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginChauffeurComponent } from './login-chauffeur.component';

describe('LoginChauffeurComponent', () => {
  let component: LoginChauffeurComponent;
  let fixture: ComponentFixture<LoginChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
