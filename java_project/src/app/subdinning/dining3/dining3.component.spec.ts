import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dining3Component } from './dining3.component';

describe('Dining3Component', () => {
  let component: Dining3Component;
  let fixture: ComponentFixture<Dining3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dining3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dining3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
