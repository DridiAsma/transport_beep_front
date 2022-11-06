import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfailClientComponent } from './profail-client.component';

describe('ProfailClientComponent', () => {
  let component: ProfailClientComponent;
  let fixture: ComponentFixture<ProfailClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfailClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfailClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
