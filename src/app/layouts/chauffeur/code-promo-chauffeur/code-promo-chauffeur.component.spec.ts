import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePromoChauffeurComponent } from './code-promo-chauffeur.component';

describe('CodePromoChauffeurComponent', () => {
  let component: CodePromoChauffeurComponent;
  let fixture: ComponentFixture<CodePromoChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodePromoChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodePromoChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
