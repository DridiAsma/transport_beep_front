import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailesClientComponent } from './detailes-client.component';

describe('DetailesClientComponent', () => {
  let component: DetailesClientComponent;
  let fixture: ComponentFixture<DetailesClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailesClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
