import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDemandesComponent } from './table-demandes.component';

describe('TableDemandesComponent', () => {
  let component: TableDemandesComponent;
  let fixture: ComponentFixture<TableDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDemandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
