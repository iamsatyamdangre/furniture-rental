import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livingroom1Component } from './livingroom1.component';

describe('Livingroom1Component', () => {
  let component: Livingroom1Component;
  let fixture: ComponentFixture<Livingroom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livingroom1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Livingroom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
