import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store7Component } from './store7.component';

describe('Store7Component', () => {
  let component: Store7Component;
  let fixture: ComponentFixture<Store7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Store7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Store7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
