import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liv5Component } from './liv5.component';

describe('Liv5Component', () => {
  let component: Liv5Component;
  let fixture: ComponentFixture<Liv5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Liv5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Liv5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
