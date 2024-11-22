import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Din3Component } from './din3.component';

describe('Din3Component', () => {
  let component: Din3Component;
  let fixture: ComponentFixture<Din3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Din3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Din3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
