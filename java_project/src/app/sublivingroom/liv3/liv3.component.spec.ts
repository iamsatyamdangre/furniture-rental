import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liv3Component } from './liv3.component';

describe('Liv3Component', () => {
  let component: Liv3Component;
  let fixture: ComponentFixture<Liv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Liv3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Liv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
