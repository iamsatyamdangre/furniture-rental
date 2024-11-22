import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bed6Component } from './bed6.component';

describe('Bed6Component', () => {
  let component: Bed6Component;
  let fixture: ComponentFixture<Bed6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bed6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bed6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
