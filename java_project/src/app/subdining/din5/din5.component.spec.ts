import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Din5Component } from './din5.component';

describe('Din5Component', () => {
  let component: Din5Component;
  let fixture: ComponentFixture<Din5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Din5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Din5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
