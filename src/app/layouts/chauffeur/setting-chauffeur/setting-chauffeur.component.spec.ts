import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingChauffeurComponent } from './setting-chauffeur.component';

describe('SettingChauffeurComponent', () => {
  let component: SettingChauffeurComponent;
  let fixture: ComponentFixture<SettingChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
