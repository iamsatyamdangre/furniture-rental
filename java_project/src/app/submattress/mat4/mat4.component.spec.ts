import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mat4Component } from './mat4.component';

describe('Mat4Component', () => {
  let component: Mat4Component;
  let fixture: ComponentFixture<Mat4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mat4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mat4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
