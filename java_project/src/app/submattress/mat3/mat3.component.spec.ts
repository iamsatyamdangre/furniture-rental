import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mat3Component } from './mat3.component';

describe('Mat3Component', () => {
  let component: Mat3Component;
  let fixture: ComponentFixture<Mat3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mat3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mat3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
