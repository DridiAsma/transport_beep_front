import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeChauffeurComponent } from './commande-chauffeur.component';

describe('CommandeChauffeurComponent', () => {
  let component: CommandeChauffeurComponent;
  let fixture: ComponentFixture<CommandeChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
