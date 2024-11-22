import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liv1Component } from './liv1.component';

describe('Liv1Component', () => {
  let component: Liv1Component;
  let fixture: ComponentFixture<Liv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Liv1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Liv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
