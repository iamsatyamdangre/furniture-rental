import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bed4Component } from './bed4.component';

describe('Bed4Component', () => {
  let component: Bed4Component;
  let fixture: ComponentFixture<Bed4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bed4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bed4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
