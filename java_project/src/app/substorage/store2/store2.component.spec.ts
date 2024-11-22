import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store2Component } from './store2.component';

describe('Store2Component', () => {
  let component: Store2Component;
  let fixture: ComponentFixture<Store2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Store2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Store2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
