import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chair1Component } from './chair1.component';

describe('Chair1Component', () => {
  let component: Chair1Component;
  let fixture: ComponentFixture<Chair1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chair1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chair1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
