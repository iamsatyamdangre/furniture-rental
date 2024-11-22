import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Study5Component } from './study5.component';

describe('Study5Component', () => {
  let component: Study5Component;
  let fixture: ComponentFixture<Study5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Study5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Study5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
