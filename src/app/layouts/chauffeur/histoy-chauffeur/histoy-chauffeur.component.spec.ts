import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoyChauffeurComponent } from './histoy-chauffeur.component';

describe('HistoyChauffeurComponent', () => {
  let component: HistoyChauffeurComponent;
  let fixture: ComponentFixture<HistoyChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoyChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoyChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
