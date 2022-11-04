import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavChauffeurComponent } from './sidenav-chauffeur.component';

describe('SidenavChauffeurComponent', () => {
  let component: SidenavChauffeurComponent;
  let fixture: ComponentFixture<SidenavChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
