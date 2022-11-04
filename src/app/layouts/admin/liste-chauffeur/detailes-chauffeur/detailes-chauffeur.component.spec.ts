import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailesChauffeurComponent } from './detailes-chauffeur.component';

describe('DetailesChauffeurComponent', () => {
  let component: DetailesChauffeurComponent;
  let fixture: ComponentFixture<DetailesChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailesChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailesChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
