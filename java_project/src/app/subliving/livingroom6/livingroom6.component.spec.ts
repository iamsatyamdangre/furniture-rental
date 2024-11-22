import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livingroom6Component } from './livingroom6.component';

describe('Livingroom6Component', () => {
  let component: Livingroom6Component;
  let fixture: ComponentFixture<Livingroom6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livingroom6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Livingroom6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
