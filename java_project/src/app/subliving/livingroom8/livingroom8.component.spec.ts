import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livingroom8Component } from './livingroom8.component';

describe('Livingroom8Component', () => {
  let component: Livingroom8Component;
  let fixture: ComponentFixture<Livingroom8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livingroom8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Livingroom8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
