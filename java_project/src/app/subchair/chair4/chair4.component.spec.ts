import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chair4Component } from './chair4.component';

describe('Chair4Component', () => {
  let component: Chair4Component;
  let fixture: ComponentFixture<Chair4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chair4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chair4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
