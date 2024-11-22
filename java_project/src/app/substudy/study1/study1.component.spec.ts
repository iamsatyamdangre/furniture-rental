import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Study1Component } from './study1.component';

describe('Study1Component', () => {
  let component: Study1Component;
  let fixture: ComponentFixture<Study1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Study1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Study1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
