import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerChauffeurComponent } from './controller-chauffeur.component';

describe('ControllerChauffeurComponent', () => {
  let component: ControllerChauffeurComponent;
  let fixture: ComponentFixture<ControllerChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllerChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllerChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
