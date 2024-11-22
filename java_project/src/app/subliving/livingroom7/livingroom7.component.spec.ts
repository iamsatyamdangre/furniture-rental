import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livingroom7Component } from './livingroom7.component';

describe('Livingroom7Component', () => {
  let component: Livingroom7Component;
  let fixture: ComponentFixture<Livingroom7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livingroom7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Livingroom7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
