import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mat1Component } from './mat1.component';

describe('Mat1Component', () => {
  let component: Mat1Component;
  let fixture: ComponentFixture<Mat1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mat1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
