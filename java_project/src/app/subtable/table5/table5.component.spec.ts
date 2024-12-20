import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table5Component } from './table5.component';

describe('Table5Component', () => {
  let component: Table5Component;
  let fixture: ComponentFixture<Table5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Table5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
