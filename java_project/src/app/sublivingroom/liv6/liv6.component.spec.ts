import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liv6Component } from './liv6.component';

describe('Liv6Component', () => {
  let component: Liv6Component;
  let fixture: ComponentFixture<Liv6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Liv6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Liv6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
