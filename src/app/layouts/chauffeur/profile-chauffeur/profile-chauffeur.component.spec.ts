import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChauffeurComponent } from './profile-chauffeur.component';

describe('ProfileChauffeurComponent', () => {
  let component: ProfileChauffeurComponent;
  let fixture: ComponentFixture<ProfileChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
