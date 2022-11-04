import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcodePromoComponent } from './addcode-promo.component';

describe('AddcodePromoComponent', () => {
  let component: AddcodePromoComponent;
  let fixture: ComponentFixture<AddcodePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcodePromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcodePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
