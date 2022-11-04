import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercomptAdminComponent } from './modifiercompt-admin.component';

describe('ModifiercomptAdminComponent', () => {
  let component: ModifiercomptAdminComponent;
  let fixture: ComponentFixture<ModifiercomptAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiercomptAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiercomptAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
