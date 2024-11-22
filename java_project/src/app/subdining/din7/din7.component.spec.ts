import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Din7Component } from './din7.component';

describe('Din7Component', () => {
  let component: Din7Component;
  let fixture: ComponentFixture<Din7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Din7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Din7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
