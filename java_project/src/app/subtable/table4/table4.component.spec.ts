import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table4Component } from './table4.component';

describe('Table4Component', () => {
  let component: Table4Component;
  let fixture: ComponentFixture<Table4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Table4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
