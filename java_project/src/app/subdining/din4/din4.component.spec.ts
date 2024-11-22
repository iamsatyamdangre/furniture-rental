import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Din4Component } from './din4.component';

describe('Din4Component', () => {
  let component: Din4Component;
  let fixture: ComponentFixture<Din4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Din4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Din4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
