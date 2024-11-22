import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liv2Component } from './liv2.component';

describe('Liv2Component', () => {
  let component: Liv2Component;
  let fixture: ComponentFixture<Liv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Liv2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Liv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
