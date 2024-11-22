import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store8Component } from './store8.component';

describe('Store8Component', () => {
  let component: Store8Component;
  let fixture: ComponentFixture<Store8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Store8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Store8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
