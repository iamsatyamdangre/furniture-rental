import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dining4Component } from './dining4.component';

describe('Dining4Component', () => {
  let component: Dining4Component;
  let fixture: ComponentFixture<Dining4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dining4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dining4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
