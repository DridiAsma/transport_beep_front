import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForntPageComponent } from './fornt-page.component';

describe('ForntPageComponent', () => {
  let component: ForntPageComponent;
  let fixture: ComponentFixture<ForntPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForntPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForntPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
