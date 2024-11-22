import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livingroom3Component } from './livingroom3.component';

describe('Livingroom3Component', () => {
  let component: Livingroom3Component;
  let fixture: ComponentFixture<Livingroom3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livingroom3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Livingroom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
