import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chairs1Component } from './chairs1.component';

describe('Chairs1Component', () => {
  let component: Chairs1Component;
  let fixture: ComponentFixture<Chairs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chairs1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chairs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
