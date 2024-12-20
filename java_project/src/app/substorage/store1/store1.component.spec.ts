import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store1Component } from './store1.component';

describe('Store1Component', () => {
  let component: Store1Component;
  let fixture: ComponentFixture<Store1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Store1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Store1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
