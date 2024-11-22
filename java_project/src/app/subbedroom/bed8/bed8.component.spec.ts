import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bed8Component } from './bed8.component';

describe('Bed8Component', () => {
  let component: Bed8Component;
  let fixture: ComponentFixture<Bed8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bed8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bed8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
