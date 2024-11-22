import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Study6Component } from './study6.component';

describe('Study6Component', () => {
  let component: Study6Component;
  let fixture: ComponentFixture<Study6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Study6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Study6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
