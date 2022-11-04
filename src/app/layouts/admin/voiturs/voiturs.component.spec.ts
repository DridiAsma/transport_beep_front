import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitursComponent } from './voiturs.component';

describe('VoitursComponent', () => {
  let component: VoitursComponent;
  let fixture: ComponentFixture<VoitursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoitursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
