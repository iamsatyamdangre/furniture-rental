import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liv7Component } from './liv7.component';

describe('Liv7Component', () => {
  let component: Liv7Component;
  let fixture: ComponentFixture<Liv7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Liv7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Liv7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
