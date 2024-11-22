import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Din8Component } from './din8.component';

describe('Din8Component', () => {
  let component: Din8Component;
  let fixture: ComponentFixture<Din8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Din8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Din8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
