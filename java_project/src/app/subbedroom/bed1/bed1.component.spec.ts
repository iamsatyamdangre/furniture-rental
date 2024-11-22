import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bed1Component } from './bed1.component';

describe('Bed1Component', () => {
  let component: Bed1Component;
  let fixture: ComponentFixture<Bed1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bed1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bed1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
