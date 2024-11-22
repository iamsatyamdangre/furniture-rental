import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dining1Component } from './dining1.component';

describe('Dining1Component', () => {
  let component: Dining1Component;
  let fixture: ComponentFixture<Dining1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dining1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dining1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
