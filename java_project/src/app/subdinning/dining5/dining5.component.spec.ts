import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dining5Component } from './dining5.component';

describe('Dining5Component', () => {
  let component: Dining5Component;
  let fixture: ComponentFixture<Dining5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dining5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dining5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
