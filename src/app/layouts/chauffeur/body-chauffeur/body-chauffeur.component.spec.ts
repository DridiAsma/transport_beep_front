import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyChauffeurComponent } from './body-chauffeur.component';

describe('BodyChauffeurComponent', () => {
  let component: BodyChauffeurComponent;
  let fixture: ComponentFixture<BodyChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
