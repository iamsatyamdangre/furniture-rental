import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Study7Component } from './study7.component';

describe('Study7Component', () => {
  let component: Study7Component;
  let fixture: ComponentFixture<Study7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Study7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Study7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
