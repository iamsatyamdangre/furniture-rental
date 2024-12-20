import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mat2Component } from './mat2.component';

describe('Mat2Component', () => {
  let component: Mat2Component;
  let fixture: ComponentFixture<Mat2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mat2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
