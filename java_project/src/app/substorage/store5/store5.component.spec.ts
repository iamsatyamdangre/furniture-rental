import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store5Component } from './store5.component';

describe('Store5Component', () => {
  let component: Store5Component;
  let fixture: ComponentFixture<Store5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Store5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Store5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
