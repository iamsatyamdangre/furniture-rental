import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livingroom5Component } from './livingroom5.component';

describe('Livingroom5Component', () => {
  let component: Livingroom5Component;
  let fixture: ComponentFixture<Livingroom5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livingroom5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Livingroom5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
