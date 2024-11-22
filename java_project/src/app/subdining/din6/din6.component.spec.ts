import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Din6Component } from './din6.component';

describe('Din6Component', () => {
  let component: Din6Component;
  let fixture: ComponentFixture<Din6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Din6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Din6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
