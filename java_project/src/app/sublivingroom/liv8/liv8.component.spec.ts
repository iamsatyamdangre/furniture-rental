import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liv8Component } from './liv8.component';

describe('Liv8Component', () => {
  let component: Liv8Component;
  let fixture: ComponentFixture<Liv8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Liv8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Liv8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
