import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProfilChauffeurComponent } from './modifier-profil-chauffeur.component';

describe('ModifierProfilChauffeurComponent', () => {
  let component: ModifierProfilChauffeurComponent;
  let fixture: ComponentFixture<ModifierProfilChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierProfilChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierProfilChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
