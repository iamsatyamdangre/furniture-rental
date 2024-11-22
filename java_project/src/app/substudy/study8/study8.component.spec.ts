import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Study8Component } from './study8.component';

describe('Study8Component', () => {
  let component: Study8Component;
  let fixture: ComponentFixture<Study8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Study8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Study8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
