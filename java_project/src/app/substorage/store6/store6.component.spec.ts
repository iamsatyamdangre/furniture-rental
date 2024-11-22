import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store6Component } from './store6.component';

describe('Store6Component', () => {
  let component: Store6Component;
  let fixture: ComponentFixture<Store6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Store6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Store6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
