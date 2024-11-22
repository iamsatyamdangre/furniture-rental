import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Study4Component } from './study4.component';

describe('Study4Component', () => {
  let component: Study4Component;
  let fixture: ComponentFixture<Study4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Study4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Study4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
