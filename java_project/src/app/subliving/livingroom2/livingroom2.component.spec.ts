import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livingroom2Component } from './livingroom2.component';

describe('Livingroom2Component', () => {
  let component: Livingroom2Component;
  let fixture: ComponentFixture<Livingroom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livingroom2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Livingroom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
