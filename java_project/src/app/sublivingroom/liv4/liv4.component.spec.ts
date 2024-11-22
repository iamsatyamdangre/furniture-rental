import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liv4Component } from './liv4.component';

describe('Liv4Component', () => {
  let component: Liv4Component;
  let fixture: ComponentFixture<Liv4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Liv4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Liv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
