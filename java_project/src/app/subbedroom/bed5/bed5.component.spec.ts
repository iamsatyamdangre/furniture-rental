import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bed5Component } from './bed5.component';

describe('Bed5Component', () => {
  let component: Bed5Component;
  let fixture: ComponentFixture<Bed5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bed5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bed5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
