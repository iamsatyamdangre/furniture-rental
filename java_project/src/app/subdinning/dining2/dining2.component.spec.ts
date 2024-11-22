import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dining2Component } from './dining2.component';

describe('Dining2Component', () => {
  let component: Dining2Component;
  let fixture: ComponentFixture<Dining2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dining2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dining2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
