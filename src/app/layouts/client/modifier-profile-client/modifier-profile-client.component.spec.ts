import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProfileClientComponent } from './modifier-profile-client.component';

describe('ModifierProfileClientComponent', () => {
  let component: ModifierProfileClientComponent;
  let fixture: ComponentFixture<ModifierProfileClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierProfileClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierProfileClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
