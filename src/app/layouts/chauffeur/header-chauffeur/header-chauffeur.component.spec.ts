import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderChauffeurComponent } from './header-chauffeur.component';

describe('HeaderChauffeurComponent', () => {
  let component: HeaderChauffeurComponent;
  let fixture: ComponentFixture<HeaderChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
