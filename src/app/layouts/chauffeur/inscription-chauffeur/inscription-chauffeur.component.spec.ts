import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionChauffeurComponent } from './inscription-chauffeur.component';

describe('InscriptionChauffeurComponent', () => {
  let component: InscriptionChauffeurComponent;
  let fixture: ComponentFixture<InscriptionChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
