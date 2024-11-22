import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bed7Component } from './bed7.component';

describe('Bed7Component', () => {
  let component: Bed7Component;
  let fixture: ComponentFixture<Bed7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bed7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bed7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
